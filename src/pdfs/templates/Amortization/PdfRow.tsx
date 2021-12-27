/*
 * Copyright 2020-2021 AskChristee, LLC. All rights reserved.
 */

import { StyleSheet, View, Text } from '@react-pdf/renderer';
import React, { Fragment } from 'react';
import { PdfCash, PdfPercent } from '../../atoms';
import { TAmortizationResponse } from '../../types/api';

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

const PdfRow = ({ results }: TAmortizationResponse) => {
  const txtHeader = Object.fromEntries(Object.entries(results).slice(2));
  const mad = Object.values(txtHeader);

  const rows = mad.map(item => (
    <View style={styles.row} key={item[0]}>
      <Text style={styles.acalc}>{item[0]}</Text>
      <Text style={styles.acalc}>{item[1]}</Text>
      <Text style={styles.acalc}>
        <PdfCash v={item[2] as string} />
      </Text>
      <Text style={styles.acalc}>
        <PdfCash v={item[3] as string} />
      </Text>
      <Text style={styles.acalc}>
        <PdfPercent v={item[4] as string} />
      </Text>
      <Text style={styles.acalc}>
        <PdfCash v={item[5] as string} />
      </Text>
      <Text style={styles.acalc}>
        <PdfPercent v={item[6] as string} />
      </Text>
      <Text style={styles.acalc}>
        <PdfCash v={item[7] as string} />
      </Text>
    </View>
  ));
  return <Fragment>{rows}</Fragment>;
};

export default PdfRow;
