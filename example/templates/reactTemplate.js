import React from 'react';

import PropTypes from 'prop-types';
import { Document, Page, Text } from '@react-pdf/renderer';

const MyDocument = ({ title, text }) => (
	<Document>
		<Page>
			<Text>{title}</Text>
			<Text>{text}</Text>
		</Page>
	</Document>
);

MyDocument.prototype = {
	title: PropTypes.string,
	text: PropTypes.string,
};

export default MyDocument;
