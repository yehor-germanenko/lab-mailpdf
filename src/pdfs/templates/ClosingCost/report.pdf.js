import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";
import React, { Fragment } from "react";
import ReportTitle from "../../atoms/pdf.title";
import Logo from "../../Helpers/logo.png";

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

function ReportDetailsOne({ dat }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Note></Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdfmess1}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdfmess2}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdfmess3}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdfmess4}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdfmess5}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdfmess6}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdfmess7}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdfmess8}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdfmess9}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdfmess10}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdfmess11}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdfmess12}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdfmess13}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdfmess14}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdfmess15}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdfmess16}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdfmess17}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdfmess18}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdfmess19}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdfmess20}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdfmess21}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdfmess22}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdfmess23}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdfmess24}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdfmess25}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdfmess26}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdfmess27}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdfmess28}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdfmess29}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdfmess30}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdfmess31}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdfmess32}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdfmess33}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdfmess34}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdfmess35}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdfmess36}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdfmess37}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdfmess38}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdfmess39}</Note>
      </View>
    </View>
  );
}

export default function PdfReportContainer({ dat, title }) {
  return (
    <Fragment>
      <Document>
        <Page style={styles.body}>
          <Text style={styles.header} fixed>
            <Image style={styles.image} src={Logo} alt="images" />
          </Text>
          <ReportTitle title="Closing Cost Estimate" />
          <ReportDetailsOne dat={dat.pdf} />
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
        </Page>
      </Document>
    </Fragment>
  );
}
