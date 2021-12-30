import "regenerator-runtime/runtime.js";
import React from 'react';

import AWS from "aws-sdk";
import nodemailer from "nodemailer";
import ReactPDF from '@react-pdf/renderer';

import { pdfComponents } from "./pdfs";

const transporter = nodemailer.createTransport({
	SES: new AWS.SES()
});

const getBaseComponent = (components, component) => {
	if (component in components) {
		return components[component];
	}
	throw {
		statusCode: 422,
		message: `No such template defined with name ${component}`
	};
};

const sendMail = (mailOptions) => {
	return new Promise((resolve, reject)=>{
		transporter.sendMail(mailOptions, (err, info) => {
			if (err) {
				reject(err);
			}
			resolve(info);
		});
	});
}

const renderPdf = async (component, data) => {
	const rootElemComponent = React.createElement(component, data);
	const stream = await ReactPDF.renderToStream(rootElemComponent);

	return new Promise(function(resolve, reject) {
		const buffers = []
		stream.on('data', (data) => {
			buffers.push(data)
		})
		stream.on('end', () => {
			resolve(Buffer.concat(buffers))
		})
		stream.on('error', reject)
	})
};

export const handler = async (event, context, callback) => {
	const data = JSON.parse(event.body);
	if (!data.data.dat || !data.data.title || !data.email) {
		callback(null, {
			statusCode: 400,
			body: "Some parameter are missing"
		});
	}
	try {
		let reactTemplate;
		try {
			reactTemplate = getBaseComponent(pdfComponents, data.data.dat.meta.engine);
		} catch (err) {
			callback(null, {
				statusCode: err.statusCode,
				body: err.message
			});
		}

		const buffer = await renderPdf(reactTemplate, {dat: {...data.data.dat, title: data.data.title }});

		const mailOptions = {
			from: "no-reply@askchristee.com",
			to: data.email,
			subject: "SES Example",
			text: "Your pdf is here",
			attachments: {
				filename: `${data.data.dat.meta.engine}-report.pdf`,
				content: buffer,
				contentType: "application/pdf",
			},
		};

		const mailRes = await sendMail(mailOptions);

		if (mailRes) {
			callback(null, {
				statusCode: 200,
				body: "Link to pdf has been sent to your email!"
			})
		}
	} catch (err) {
		return context.fail(err);
	}
};

// Pdf as link

/*
const s3Params = {
    Bucket: "pdfs.christee",
    Key: `${nanoid()}.pdf`,
    Body: buffer,
    ContentType: "application/pdf",
    ServerSideEncryption: "AES256"
};


const s3Res = await s3.upload(s3Params, (err) => {
    if (err) {
        return callback(null, {
            statusCode: err.statusCode,
            body: err.message
        });
    }
}).promise();

const sesParams = {
    Source: 'no-reply@askchristee.com',
    Destination: {
        ToAddresses: [data.email]
    },
    ReplyToAddresses: [],
    Message: {
        Body: {
            Html: {
                Charset: "UTF-8",
                Data: `Pdf report is <a href="${s3Res.Location}">here</a>.`
            }
        },
        Subject: {
            Charset: 'UTF-8',
            Data: 'SES Example'
        }
    }
};

const sesRes = await ses.sendEmail(sesParams, err => {
    if (err) {
        return callback(null, {
            statusCode: err.statusCode,
            body: err.message
        });
    }
});

if (sesRes) {
    callback(null, {
        statusCode: 200,
        body: "Link to pdf has been sent to your email!"
    })
}
*/
