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

const Description = styled.Text`
  text-align: left;
  width: "40%";
  font-size: 9px;
`;

const Acalc = styled.Text`
  width: "60%";
  text-align: left;
  padding: 0 10px;
  font-size: 9px;
`;

function ReportDetails({ dat }) {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.row}>
        <Description>(1) Loan Type</Description>
        <Acalc>{dat.fumess}</Acalc>
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
        <ReportDetails dat={dat.conventional} />
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
