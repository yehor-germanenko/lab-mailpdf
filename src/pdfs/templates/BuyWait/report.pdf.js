import { Document } from "@react-pdf/renderer";
import React, { Fragment } from "react";
import { Page, Text, Image } from "@react-pdf/renderer";
import ReportTitle from "../../atoms/pdf.title";
import PdfReport from "./bc.flex.pdf";
import PdfReportMessage from "./message.pdf";
import Logo from "../../Helpers/logo.png";
import { StylesFromAtoms } from "../../Helpers/Styles";
import ReportClose from "../Closing/close.aCalc.pdf";

const styles = StylesFromAtoms;

function BuyWaitPdf({ dat, title }) {
  return (
    <Fragment>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>
          <Image style={styles.image} src={Logo} alt="images" />
        </Text>
        <ReportTitle title={dat.aNotes.pdfmess} />
        <PdfReport dat={dat} />
        <PdfReportMessage dat={dat} />
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>
          <Image style={styles.image} src={Logo} alt="images" />
        </Text>
        <ReportTitle title="Christee Buy or Wait Closing Costs" />
        <ReportClose dat={dat} />
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

export default function BuyWaitFinal({ dat, title }) {
  return (
    <Document>
      <BuyWaitPdf dat={dat} title={title} />
    </Document>
  );
}
