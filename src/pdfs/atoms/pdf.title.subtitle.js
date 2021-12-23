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
    fontSize: 12,
  },
});

const ReportTitle = ({ program, cash }) => (
  <View style={styles.titleContainer}>
    <Text style={styles.reportTitle}>
      Closing Cost: {program}&nbsp;{cash}
    </Text>
  </View>
);

export default ReportTitle;
