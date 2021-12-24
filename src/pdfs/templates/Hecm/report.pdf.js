import { Document, Image, Page, Text } from "@react-pdf/renderer";
import React, { Fragment } from "react";
import ReportClose from "../ClosingHecm/close.aCalc.pdf";
import Logo from "../../Helpers/logo.png";
import ReportTitle from "../../Helpers/pdf.title";
import { StylesFromAtoms } from "../../Helpers/Styles";
import PdfReport from "./hecm.pdf";
import PdfReportMessage from "./message.acalc.pdf";
import PdfReportMessageCash from "./message.bcalc.pdf";

// styles used as part of the pdf layout
const styles = StylesFromAtoms;

function ContainerFinal({ dat, title }) {
  return (
    <Fragment>
      {dat.bCalc && (
        <Fragment>
          <Page style={styles.body}>
            <Text style={styles.header} fixed>
              <Image style={styles.image} src={Logo} alt="images" />
            </Text>
            <ReportTitle title={title} />
            <PdfReport dat={dat} />
            <PdfReportMessage dat={dat} />
            <PdfReportMessageCash dat={dat} />
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
            <ReportTitle title="Closing Costs" />
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
      )}
      {!dat.bCalc && (
        <Fragment>
          <Page style={styles.body}>
            <Text style={styles.header} fixed>
              <Image style={styles.image} src={Logo} alt="images" />
            </Text>
            <ReportTitle title={title} />
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
            <ReportTitle title="Closing Costs" />
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
      )}
    </Fragment>
  );
}

export default function PdfReportContainer({ dat, title }) {
  return (
    <Document>
      <ContainerFinal dat={dat} title={title} />
    </Document>
  );
}
