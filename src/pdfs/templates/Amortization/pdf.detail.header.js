import React, { Fragment } from "react";
import { View, StyleSheet } from "@react-pdf/renderer";

import { AcalcAmortization as Acalc } from "../../Helpers/Styles";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    height: 16,
  },
});

const TableDetail = () => {
  const rows = (
    <Fragment>
      <View style={styles.row} key="1">
        <Acalc>Month</Acalc>
        <Acalc>Year</Acalc>
        <Acalc>Year</Acalc>
        <Acalc>Year</Acalc>
        <Acalc>Interest</Acalc>
        <Acalc>Year</Acalc>
        <Acalc>Principal</Acalc>
        <Acalc>Mortgage</Acalc>
      </View>
      <View style={styles.row} key="1">
        <Acalc>Number</Acalc>
        <Acalc>Number</Acalc>
        <Acalc>Payment</Acalc>
        <Acalc>Interest</Acalc>
        <Acalc>Percent</Acalc>
        <Acalc>Principal</Acalc>
        <Acalc>Percent</Acalc>
        <Acalc>Balance</Acalc>
      </View>
    </Fragment>
  );
  return <Fragment>{rows}</Fragment>;
};

export default TableDetail;
