import { StyleSheet, View } from '@react-pdf/renderer';
import React, { Fragment } from 'react';
import { PdfCash, PdfPercent } from '../../Helpers/CommonFormats';
import {
  AcalcAmortization as Acalc
} from "../../Helpers/Styles";

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    height: 16,
  },
});

const TableRow = ({ items }) => {
  const txtHeader = Object.fromEntries(Object.entries(items).slice(2));
  const mad = Object.values(txtHeader);

  const rows = mad.map(item => (
    <View style={styles.row} key={item[0]}>
      <Acalc>{item[0]}</Acalc>
      <Acalc>{item[1]}</Acalc>
      <Acalc>
        <PdfCash v={item[2]} />
      </Acalc>
      <Acalc>
        <PdfCash v={item[3]} />
      </Acalc>
      <Acalc>
        <PdfPercent v={item[4]} />
      </Acalc>
      <Acalc>
        <PdfCash v={item[5]} />
      </Acalc>
      <Acalc>
        <PdfPercent v={item[6]} />
      </Acalc>
      <Acalc>
        <PdfCash v={item[7]} />
      </Acalc>
    </View>
  ));
  return <Fragment>{rows}</Fragment>;
};

export default TableRow;
