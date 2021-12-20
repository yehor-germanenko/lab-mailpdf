import React from 'react';

import AWS from "aws-sdk";
import dotenv from "dotenv";
import { nanoid } from "nanoid";
import ReactPDF from '@react-pdf/renderer';

import { pdfComponents } from "../example";

dotenv.config();

const s3 = new AWS.S3();

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

export const handler = async (event, context, callBack) => {
	try {
		let reactTemplate;
		try {
			reactTemplate = getBaseComponent(pdfComponents, event.template);
		} catch (err) {
			console.log(err);
			return;
		}

		const buffer = await renderPdf(reactTemplate, event.data);

		const s3Params = {
			Bucket: "pdfs.christee",
			Key: `${nanoid()}.pdf`,
			Body: buffer,
			ContentType: "application/pdf",
			ServerSideEncryption: "AES256"
		};

		const res = await s3.putObject(s3Params, err => {
			if (err) {
				console.log("err", err);
				return callBack(null, { err });
			}
		}).promise();
		if (res) {
			console.log(res);
		}
	} catch (err) {
		console.log("err", err);
		return context.fail(err);
	}
};

// For local testing:

// handler({
// 	data: {
// 		title: "title",
// 		text: "text"
// 	},
// 	template: "document"
// })
