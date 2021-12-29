import { Document, Image, Page, StyleSheet, Text } from "@react-pdf/renderer";
import React, { Fragment } from "react";
import Logo from "../../assets/images/logo.png";
import { PdfReportTitle, PdfReportSubtitle } from "../../atoms";
import PdfReportCashAcalc from "./PdfReportCashAcalc";
import PdfReportCashBcalc from "./PdfReportCashBcalc";
import PdfClosingAcalc from "../ClosingAcalc";
import PdfClosingBcalc from "../ClosingBcalc";
import PdfMessageFull from "./PdfMessageFull";
import PdfMessageAcalc from "./PdfMessageAcalc";

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

const ContainerFinal = ({ dat, title, program }: any) => {
  return (
    <Fragment>
      {dat.bCalc && (
        <Fragment>
          <Page style={styles.body}>
            <Text style={styles.header} fixed>
              <Image style={styles.image} src={Logo} />
            </Text>
            <PdfReportTitle title={title} />
            <PdfReportCashBcalc dat={dat} />
            <PdfMessageFull dat={dat} />
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
              <Image style={styles.image} src={Logo} />
            </Text>
            <PdfReportSubtitle program={program} cash="Minimum Cash" />
            <PdfClosingAcalc dat={dat} />
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
              <Image style={styles.image} src={Logo} />
            </Text>
            <PdfReportSubtitle program={program} cash="With Cash" />
            <PdfClosingBcalc dat={dat} />
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
              <Image style={styles.image} src={Logo} />
            </Text>
            <PdfReportTitle title={title} />
            <PdfReportCashAcalc dat={dat} />
            <PdfMessageAcalc dat={dat} />
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
              <Image style={styles.image} src={Logo} />
            </Text>
            <PdfReportSubtitle program={program} cash="Minimal Cash" />
            <PdfClosingAcalc dat={dat} />
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

const BuyersChoice = ({ dat }: any ) => {
  return (
    <Document>
      {dat.conventional.aCalc && (
        <ContainerFinal
          dat={dat.conventional}
          title={dat.title}
          program="Conventional"
        />
      )}
      {dat.fha.aCalc && (
        <ContainerFinal dat={dat.fha} title={dat.title} program="FHA" />
      )}
      {dat.va.aCalc && (
        <ContainerFinal dat={dat.va} title={dat.title} program="VA" />
      )}
      {dat.usda.aCalc && (
        <ContainerFinal dat={dat.usda} title={dat.title} program="USDA" />
      )}
    </Document>
  );
}

export default BuyersChoice;
