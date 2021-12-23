import { Document, Image, Page, StyleSheet, Text } from "@react-pdf/renderer";
import React, { Fragment } from "react";
import ReportTitle from "../../atoms/pdf.title";
import ReportTitleSubtitle from "../../atoms/pdf.title.subtitle";
import PdfReportCloseAcalc from "../Closing/close.aCalc.pdf";
import PdfReportCloseBcalc from "../Closing/close.bCalc.pdf";
import Logo from "../../Helpers/logo.png";
import PdfReport from "./reportAcalc";
import PdfReportCash from "./reportBcalc";
import PdfReportMessageAcalc from "./pdf.message.Acalc";
import PdfReportMessageFull from "./pdf.message.Full";

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
});

function ContainerFinal({ dat, title, program }) {
  return (
    <Fragment>
      {dat.bCalc && (
        <Fragment>
          <Page style={styles.body}>
            <Text style={styles.header} fixed>
              <Image style={styles.image} src={Logo} alt="images" />
            </Text>
            <ReportTitle title={title} />
            <PdfReportCash dat={dat} />
            <PdfReportMessageFull dat={dat} />
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
            <ReportTitleSubtitle program={program} cash="Minimum Cash" />
            <PdfReportCloseAcalc dat={dat} />
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
            <ReportTitleSubtitle program={program} cash="With Cash" />
            <PdfReportCloseBcalc dat={dat} />
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
            <PdfReportMessageAcalc dat={dat} />
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
            <ReportTitleSubtitle program={program} cash="Minimal Cash" />
            <PdfReportCloseAcalc dat={dat} />
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

export default function PdfReportContainer({ dat, title, subtitle }) {
  return (
    <Document>
      {dat.conventional.aCalc && (
        <ContainerFinal
          dat={dat.conventional}
          title={title}
          program="Conventional"
        />
      )}
      {dat.fha.aCalc && (
        <ContainerFinal dat={dat.fha} title={title} program="FHA" />
      )}
      {dat.va.aCalc && (
        <ContainerFinal dat={dat.va} title={title} program="VA" />
      )}
      {dat.usda.aCalc && (
        <ContainerFinal dat={dat.usda} title={title} program="USDA" />
      )}
    </Document>
  );
}
