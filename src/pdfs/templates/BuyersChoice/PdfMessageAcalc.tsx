import React from "react";
import { View, StyleSheet } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

const Description = styled.Text`
  text-align: left;
  width: "100%";
  font-size: 9px;
`;

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 5,
  },
  row: {
    flexDirection: "row",
    height: 16,
  },
});

const PdfMessageAcalc = ({ dat }: any ) => {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.row}>
        {dat.aNotes && <Description>{dat.aNotes.pdfmess}</Description>}
      </View>
      <View style={styles.row}>
        {dat.aNotes && <Description>{dat.aNotes.pdf_head1}</Description>}
      </View>
      <View style={styles.row}>
        {dat.aNotes && <Description>{dat.aNotes.pdf_head2}</Description>}
      </View>
      <View style={styles.row}>
        {dat.aNotes && (
          <Description>
            {dat.aNotes.pdfmess1} {dat.aNotes.pdfmess2}
          </Description>
        )}
      </View>
      <View style={styles.row}>
        {dat.aNotes && (
          <Description>
            {dat.aNotes.pdfmess3} {dat.aNotes.pdfmess4}
          </Description>
        )}
      </View>
      <View style={styles.row}>
        {dat.aNotes && (
          <Description>
            {dat.aNotes.pdfmess5} {dat.aNotes.pdfmess6}
          </Description>
        )}
      </View>
      <View style={styles.row}>
        {dat.aNotes && (
          <Description>
            {dat.aNotes.pdfmess7} {dat.aNotes.pdfmess8}
          </Description>
        )}
      </View>
      <View style={styles.row}>
        {dat.aNotes && (
          <Description>
            {dat.aNotes.pdfmess9} {dat.aNotes.pdfmess10}
          </Description>
        )}
      </View>
      <View style={styles.row}>
        {dat.aNotes && (
          <Description>
            {dat.aNotes.pdfmess11} {dat.aNotes.pdfmess12}
          </Description>
        )}
      </View>
      <View style={styles.row}>
        {dat.aNotes && <Description>{dat.aNotes.pdfmess13}</Description>}
      </View>
      <View style={styles.row}>
        {dat.aNotes && <Description>{dat.aNotes.pdf_bottom}</Description>}
      </View>
    </View>
  );
}

export default PdfMessageAcalc;
