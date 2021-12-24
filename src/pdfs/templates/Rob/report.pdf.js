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
import ReportClose from "../Closing/close.aCalc.pdf";

const Note = styled.Text`
  width: "100%";
  text-align: left;
  font-size: 9px;
`;

function ReportDetailsRefactor({ dat }) {
  return (
    <View style={styles.tableContainer}>
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
        <Note>{dat.pdf_mess5}</Note>
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
        <Note>{dat.pdf_mess14}</Note>
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
        <Note>{dat.pdf_mess28}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess29}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess30}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess31}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess32}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess33}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess34}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess35}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess36}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess37}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess38}</Note>
      </View>
      <View style={styles.row}>
        <Note>{dat.pdf_mess39}</Note>
      </View>
    </View>
  );
}

export default function PdfReportContainer({ dat, title }) {
  return (
    <Document>
      {dat.conventional.aNotes && (
        <Page style={styles.body}>
          <Text style={styles.header} fixed>
            <Image style={styles.image} src={Logo} alt="images" />
          </Text>
          <ReportTitle title={title} />
          <ReportDetailsRefactor dat={dat.conventional.aNotes} />
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
        </Page>
      )}
      {dat.conventional.aNotes && (
        <Page style={styles.body}>
          <Text style={styles.header} fixed>
            <Image style={styles.image} src={Logo} alt="images" />
          </Text>
          <ReportTitle title="Christee Report: Buy or Rent Closing" />
          <ReportClose dat={dat.conventional} />
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
        </Page>
      )}
      {dat.fha.aNotes && (
        <Page style={styles.body}>
          <Text style={styles.header} fixed>
            <Image style={styles.image} src={Logo} alt="images" />
          </Text>
          <ReportTitle title={title} />
          <ReportDetailsRefactor dat={dat.fha.aNotes} />
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
        </Page>
      )}
      {dat.fha.aNotes && (
        <Page style={styles.body}>
          <Text style={styles.header} fixed>
            <Image style={styles.image} src={Logo} alt="images" />
          </Text>
          <ReportTitle title="Christee Report: Buy or Rent Closing" />
          <ReportClose dat={dat.fha} />
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
        </Page>
      )}
      {dat.va.aNotes && (
        <Page style={styles.body}>
          <Text style={styles.header} fixed>
            <Image style={styles.image} src={Logo} alt="images" />
          </Text>
          <ReportTitle title={title} />
          <ReportDetailsRefactor dat={dat.va.aNotes} />
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
        </Page>
      )}
      {dat.va.aNotes && (
        <Page style={styles.body}>
          <Text style={styles.header} fixed>
            <Image style={styles.image} src={Logo} alt="images" />
          </Text>
          <ReportTitle title="Christee Report: Buy or Rent Closing" />
          <ReportClose dat={dat.va} />
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
        </Page>
      )}
      {dat.usda.aNotes && (
        <Page style={styles.body}>
          <Text style={styles.header} fixed>
            <Image style={styles.image} src={Logo} alt="images" />
          </Text>
          <ReportTitle title={title} />
          <ReportDetailsRefactor dat={dat.usda.aNotes} />
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
        </Page>
      )}
      {dat.usda.aNotes && (
        <Page style={styles.body}>
          <Text style={styles.header} fixed>
            <Image style={styles.image} src={Logo} alt="images" />
          </Text>
          <ReportTitle title="Christee Report: Buy or Rent Closing" />
          <ReportClose dat={dat.usda} />
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
  );
}
