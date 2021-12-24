import React from "react";
import { View, StyleSheet } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";
import { PdfCash } from "../../Helpers/CommonFormats";

const Description = styled.Text`
  text-align: left;
  width: "50%";
  font-size: 9px;
`;

const Acalc = styled.Text`
  text-align: left;
  width: "30%";
  font-size: 9px;
`;
const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    height: 16,
  },
});

export default function PdfReport({ dat }) {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.row}>
        <Description>State</Description>
        {dat.aCalc && <Acalc>{dat.aCalc.state_sel}</Acalc>}
        {dat.bCalc && <Acalc>{dat.bCalc.state_sel}</Acalc>}
      </View>
      <View style={styles.row}>
        <Description></Description>
        {dat.aCalc && <Acalc>{dat.aCalc.report_type}</Acalc>}
        {dat.bCalc && <Acalc>{dat.bCalc.report_type}</Acalc>}
      </View>
      <View style={styles.row}>
        <Description>Report Type</Description>
        {dat.aCalc && <Acalc>{dat.aCalc.fumess}</Acalc>}
        {dat.bCalc && <Acalc>{dat.bCalc.fumess}</Acalc>}
      </View>
      <View style={styles.row}>
        <Description>Selected Area</Description>
        {dat.aCalc && <Acalc>{dat.aCalc.area}</Acalc>}
        {dat.bCalc && <Acalc>{dat.bCalc.area}</Acalc>}
      </View>
      <View style={styles.row}>
        <Description>Interest Rate Entered</Description>
        {dat.aCalc && <Acalc>{dat.aCalc.temp_rate}%</Acalc>}
        {dat.bCalc && <Acalc>{dat.bCalc.temp_rate}%</Acalc>}
      </View>
      <View style={styles.row}>
        <Description>Interest Rate Used (Note 1)</Description>
        {dat.aCalc && <Acalc>{dat.aCalc.ex_rate}%</Acalc>}
        {dat.bCalc && <Acalc>{dat.aCalc.ex_rate}%</Acalc>}
      </View>
      <View style={styles.row}>
        <Description>Interest Rate with MIP (Note 2)</Description>
        {dat.aCalc && <Acalc>{dat.aCalc.act_rate}%</Acalc>}
        {dat.bCalc && <Acalc>{dat.bCalc.act_rate}%</Acalc>}
      </View>
      <View style={styles.row}>
        <Description>Age of Youngest Borrower (Note 3)</Description>
        {dat.aCalc && <Acalc>{dat.aCalc.age}</Acalc>}
        {dat.bCalc && <Acalc>{dat.bCalc.age}</Acalc>}
      </View>
      <View style={styles.row}>
        <Description>Maximum Claim Amount (Note 4)</Description>
        {dat.aCalc && (
          <Acalc>
            <PdfCash v={dat.aCalc.max_claim} />
          </Acalc>
        )}
        {dat.bCalc && (
          <Acalc>
            <PdfCash v={dat.bCalc.max_claim} />
          </Acalc>
        )}
      </View>
      <View style={styles.row}>
        <Description>Purchase Price (Note 5)</Description>
        {dat.aCalc && (
          <Acalc>
            <PdfCash v={dat.aCalc.sp} />
          </Acalc>
        )}
        {dat.bCalc && (
          <Acalc>
            <PdfCash v={dat.aCalc.sp} />
          </Acalc>
        )}
      </View>
      <View style={styles.row}>
        <Description>Base Loan Amount (Note 6)</Description>
        {dat.aCalc && (
          <Acalc>
            <PdfCash v={dat.aCalc.ma} />
          </Acalc>
        )}
        {dat.bCalc && (
          <Acalc>
            <PdfCash v={dat.bCalc.ma} />
          </Acalc>
        )}
      </View>
      <View style={styles.row}>
        <Description>Loan To Value (Note 7)</Description>
        {dat.aCalc && <Acalc>{dat.aCalc.ltv}%</Acalc>}
        {dat.bCalc && <Acalc>{dat.bCalc.ltv}%</Acalc>}
      </View>
      <View style={styles.row}>
        <Description>Principal Lending Factor (Note 8)</Description>
        {dat.aCalc && <Acalc>{dat.aCalc.plf_factor}</Acalc>}
        {dat.bCalc && <Acalc>{dat.bCalc.plf_factor}</Acalc>}
      </View>
      <View style={styles.row}>
        <Description>Total Loan Amount (Note 9)</Description>
        {dat.aCalc && (
          <Acalc>
            <PdfCash v={dat.aCalc.total_mtge} />
          </Acalc>
        )}
        {dat.bCalc && (
          <Acalc>
            <PdfCash v={dat.bCalc.total_mtge} />
          </Acalc>
        )}
      </View>
      <View style={styles.row}>
        <Description>Down Payment</Description>
        {dat.aCalc && (
          <Acalc>
            <PdfCash v={dat.aCalc.d_payment} />
          </Acalc>
        )}
        {dat.bCalc && (
          <Acalc>
            <PdfCash v={dat.bCalc.d_payment} />
          </Acalc>
        )}
      </View>
      <View style={styles.row}>
        <Description>Estimated Closing Cost (Note 10)</Description>
        {dat.aCalc && (
          <Acalc>
            <PdfCash v={dat.aCalc.totalcc} />
          </Acalc>
        )}
        {dat.bCalc && (
          <Acalc>
            <PdfCash v={dat.bCalc.totalcc} />
          </Acalc>
        )}
      </View>
      <View style={styles.row}>
        <Description>Required Cash (Note 11)</Description>
        {dat.aCalc && (
          <Acalc>
            <PdfCash v={dat.aCalc.r_cash} />
          </Acalc>
        )}
        {dat.bCalc && (
          <Acalc>
            <PdfCash v={dat.bCalc.r_cash} />
          </Acalc>
        )}
      </View>
      <View style={styles.row}>
        <Description>Cash Available</Description>
        {dat.aCalc && (
          <Acalc>
            <PdfCash v={dat.aCalc.t_cash} />
          </Acalc>
        )}
        {dat.bCalc && (
          <Acalc>
            <PdfCash v={dat.bCalc.t_cash} />
          </Acalc>
        )}
      </View>
      <View style={styles.row}>
        <Description>Additional Cash Required</Description>
        {dat.aCalc && (
          <Acalc>
            <PdfCash v={dat.aCalc.ex_cash} />
          </Acalc>
        )}
        {dat.bCalc && (
          <Acalc>
            <PdfCash v={dat.bCalc.ex_cash} />
          </Acalc>
        )}
      </View>
      <View style={styles.row}>
        <Description>Additional Property Taxes (Note 11)</Description>
        {dat.aCalc && (
          <Acalc>
            <PdfCash v={dat.aCalc.temp_pt} />
          </Acalc>
        )}
        {dat.bCalc && (
          <Acalc>
            <PdfCash v={dat.bCalc.temp_pt} />
          </Acalc>
        )}
      </View>
      <View style={styles.row}>
        <Description>Annual Property Insurance</Description>
        {dat.aCalc && (
          <Acalc>
            <PdfCash v={dat.aCalc.temp_ins} />
          </Acalc>
        )}
        {dat.bCalc && (
          <Acalc>
            <PdfCash v={dat.bCalc.temp_ins} />
          </Acalc>
        )}
      </View>
      <View style={styles.row}>
        <Description>Estimated HECM Balance (Note 12)</Description>
        {dat.aCalc && (
          <Acalc>
            <PdfCash v={dat.aCalc.hecm_bal} />
          </Acalc>
        )}
        {dat.bCalc && (
          <Acalc>
            <PdfCash v={dat.bCalc.hecm_bal} />
          </Acalc>
        )}
      </View>
    </View>
  );
}
