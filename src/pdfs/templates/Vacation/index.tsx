/*
 * Copyright 2020-2021 AskChristee, LLC. All rights reserved.
 */

import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import React, { Fragment } from "react";
import styled from "@react-pdf/styled-components";
import ReportTitle from "../../atoms/Pdf/ReportTitle";
import logo from '../../assets/images/logo.png';
import ReportClose from "../ClosingAcalc";
import ReportTitleSubtitle from "../../atoms/Pdf/ReportSubtitle";
import { TVacationPdf, TVacationResults } from "../../types/api";

const Note = styled.Text`
    width: "100%";
    text-align: left;
    font-size: 9px;
  `;

/**
 * NOTE: PDF fails when import atoms/styles
 *
 * import { StylesFromAtoms } from "../atoms/Styles";
 * const styles = StylesFromAtoms;
 */
const styles = StyleSheet.create({
  body: {
    paddingTop: 10,
    paddingBottom: 25,
    paddingHorizontal: 30,
  },
  pageNumber: {
    position: "absolute",
    fontSize: 9,
    bottom: 15,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "black",
  },
  image: {
    width: 70,
    height: 20,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  row: {
    flexDirection: "row",
    height: 16,
  },
});

interface DetailProps {
  aPdf1: TVacationPdf | undefined,
  aPdf2: TVacationPdf | undefined,
  aPdf3: TVacationPdf | undefined,
  aPdf4: TVacationPdf | undefined,
}

const ReportDetailsOne: React.FC<DetailProps> = ({ aPdf1 }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Note></Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf1?.pdf_head1}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf1?.pdf_head2}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf1?.pdf_head3}</Note>
      </View>
      <View style={styles.row}>
        <Note></Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf1?.pdf_mess1}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf1?.pdf_mess2}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf1?.pdf_mess3}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf1?.pdf_mess4}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf1?.pdf_mess5}</Note>
      </View>
      <View style={styles.row}>
        <Note></Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf1?.pdf_mess6}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf1?.pdf_mess7}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf1?.pdf_mess8}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf1?.pdf_mess9}</Note>
      </View>
      <View style={styles.row}>
        <Note></Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf1?.pdf_mess10}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf1?.pdf_mess11}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf1?.pdf_mess12}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf1?.pdf_mess13}</Note>
      </View>
      <View style={styles.row}>
        <Note></Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf1?.pdf_mess14}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf1?.pdf_mess15}</Note>
      </View>
    </View>
  );
}

const ReportDetailsTwo: React.FC<DetailProps> = ({ aPdf2 }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Note></Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf2?.pdf_head1}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf2?.pdf_head2}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf2?.pdf_head3}</Note>
      </View>
      <View style={styles.row}>
        <Note></Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf2?.pdf_mess1}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf2?.pdf_mess2}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf2?.pdf_mess3}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf2?.pdf_mess4}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf2?.pdf_mess5}</Note>
      </View>
      <View style={styles.row}>
        <Note></Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf2?.pdf_mess6}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf2?.pdf_mess7}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf2?.pdf_mess8}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf2?.pdf_mess9}</Note>
      </View>
      <View style={styles.row}>
        <Note></Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf2?.pdf_mess10}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf2?.pdf_mess11}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf2?.pdf_mess12}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf2?.pdf_mess13}</Note>
      </View>
      <View style={styles.row}>
        <Note></Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf2?.pdf_mess15}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf2?.pdf_mess16}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf2?.pdf_mess17}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf2?.pdf_mess18}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf2?.pdf_mess19}</Note>
      </View>
      <View style={styles.row}>
        <Note></Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf2?.pdf_mess20}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf2?.pdf_mess21}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf2?.pdf_mess22}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf2?.pdf_mess23}</Note>
      </View>
      <View style={styles.row}>
        <Note></Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf2?.pdf_mess24}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf2?.pdf_mess25}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf2?.pdf_mess26}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf2?.pdf_mess27}</Note>
      </View>
      <View style={styles.row}>
        <Note></Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf2?.pdf_mess28}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf2?.pdf_mess29}</Note>
      </View>
      <View style={styles.row}>
        <Note>{aPdf2?.pdf_mess30}</Note>
      </View>
    </View>
  );
}

interface Props {
  dat: {
      results: TVacationResults
  }
}

const PdfReportContainer: React.FC<Props> = ({ dat: { results}}) => {
  return (
    <Fragment>
      <Document>
        {results.aPdf1 && (
          <Page style={styles.body}>
            <Text style={styles.header} fixed>
              <Image style={styles.image} src={logo}  />
            </Text>
            <ReportTitle title={results.aPdf1.pdfmess} />
            <ReportDetailsOne {...results} />
            <Text
              style={styles.pageNumber}
              render={({ pageNumber, totalPages }) =>
                `${pageNumber} / ${totalPages}`
              }
              fixed
            />
          </Page>
        )}
        {results.aPdf2 && (
          <Page style={styles.body}>
            <Text style={styles.header} fixed>
              <Image style={styles.image} src={logo}  />
            </Text>
            <ReportTitle title={results.aPdf2.pdfmess} />
            <ReportDetailsTwo {...results} />
            <Text
              style={styles.pageNumber}
              render={({ pageNumber, totalPages }) =>
                `${pageNumber} / ${totalPages}`
              }
              fixed
            />
          </Page>
        )}
        {results.aClose1 && (
          <Page style={styles.body}>
            <Text style={styles.header} fixed>
              <Image style={styles.image} src={logo}  />
            </Text>
            <ReportTitleSubtitle program="Closing Cost" cash="" />
            <ReportClose dat={{aClose: results.aClose1}} />
            <Text
              style={styles.pageNumber}
              render={({ pageNumber, totalPages }) =>
                `${pageNumber} / ${totalPages}`
              }
              fixed
            />
          </Page>
        )}
        {results.aClose2 && (
          <Page style={styles.body}>
            <Text style={styles.header} fixed>
              <Image style={styles.image} src={logo}  />
            </Text>
            <ReportTitleSubtitle program="Closing Cost" cash="" />
            <ReportClose dat={{aClose: results.aClose2}} />
            <Text
              style={styles.pageNumber}
              render={({ pageNumber, totalPages }) =>
                `${pageNumber} / ${totalPages}`
              }
              fixed
            />
          </Page>
        )}
        {results.aClose3 && (
          <Page style={styles.body}>
            <Text style={styles.header} fixed>
              <Image style={styles.image} src={logo}  />
            </Text>
            <ReportTitleSubtitle program="Closing Cost" cash="" />
            <ReportClose dat={{aClose: results.aClose3}} />
            <Text
              style={styles.pageNumber}
              render={({ pageNumber, totalPages }) =>
                `${pageNumber} / ${totalPages}`
              }
              fixed
            />
          </Page>
        )}
        {results.aClose4 && (
          <Page style={styles.body}>
            <Text style={styles.header} fixed>
              <Image style={styles.image} src={logo}  />
            </Text>
            <ReportTitleSubtitle program="Closing Cost" cash="" />
            <ReportClose dat={{aClose: results.aClose4}} />
            <Text
              style={styles.pageNumber}
              render={({ pageNumber, totalPages }) =>
                `${pageNumber} / ${totalPages}`
              }
              fixed
            />
          </Page>
        )}
      </Document>
    </Fragment>
  );
}
export default PdfReportContainer;
