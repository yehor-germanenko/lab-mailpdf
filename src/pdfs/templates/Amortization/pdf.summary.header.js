import { StyleSheet, View } from '@react-pdf/renderer';
import React, { Fragment } from 'react';
import {
  AcalcAmortization as Acalc
} from "../../Helpers/Styles";

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    height: 16,
  },
});

const SummaryHeader = () => {
  const rows = (
    <Fragment>
      <View style={styles.row} key="1">
        <Acalc>Monthly</Acalc>
        <Acalc>Original</Acalc>
        <Acalc>Extra Principal</Acalc>
        <Acalc>Payoff</Acalc>
        <Acalc>Months</Acalc>
        <Acalc>Total Interest</Acalc>
      </View>
      <View style={styles.row} key="1">
        <Acalc>Payment</Acalc>
        <Acalc>Term</Acalc>
        <Acalc>Payment</Acalc>
        <Acalc>Months</Acalc>
        <Acalc>Reduced</Acalc>
        <Acalc>Paid</Acalc>
      </View>
    </Fragment>
  );
  return <Fragment>{rows}</Fragment>;
};

export default SummaryHeader;
