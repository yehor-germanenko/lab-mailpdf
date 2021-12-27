/*
 * Copyright 2020-2021 AskChristee, LLC. All rights reserved.
 */

import React from "react";
import { Document, Page, Text, Image, StyleSheet } from "@react-pdf/renderer";
import { View } from "@react-pdf/renderer";
import logo from '../../assets/images/logo.png';
import ReportTitle from "../../atoms/Pdf/ReportTitle";
import { TSellerNetNotes, TSellerNetResults } from "../../types/api";


const styles = StyleSheet.create({
    body: {
      paddingTop: 10,
      paddingBottom: 25,
      paddingHorizontal: 30,
    },
    pageNumber: {
      position: 'absolute',
      fontSize: 9,
      bottom: 15,
      left: 0,
      right: 0,
      textAlign: 'center',
      color: 'black',
    },
    image: {
      width: 70,
      height: 20,
    },
    header: {
      fontSize: 12,
      marginBottom: 20,
      textAlign: 'center',
      color: 'grey',
    },
    description: {
      textAlign: 'left',
      width: "50%",
      fontSize: 9
    },
    tableContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginTop: 15,
    },
    row: {
      flexDirection: "row",
      height: 16,
    },
    acalc: {
      width: '30%',
      fontSize: 9,
      textAlign: 'left',
    },
    note: {
        width: '100%',
        textAlign: 'left',
        fontSize: 9,
    }
});

interface RProps {
    aNotes: TSellerNetNotes
}

const ReportDetails:React.FC<RProps> = ({aNotes}) => {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.row}>
        <Text style={styles.note}>{aNotes.pdfmess1}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.note}>{aNotes.pdfmess2}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.note}>{aNotes.pdfmess2a}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.note}>{aNotes.pdfmess3}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.note}>{aNotes.pdfmess4}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.note}>{aNotes.pdfmess5}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.note}>{aNotes.pdfmess6}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.note}>{aNotes.pdfmess7}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.note}>{aNotes.pdfmess8}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.note}>{aNotes.pdfmess9}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.note}>{aNotes.pdfmess10}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.note}>{aNotes.pdfmess11}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.note}>{aNotes.pdfmess12}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.note}>{aNotes.pdfmess13}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.note}>{aNotes.pdfmess14}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.note}>{aNotes.pdfmess15}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.note}>{aNotes.pdfmess16}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.note}>{aNotes.pdfmess17}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.note}>{aNotes.pdfmess18}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.note}>{aNotes.pdfmess19}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.note}>{aNotes.pdfmess20}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.note}>{aNotes.pdfmess21}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.note}>{aNotes.pdfmess22}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.note}>{aNotes.pdfmess23}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.note}>{aNotes.pdfmess24}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.note}>{aNotes.pdfmess25}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.note}>{aNotes.pdfmess26}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.note}>{aNotes.pdfmess27}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.note}>{aNotes.pdfmess28}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.note}>{aNotes.pdfmess29}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.note}>{aNotes.pdfmess30}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.note}>{aNotes.pdfmess31}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.note}>{aNotes.pdfmess32}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.note}>{aNotes.pdfmess33}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.note}>{aNotes.pdfmess34}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.note}>{aNotes.pdfmess35}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.note}>{aNotes.pdfmess36}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.note}>{aNotes.pdfmess37}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.note}>{aNotes.pdfmess38}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.note}>{aNotes.pdfmess39}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.note}>{aNotes.pdfmess40}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.note}>{aNotes.pdfmess41}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.note}>{aNotes.pdfmess42}</Text>
      </View>
    </View>
  );
}

interface Props {
    results: TSellerNetResults,
    title: string
}
const PdfReportContainer: React.FC<Props> = ({ results, title }) => {
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>
          <Image style={styles.image} src={logo} />
        </Text>
        <ReportTitle title={title} />
              <ReportDetails {...results} />
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

export default PdfReportContainer;
