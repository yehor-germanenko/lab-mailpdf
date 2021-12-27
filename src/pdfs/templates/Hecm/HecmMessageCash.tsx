/*
 * Copyright 2020-2021 AskChristee, LLC. All rights reserved.
 */

import React from "react";
import { View, StyleSheet, Text } from "@react-pdf/renderer";
import { THecmANotes } from "../../types/api";

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 15,
  },
  row: {
    flexDirection: "row",
    height: 16,
  },
  description: {
    textAlign: 'left',
    width: '100%',
    fontSize: 9,
  }
});

interface Props {
  bNotes: THecmANotes,
}

const HecmMessageReportCash: React.FC<Props> = ({ bNotes }) => {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.row}>
        {bNotes && <Text style={styles.description}>{bNotes.pdfmess}</Text>}
      </View>
      <View style={styles.row}>
        {bNotes && <Text style={styles.description}>&nbsp;</Text>}
      </View>
      <View style={styles.row}>
        {bNotes && (
          <Text style={styles.description}>
            {bNotes.pdfmess1} {bNotes.pdfmess2}
          </Text>
        )}
      </View>
      <View style={styles.row}>
        {bNotes && (
          <Text style={styles.description}>
            {bNotes.pdfmess3} {bNotes.pdfmess4}
          </Text>
        )}
      </View>
      <View style={styles.row}>
        {bNotes && (
          <Text style={styles.description}>
            {bNotes.pdfmess5} {bNotes.pdfmess6}
          </Text>
        )}
      </View>
      <View style={styles.row}>
        {bNotes && (
          <Text style={styles.description}>
            {bNotes.pdfmess7} {bNotes.pdfmess8}
          </Text>
        )}
      </View>
      <View style={styles.row}>
        {bNotes && (
          <Text style={styles.description}>
            {bNotes.pdfmess9} {bNotes.pdfmess10}
          </Text>
        )}
      </View>
      <View style={styles.row}>
        {bNotes && (
          <Text style={styles.description}>
            {bNotes.pdfmess11} {bNotes.pdfmess12}
          </Text>
        )}
      </View>
      <View style={styles.row}>
        {bNotes && <Text style={styles.description}>{bNotes.pdfmess13}</Text>}
      </View>
    </View>
  );
}
export default HecmMessageReportCash;
