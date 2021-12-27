/*
 * Copyright 2020-2021 AskChristee, LLC. All rights reserved.
 */

import { StyleSheet, View, Text } from '@react-pdf/renderer';
import React from 'react';
import { PdfCash } from '../../atoms';
import { TAmortizationHeader } from '../../types/api';

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

interface Props {
  header: TAmortizationHeader,
}

const SummaryDetails: React.FC<Props> = ({ header }) => {
  console.log('pdfrowheader->', header);
  const txtHeader = Object.fromEntries(Object.entries(header).slice(2));
  const mad = Object.values(txtHeader);
  console.log('pdfrowheader->mad->', mad);

  let count = 0;

  const rows = mad.map(item => {
    return (
      <View style={styles.row} key={++count}>
        <Text style={styles.acalc}>
          <PdfCash v={item[0]} />
        </Text>
        <Text style={styles.acalc}>{item[1]}</Text>
        <Text style={styles.acalc}>
          <PdfCash v={item[2]} />
        </Text>
        <Text style={styles.acalc}>{item[3]}</Text>
        <Text style={styles.acalc}>{item[4]}</Text>
        <Text style={styles.acalc}>
          <PdfCash v={item[5]} />
        </Text>
      </View>
    )
  });
  return (<View>{rows}</View>);
};

export default SummaryDetails;
