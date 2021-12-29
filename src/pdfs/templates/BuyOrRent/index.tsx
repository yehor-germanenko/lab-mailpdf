/*
 * Copyright 2020-2021 AskChristee, LLC. All rights reserved.
 */

/**
 * Rent or Buy PDF
 *
 * This files has both the PDF container and the report details as a function.
 * While report details could be separated out into it's own file, there
 * is no problem having it together, so the file includes all that is required.
 *
 * Also, as this PDF would be required in both the ask and tcb urls, having
 * it as a single file seems to be cleaner, but that may just be a
 * personal preference.
 *
 * TODO: pdf-helpers.rob should move into the Styles.js
 */
import React from 'react';
import { Document, Page, Text, Image, StyleSheet } from '@react-pdf/renderer';
import { View } from '@react-pdf/renderer';
import ReportTitle from '../../atoms/Pdf/ReportTitle';
import logo from '../../assets/images/logo.png';
import styled from '@react-pdf/styled-components';
import ReportClose from '../ClosingAcalc';
import { TBoRANotes, TBuyOrRentResponseObject } from '../../types/api';

const Note = styled.Text`
  width: '100%';
  text-align: left;
  font-size: 9px;
`;

type DetailProps = {
  aNotes: TBoRANotes;
};

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
    alignItems: 'center',
    height: 16,
  },
});

const ReportDetailsRefactor: React.FC<DetailProps> = ({ aNotes }) => {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.row}>
        <Note>{aNotes.pdf_head1}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aNotes.pdf_head2}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aNotes.pdf_head3}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aNotes.pdf_head4}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aNotes.pdf_mess1}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aNotes.pdf_mess2}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aNotes.pdf_mess3}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aNotes.pdf_mess5}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aNotes.pdf_mess6}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aNotes.pdf_mess7}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aNotes.pdf_mess8}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aNotes.pdf_mess9}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aNotes.pdf_mess10}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aNotes.pdf_mess11}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aNotes.pdf_mess12}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aNotes.pdf_mess13}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aNotes.pdf_mess14}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aNotes.pdf_mess15}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aNotes.pdf_mess16}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aNotes.pdf_mess17}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aNotes.pdf_mess18}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aNotes.pdf_mess19}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aNotes.pdf_mess20}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aNotes.pdf_mess21}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aNotes.pdf_mess22}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aNotes.pdf_mess23}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aNotes.pdf_mess24}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aNotes.pdf_mess25}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aNotes.pdf_mess26}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aNotes.pdf_mess27}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aNotes.pdf_mess28}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aNotes.pdf_mess29}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aNotes.pdf_mess30}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aNotes.pdf_mess31}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aNotes.pdf_mess32}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aNotes.pdf_mess33}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aNotes.pdf_mess34}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aNotes.pdf_mess35}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aNotes.pdf_mess36}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aNotes.pdf_mess37}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aNotes.pdf_mess38}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aNotes.pdf_mess39}</Note>
      </View>
    </View>
  );
};

interface Props {
    dat: {
        conventional: TBuyOrRentResponseObject | undefined;
        fha: TBuyOrRentResponseObject | undefined;
        va: TBuyOrRentResponseObject | undefined;
        usda: TBuyOrRentResponseObject | undefined;
    }
}

const PdfReportContainer: React.FC<Props> = ({dat: { conventional, fha, va, usda}}) => {
  let title = '';
  return (
    <Document>
      {conventional?.aNotes && (
        <Page style={styles.body}>
          <Text style={styles.header} fixed>
            <Image style={styles.image} src={logo} />
          </Text>
          <ReportTitle title={title} />
          <ReportDetailsRefactor {...conventional} />
          <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
        </Page>
      )}
      {conventional?.aNotes && (
        <Page style={styles.body}>
          <Text style={styles.header} fixed>
            <Image style={styles.image} src={logo} />
          </Text>
          <ReportTitle title="Christee Report: Buy or Rent Closing" />
          <ReportClose dat={conventional} />
          <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
        </Page>
      )}
      {fha?.aNotes && (
        <Page style={styles.body}>
          <Text style={styles.header} fixed>
            <Image style={styles.image} src={logo} />
          </Text>
          <ReportTitle title={title} />
          <ReportDetailsRefactor {...fha} />
          <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
        </Page>
      )}
      {fha?.aNotes && (
        <Page style={styles.body}>
          <Text style={styles.header} fixed>
            <Image style={styles.image} src={logo} />
          </Text>
          <ReportTitle title="Christee Report: Buy or Rent Closing" />
          <ReportClose dat={fha} />
          <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
        </Page>
      )}
      {va?.aNotes && (
        <Page style={styles.body}>
          <Text style={styles.header} fixed>
            <Image style={styles.image} src={logo} />
          </Text>
          <ReportTitle title={title} />
          <ReportDetailsRefactor {...va} />
          <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
        </Page>
      )}
      {va?.aNotes && (
        <Page style={styles.body}>
          <Text style={styles.header} fixed>
            <Image style={styles.image} src={logo} />
          </Text>
          <ReportTitle title="Christee Report: Buy or Rent Closing" />
          <ReportClose dat={va} />
          <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
        </Page>
      )}
      {usda?.aNotes && (
        <Page style={styles.body}>
          <Text style={styles.header} fixed>
            <Image style={styles.image} src={logo} />
          </Text>
          <ReportTitle title={title} />
          <ReportDetailsRefactor {...usda} />
          <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
        </Page>
      )}
      {usda?.aNotes && (
        <Page style={styles.body}>
          <Text style={styles.header} fixed>
            <Image style={styles.image} src={logo} />
          </Text>
          <ReportTitle title="Christee Report: Buy or Rent Closing" />
          <ReportClose dat={usda} />
          <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
        </Page>
      )}
    </Document>
  );
};
export default PdfReportContainer;
