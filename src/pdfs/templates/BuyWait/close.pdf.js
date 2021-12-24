import React from "react";
import { View, StyleSheet } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";
import { StylesFromAtomsTable } from "../../Helpers/Styles";

// styles used in the details sections
const styles = StylesFromAtomsTable;

const Description = styled.Text`
  text-align: left;
  width: "100%";
  font-size: 9px;
`;

const stylesLocal = StyleSheet.create({
  tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 15,
  },
  row: {
    flexDirection: "row",
    height: 16,
  },
});

export default function ClosingSection({ dat }) {
  return (
    <View style={styles.tableContainer}>
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
    </View>
  );
}
