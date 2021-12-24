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
import ReportTitle from "../../atoms/pdf.title";
import Logo from "../../Helpers/logo.png";
import ReportClose from "../Closing/close.vacation.pdf";
import ReportTitleSubtitle from "../../atoms/pdf.title.subtitle";

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
        <Note>{dat.pdf_head1}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_head2}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_head3}</Note>
      </View>
      <View style={styles.row}>
        <Note></Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess1}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess2}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess3}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess4}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess5}</Note>
      </View>
      <View style={styles.row}>
        <Note></Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess6}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess7}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess8}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess9}</Note>
      </View>
      <View style={styles.row}>
        <Note></Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess10}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess11}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess12}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess13}</Note>
      </View>
      <View style={styles.row}>
        <Note></Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess14}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess15}</Note>
      </View>
    </View>
  );
}

function ReportDetailsTwo({ dat }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Note></Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_head1}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_head2}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_head3}</Note>
      </View>
      <View style={styles.row}>
        <Note></Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess1}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess2}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess3}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess4}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess5}</Note>
      </View>
      <View style={styles.row}>
        <Note></Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess6}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess7}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess8}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess9}</Note>
      </View>
      <View style={styles.row}>
        <Note></Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess10}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess11}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess12}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess13}</Note>
      </View>
      <View style={styles.row}>
        <Note></Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess15}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess16}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess17}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess18}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess19}</Note>
      </View>
      <View style={styles.row}>
        <Note></Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess20}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess21}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess22}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess23}</Note>
      </View>
      <View style={styles.row}>
        <Note></Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess24}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess25}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess26}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess27}</Note>
      </View>
      <View style={styles.row}>
        <Note></Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess28}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess29}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess30}</Note>
      </View>
    </View>
  );
}

export default function PdfReportContainer({ dat, title }) {
  return (
    <Fragment>
      <Document>
        {dat.results.aPdf1 && (
          <Page style={styles.body}>
            <Text style={styles.header} fixed>
              <Image style={styles.image} src={Logo} alt="images" />
            </Text>
            <ReportTitle title={dat.results.aPdf1.pdfmess} />
            <ReportDetailsOne dat={dat.results.aPdf1} />
            <Text
              style={styles.pageNumber}
              render={({ pageNumber, totalPages }) =>
                `${pageNumber} / ${totalPages}`
              }
              fixed
            />
          </Page>
        )}
        {dat.results.aPdf2 && (
          <Page style={styles.body}>
            <Text style={styles.header} fixed>
              <Image style={styles.image} src={Logo} alt="images" />
            </Text>
            <ReportTitle title={dat.results.aPdf2.pdfmess} />
            <ReportDetailsTwo dat={dat.results.aPdf2} />
            <Text
              style={styles.pageNumber}
              render={({ pageNumber, totalPages }) =>
                `${pageNumber} / ${totalPages}`
              }
              fixed
            />
          </Page>
        )}
        {dat.results.aClose1 && (
          <Page style={styles.body}>
            <Text style={styles.header} fixed>
              <Image style={styles.image} src={Logo} alt="images" />
            </Text>
            <ReportTitleSubtitle program="Closing Cost" cash="" />
            <ReportClose dat={dat.results.aClose1} />
            <Text
              style={styles.pageNumber}
              render={({ pageNumber, totalPages }) =>
                `${pageNumber} / ${totalPages}`
              }
              fixed
            />
          </Page>
        )}
        {dat.results.aClose2 && (
          <Page style={styles.body}>
            <Text style={styles.header} fixed>
              <Image style={styles.image} src={Logo} alt="images" />
            </Text>
            <ReportTitleSubtitle program="Closing Cost" cash="" />
            <ReportClose dat={dat.results.aClose2} />
            <Text
              style={styles.pageNumber}
              render={({ pageNumber, totalPages }) =>
                `${pageNumber} / ${totalPages}`
              }
              fixed
            />
          </Page>
        )}
        {dat.results.aClose3 && (
          <Page style={styles.body}>
            <Text style={styles.header} fixed>
              <Image style={styles.image} src={Logo} alt="images" />
            </Text>
            <ReportTitleSubtitle program="Closing Cost" cash="" />
            <ReportClose dat={dat.results.aClose3} />
            <Text
              style={styles.pageNumber}
              render={({ pageNumber, totalPages }) =>
                `${pageNumber} / ${totalPages}`
              }
              fixed
            />
          </Page>
        )}
        {dat.results.aClose4 && (
          <Page style={styles.body}>
            <Text style={styles.header} fixed>
              <Image style={styles.image} src={Logo} alt="images" />
            </Text>
            <ReportTitleSubtitle program="Closing Cost" cash="" />
            <ReportClose dat={dat.results.aClose4} />
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
