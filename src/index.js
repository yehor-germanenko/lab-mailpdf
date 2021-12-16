import fs from 'fs';

import React from 'react';
import { nanoid } from "nanoid";
import ReactPDF from '@react-pdf/renderer';

import {pdfComponents} from "../example";

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

const handler = async (event) => {
	try {
		let reactTemplate;
		try {
			reactTemplate = getBaseComponent(pdfComponents, event.template);
		} catch (e) {
			console.log(e.message);
			return;
		}

		const buffer = await renderPdf(reactTemplate, event.data);

		fs.writeFileSync(`./pdfs/${nanoid()}.pdf`, buffer, 'binary');
	} catch (e) {
		console.log(e.message);
	}
};

const event = {
	data: {
		title: 'Example',
		text: 'example'
	},
	template: 'document'
}

handler(event);
