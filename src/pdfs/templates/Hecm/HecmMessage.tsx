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
    aNotes: THecmANotes,
  }

  const HecmMessageReport: React.FC<Props> = ({ aNotes }) => {
    return (
      <View style={styles.tableContainer}>
        <View style={styles.row}>
          {aNotes && <Text style={styles.description}>{aNotes.pdfmess}</Text>}
        </View>
        <View style={styles.row}>
          {aNotes && <Text style={styles.description}>&nbsp;</Text>}
        </View>
        <View style={styles.row}>
          {aNotes && (
            <Text style={styles.description}>
              {aNotes.pdfmess1} {aNotes.pdfmess2}
            </Text>
          )}
        </View>
        <View style={styles.row}>
          {aNotes && (
            <Text style={styles.description}>
              {aNotes.pdfmess3} {aNotes.pdfmess4}
            </Text>
          )}
        </View>
        <View style={styles.row}>
          {aNotes && (
            <Text style={styles.description}>
              {aNotes.pdfmess5} {aNotes.pdfmess6}
            </Text>
          )}
        </View>
        <View style={styles.row}>
          {aNotes && (
            <Text style={styles.description}>
              {aNotes.pdfmess7} {aNotes.pdfmess8}
            </Text>
          )}
        </View>
        <View style={styles.row}>
          {aNotes && (
            <Text style={styles.description}>
              {aNotes.pdfmess9} {aNotes.pdfmess10}
            </Text>
          )}
        </View>
        <View style={styles.row}>
          {aNotes && (
            <Text style={styles.description}>
              {aNotes.pdfmess11} {aNotes.pdfmess12}
            </Text>
          )}
        </View>
        <View style={styles.row}>
          {aNotes && <Text style={styles.description}>{aNotes.pdf_bottom}</Text>}
        </View>
      </View>
    );
  }

export default HecmMessageReport;
