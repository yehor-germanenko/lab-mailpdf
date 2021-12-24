import { Document, Image, Page, Text } from "@react-pdf/renderer";
import React, { Fragment } from "react";
import ReportTitle from "../../Helpers/pdf.title";
import { StylesFromAtoms } from "../../Helpers/Styles";
import Logo from "../../Helpers/logo.png";
import PdfRow from "./pdf.detail";
import PdfRowHeader from "./pdf.summary";
import PdfSummaryHeader from "./pdf.summary.header";
import PdfDetailHeader from "./pdf.detail.header";

const styles = StylesFromAtoms;

function PdfReportContainer({ dat }) {
  return (
    <Fragment>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>
          <Image style={styles.image} src={Logo} alt="images" />
        </Text>
        <ReportTitle title={dat.fumess} />
        <PdfSummaryHeader items={dat.header} />
        <PdfRowHeader items={dat.header} />
        <ReportTitle title="Amortization Details on A Year To Year Basis" />
        <PdfDetailHeader />
        <PdfRow items={dat.results} />
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Fragment>
  );
}

// since there are two sections, title is not used
export default function PdfContainer({ dat }) {
  return (
    <Document>
      <PdfReportContainer dat={dat} />
    </Document>
  );
}
