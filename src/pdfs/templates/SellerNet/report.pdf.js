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
import React from "react";
import { Document, Page, Text, Image } from "@react-pdf/renderer";
import { View } from "@react-pdf/renderer";
import ReportTitle from "../../atoms/pdf.title";
import styles from "../../atoms/pdf-helpers.rob";
import Logo from "../../Helpers/logo.png";
import styled from "@react-pdf/styled-components";

const Note = styled.Text`
  width: "100%";
  text-align: left;
  font-size: 9px;
`;

function ReportDetails({ dat }) {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.row}>
        <Note>{dat.results.aNotes.pdfmess1}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.results.aNotes.pdfmess2}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.results.aNotes.pdfmess3}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.results.aNotes.pdfmess4}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.results.aNotes.pdfmess5}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.results.aNotes.pdfmess6}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.results.aNotes.pdfmess7}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.results.aNotes.pdfmess8}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.results.aNotes.pdfmess9}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.results.aNotes.pdfmess10}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.results.aNotes.pdfmess11}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.results.aNotes.pdfmess12}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.results.aNotes.pdfmess13}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.results.aNotes.pdfmess14}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.results.aNotes.pdfmess15}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.results.aNotes.pdfmess16}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.results.aNotes.pdfmess17}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.results.aNotes.pdfmess18}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.results.aNotes.pdfmess19}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.results.aNotes.pdfmess20}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.results.aNotes.pdfmess21}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.results.aNotes.pdfmess22}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.results.aNotes.pdfmess23}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.results.aNotes.pdfmess24}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.results.aNotes.pdfmess25}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.results.aNotes.pdfmess26}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.results.aNotes.pdfmess27}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.results.aNotes.pdfmess28}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.results.aNotes.pdfmess29}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.results.aNotes.pdfmess30}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.results.aNotes.pdfmess31}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.results.aNotes.pdfmess32}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.results.aNotes.pdfmess33}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.results.aNotes.pdfmess34}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.results.aNotes.pdfmess35}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.results.aNotes.pdfmess36}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.results.aNotes.pdfmess37}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.results.aNotes.pdfmess38}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.results.aNotes.pdfmess39}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.results.aNotes.pdfmess40}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.results.aNotes.pdfmess41}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.results.aNotes.pdfmess42}</Note>
      </View>
    </View>
  );
}

export default function PdfReportContainer({ dat, title }) {
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>
          <Image style={styles.image} src={Logo} alt="images" />
        </Text>
        <ReportTitle title={title} />
        <ReportDetails dat={dat} />
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
}
