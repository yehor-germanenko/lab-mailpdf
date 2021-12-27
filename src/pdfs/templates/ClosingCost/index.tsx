/*
 * Copyright 2020-2021 AskChristee, LLC. All rights reserved.
 */

import { Document, View } from '@react-pdf/renderer';
import React, { Fragment } from 'react';
import { Page, Text, Image, StyleSheet } from '@react-pdf/renderer';
import styled from '@react-pdf/styled-components';
import ReportTitle from '../../atoms/Pdf/ReportTitle';
import { PdfText } from '../../atoms';
import logo from '../../assets/images/logo.png';
import { TClosingCostPdf } from '../../types/api';

const Description = styled.Text`
  text-align: left;
  font-size: 9px;
`;

const styles = StyleSheet.create({
  body: {
    fontFamily: 'Roboto',
    paddingTop: 10,
    paddingBottom: 25,
    paddingHorizontal: 30,
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
  textbold: {
    fontFamily: 'RobotoBold',
    fontWeight: 900,
    fontSize: 9,
  },
  description: {
    textAlign: 'left',
    width: '50%',
    fontSize: 9,
  },
  description2: {
    textAlign: 'left',
    width: '100%',
    fontSize: 9,
  },
  tableContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    height: 16,
    width: '100%',
  },
  acalc: {
    width: '30%',
    fontSize: 9,
    textAlign: 'left',
  },
});

const PdfReport: React.FC<Props> = ({ pdf }) => {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.row}>
        <Description>
          <PdfText v={pdf.pdfmess2a} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v={pdf.pdfmess1} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v={pdf.pdfmess2} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v={pdf.pdfmess3a} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v={pdf.pdfmess3ab} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v={pdf.pdfmess3} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v={pdf.pdfmess4} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v={pdf.pdfmess5} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v={pdf.pdfmess6} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v={pdf.pdfmess7} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v={pdf.pdfmess8} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v={pdf.pdfmess9} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v={pdf.pdfmess10} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v={pdf.pdfmess11} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v={pdf.pdfmess12} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v={pdf.pdfmess13} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v={pdf.pdfmess14} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v={pdf.pdfmess15} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v={pdf.pdfmess16} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v={pdf.pdfmess17} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v={pdf.pdfmess18} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v={pdf.pdfmess19} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v={pdf.pdfmess20} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v={pdf.pdfmess21} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v={pdf.pdfmess22} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v={pdf.pdfmess23} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v={pdf.pdfmess24} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v={pdf.pdfmess25} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v={pdf.pdfmess26} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v={pdf.pdfmess27} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v={pdf.pdfmess28} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v={pdf.pdfmess29} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v={pdf.pdfmess30} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v={pdf.pdfmess31} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v={pdf.pdfmess32} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v={pdf.pdfmess33} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v={pdf.pdfmess34} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v={pdf.pdfmess35} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v={pdf.pdfmess36} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v={pdf.pdfmess37} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v={pdf.pdfmess38} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v={pdf.pdfmess39} />
        </Description>
      </View>
    </View>
  );
};

const BuyWaitPdf: React.FC<Props> = ({ pdf }) => {
  return (
    <Fragment>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>
          <Image style={styles.image} src={logo} />
        </Text>
        <ReportTitle title={pdf.pdfmess1} />
        <PdfReport pdf={pdf} />
        <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
      </Page>
    </Fragment>
  );
};

interface Props {
  pdf: TClosingCostPdf;
}

const ClosingCostFinal: React.FC<Props> = ({ pdf }) => {
  console.log('ClosingCost Final pdf->', pdf);

  return (
    <Document>
      <BuyWaitPdf pdf={pdf} />
    </Document>
  );
};

export default ClosingCostFinal;
