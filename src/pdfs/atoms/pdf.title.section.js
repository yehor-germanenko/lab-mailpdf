import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 5,
  },
  reportTitle: {
    color: "#000000",
    fontSize: 11,
    fontWeight: "bold",
    fontFamily: "Times-Bold",
  },
});

const ReportTitleSection = ({ title }) => (
  <View style={styles.titleContainer}>
    <Text style={styles.reportTitle}>{title}</Text>
  </View>
);

export default ReportTitleSection;
