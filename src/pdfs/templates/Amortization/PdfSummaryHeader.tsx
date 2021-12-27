/*
 * Copyright 2020-2021 AskChristee, LLC. All rights reserved.
 */

import { StyleSheet, View, Text } from '@react-pdf/renderer';
import React from 'react';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    height: 16,
  },
  acalc: {
    width: '12%',
    fontSize: 9,
    textAlign: 'left',
  }
});

const PDFSummaryHeader = () => {
  const rows = (
    <View>
      <View style={styles.row}>
        <Text style={styles.acalc}>Monthly</Text>
        <Text style={styles.acalc}>Original</Text>
        <Text style={styles.acalc}>Extra Principal</Text>
        <Text style={styles.acalc}>Payoff</Text>
        <Text style={styles.acalc}>Months</Text>
        <Text style={styles.acalc}>Total Interest</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.acalc}>Payment</Text>
        <Text style={styles.acalc}>Term</Text>
        <Text style={styles.acalc}>Payment</Text>
        <Text style={styles.acalc}>Months</Text>
        <Text style={styles.acalc}>Reduced</Text>
        <Text style={styles.acalc}>Paid</Text>
      </View>
    </View>
  );
  return rows;
};

export default PDFSummaryHeader;
