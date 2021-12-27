/*
 * Copyright 2020-2021 AskChristee, LLC. All rights reserved.
 */

import { Document, Image, Page, StyleSheet, Text } from '@react-pdf/renderer';
import React from 'react';
import { PdfReportTitle } from '../../atoms';
import logo from '../../assets/images/logo.png';
import PdfRow from "./PdfRow";
import PdfRowHeader from './PdfRowHeader';
import PdfSummaryHeader from './PdfSummaryHeader';
import PdfDetailHeader from './PdfDetailHeader';

/**
 * TODO: PDF fails when import atoms/styles
 *
 * import { StylesFromAtoms } from "../atoms/Styles";
 * const styles = StylesFromAtoms;
 */
const styles = StyleSheet.create({
  body: {
    paddingTop: 10,
    paddingBottom: 25,
    paddingHorizontal: 30,
    backgroundColor: '#E4E4E4',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 9,
    bottom: 15,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'black',
  },
  image: {
    width: 70,
    height: 20,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  acalc: {
    width: '12%',
    fontSize: 9,
    textAlign: 'left',
  },
  row: {
    flexDirection: 'row',
    height: 16,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

function PdfReportContainer({ dat }: any) {
  console.log('pdfreportcontainer', dat);
  return (
    <Page size="LETTER" style={styles.body}>
      <Text style={styles.header} fixed>
        <Image style={styles.image} src={logo} />
      </Text>
      <PdfReportTitle title={dat.fumess} />
      <PdfSummaryHeader />
      <PdfRowHeader {...dat} />
      <PdfReportTitle title="Amortization Details on A Year To Year Basis" />
      <PdfDetailHeader />
      <PdfRow {...dat} />
      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
    </Page>
  );
}

// since there are two sections, title is not used
export default function AmortizationPdf({ dat }: any) {
  return (
    <Document>
      <PdfReportContainer dat={dat} />
    </Document>
  );
}
