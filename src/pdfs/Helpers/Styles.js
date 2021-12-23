/**
 * These are styled components that are used inside of react-pdf
 * files.
 */

import styled from "@react-pdf/styled-components";
import { StyleSheet, Font } from "@react-pdf/renderer";
import Roboto from "../assets/Roboto/Roboto-Regular.ttf";
import RobotoBold from "../assets/Roboto/Roboto-Bold.ttf";

/**
 * All PDF reports are using Description
 */
export const Description = styled.Text`
  text-align: left;
  width: "100%";
  font-size: 9px;
`;

/**
 * In order to add bold to any of the pdf reports, use this
 * style.  Make sure the RobotoBold is imported.
 */
export const TextBold = styled.Text`
  font-family: "RobotoBold";
  font-weight: 900;
  font-size: 9px;
`;

export const Acalc = styled.Text`
  text-align: left;
  width: "30%";
  font-size: 9px;
`;

export const AcalcAmortization = styled.Text`
  text-align: left;
  width: "12%";
  font-size: 9px;
`;

Font.register({
  family: "Roboto",
  format: "truetype",
  src: Roboto,
});

Font.register({
  family: "RobotoBold",
  format: "truetype",
  src: RobotoBold,
});

export const StylesFromAtoms = StyleSheet.create({
  body: {
    fontFamily: "Roboto",
    paddingTop: 10,
    paddingBottom: 25,
    paddingHorizontal: 30,
  },
  pageNumber: {
    position: "absolute",
    fontSize: 9,
    bottom: 15,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "black",
  },
  image: {
    width: 70,
    height: 20,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
});

export const StylesFromAtomsTable = StyleSheet.create({
  tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    height: 16,
  },
});
