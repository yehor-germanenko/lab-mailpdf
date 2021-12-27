/*
 * Copyright 2020-2021 AskChristee, LLC. All rights reserved.
 */

import React from "react";
import { View, StyleSheet, Text } from "@react-pdf/renderer";

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



const TableDetail = () => {
  const rows = (
    <View>
      <View style={styles.row}>
        <Text style={styles.acalc}>Month</Text>
        <Text style={styles.acalc}>Year</Text>
        <Text style={styles.acalc}>Year</Text>
        <Text style={styles.acalc}>Year</Text>
        <Text style={styles.acalc}>Interest</Text>
        <Text style={styles.acalc}>Year</Text>
        <Text style={styles.acalc}>Principal</Text>
        <Text style={styles.acalc}>Mortgage</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.acalc}>Number</Text>
        <Text style={styles.acalc}>Number</Text>
        <Text style={styles.acalc}>Payment</Text>
        <Text style={styles.acalc}>Interest</Text>
        <Text style={styles.acalc}>Percent</Text>
        <Text style={styles.acalc}>Principal</Text>
        <Text style={styles.acalc}>Percent</Text>
        <Text style={styles.acalc}>Balance</Text>
      </View>
    </View>
  );
  return rows;
};

export default TableDetail;
