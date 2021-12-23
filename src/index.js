import "regenerator-runtime/runtime.js";
import React from 'react';

import AWS from "aws-sdk";
import dotenv from "dotenv";
import { nanoid } from "nanoid";
import ReactPDF from '@react-pdf/renderer';

import testData from './test-data.js';

import { pdfComponents } from "./pdfs";

dotenv.config();

const s3 = new AWS.S3();
const ses = new AWS.SES();

const getBaseComponent = (components, component) => {
	if (component in components) {
		return components[component];
	}
	throw new Error(`No component defined with name ${component}`);
};

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
	const data = event.body;
	try {
		let reactTemplate;
		try {
			reactTemplate = getBaseComponent(pdfComponents, data.data.dat.meta.engine);
		} catch (err) {
			console.log(err);
			return;
		}

		const buffer = await renderPdf(reactTemplate, data.data);

		const s3Params = {
			Bucket: "pdfs.christee",
			Key: `${nanoid()}.pdf`,
			Body: buffer,
			ContentType: "application/pdf",
			ServerSideEncryption: "AES256"
		};

		const s3Res = await s3.upload(s3Params, err => {
			if (err) {
				console.log("s3ResErr", err);
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
				console.log("sesResErr", err);
				return callback(null, {
					statusCode: err.statusCode,
					body: err.message
				});
			}
		}).promise();

		if (sesRes) {
			console.log("sesRes", sesRes);
			// callback(null, { statusCode: 200 })
		}
	} catch (err) {
		return context.fail(err);
	}
};

// For local testing:

handler({
    body: {
		data: {
			dat: testData,
			title: "Christee Report: Buyer Choice",
			subtitle: "Buyer Choice"
		},
        email: "foreman270478@gmail.com",
    }
})
