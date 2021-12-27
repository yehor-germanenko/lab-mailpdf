import React from "react";
import { View, StyleSheet } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";
import { PdfCash } from "../../atoms";

const Description = styled.Text`
  text-align: left;
  width: "40%";
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

const PdfReportCashBcalc = ({ dat }: any) => {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.row}>
        <Description>State</Description>
        {dat.aCalc && <Acalc>{dat.aCalc.state_sel}</Acalc>}
        {dat.bCalc && <Acalc>{dat.bCalc.state_sel}</Acalc>}
      </View>
      <View style={styles.row}>
        <Description>Loan Type (Note 1)</Description>
        {dat.aCalc && <Acalc>{dat.aCalc.report_type}</Acalc>}
        {dat.bCalc && <Acalc>{dat.bCalc.report_type}</Acalc>}
      </View>
      <View style={styles.row}>
        <Description>Report Type (Note 2)</Description>
        {dat.aCalc && <Acalc>{dat.aCalc.fumess}</Acalc>}
        {dat.bCalc && <Acalc>{dat.bCalc.fumess}</Acalc>}
      </View>
      <View style={styles.row}>
        <Description>Ratio Algorithm Used</Description>
        {dat.aCalc && <Acalc>{dat.aCalc.ratio_string}</Acalc>}
        {dat.bCalc && <Acalc>{dat.bCalc.ratio_string}</Acalc>}
      </View>
      <View style={styles.row}>
        <Description>Selected Area</Description>
        {dat.aCalc && <Acalc>{dat.aCalc.area}</Acalc>}
        {dat.bCalc && <Acalc>{dat.bCalc.area}</Acalc>}
      </View>
      <View style={styles.row}>
        <Description>Target Monthly Payment (Note 3)</Description>
        {dat.aCalc && (
          <Acalc>
            <PdfCash v={dat.aCalc.target_piti} />
          </Acalc>
        )}
        {dat.bCalc && (
          <Acalc>
            <PdfCash v={dat.bCalc.target_piti} />
          </Acalc>
        )}
      </View>
      <View style={styles.row}>
        <Description>Purchase Price</Description>
        {dat.aCalc && (
          <Acalc>
            <PdfCash v={dat.aCalc.sp} />
          </Acalc>
        )}
        {dat.bCalc && (
          <Acalc>
            <PdfCash v={dat.bCalc.sp} />
          </Acalc>
        )}
      </View>
      <View style={styles.row}>
        <Description>Base Loan Amount (Note 4)</Description>
        {dat.aCalc && (
          <Acalc>
            <PdfCash v={dat.aCalc.ma} /> {dat.aCalc.ltv}%
          </Acalc>
        )}
        {dat.bCalc && (
          <Acalc>
            <PdfCash v={dat.bCalc.ma} /> {dat.bCalc.ltv}%
          </Acalc>
        )}
      </View>
      <View style={styles.row}>
        <Description>Total Loan Amount</Description>
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
        <Description>Down payment</Description>
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
        <Description>Total Closing Cost (Note 5)</Description>
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
        <Description>Seller Paid Closing (Note 6)</Description>
        {dat.aCalc && (
          <Acalc>
            <PdfCash v={dat.aCalc.dol_cred} /> {dat.aCalc.temp_cred}%
          </Acalc>
        )}
        {dat.bCalc && (
          <Acalc>
            <PdfCash v={dat.bCalc.dol_cred} /> {dat.bCalc.temp_cred}%
          </Acalc>
        )}
      </View>
      <View style={styles.row}>
        <Description>Lender Closing Credit (Note D)</Description>
        {dat.aCalc && (
          <Acalc>
            <PdfCash v={dat.aCalc.dol_lend} /> {dat.aCalc.temp_lend}%
          </Acalc>
        )}
        {dat.bCalc && (
          <Acalc>
            <PdfCash v={dat.bCalc.dol_lend} /> {dat.bCalc.temp_lend}%
          </Acalc>
        )}
      </View>
      <View style={styles.row}>
        <Description>Required Cash (Note 7)</Description>
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
        <Description>Addition Cash Required</Description>
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
        <Description>Interest Rate</Description>
        {dat.aCalc && <Acalc>{dat.aCalc.temp_rate}%</Acalc>}
        {dat.bCalc && <Acalc>{dat.bCalc.temp_rate}%</Acalc>}
      </View>
      <View style={styles.row}>
        <Description>Total Monthly Payment</Description>
        {dat.aCalc && (
          <Acalc>
            <PdfCash v={dat.aCalc.t_piti} />
          </Acalc>
        )}
        {dat.bCalc && (
          <Acalc>
            <PdfCash v={dat.bCalc.t_piti} />
          </Acalc>
        )}
      </View>
      <View style={styles.row}>
        <Description>Principal &amp; Interest</Description>
        {dat.aCalc && (
          <Acalc>
            <PdfCash v={dat.aCalc.temp_pi} />
          </Acalc>
        )}
        {dat.bCalc && (
          <Acalc>
            <PdfCash v={dat.bCalc.temp_pi} />
          </Acalc>
        )}
      </View>
      <View style={styles.row}>
        <Description>Monthly Mortgage Insurance (Note 8)</Description>
        {dat.aCalc && (
          <Acalc>
            <PdfCash v={dat.aCalc.temp_mi} />
          </Acalc>
        )}
        {dat.bCalc && (
          <Acalc>
            <PdfCash v={dat.bCalc.temp_mi} />
          </Acalc>
        )}
      </View>
      <View style={styles.row}>
        <Description>Monthly Property Taxes</Description>
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
        <Description>Monthly Property Insurance</Description>
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
        <Description>Estimated Annual Tax Deduction (Note 9)</Description>
        {dat.aCalc && (
          <Acalc>
            <PdfCash v={dat.aCalc.tot_duct} />
          </Acalc>
        )}
        {dat.bCalc && (
          <Acalc>
            <PdfCash v={dat.bCalc.tot_duct} />
          </Acalc>
        )}
      </View>
      <View style={styles.row}>
        <Description>Federal Tax Bracket (Note 10)</Description>
        {dat.aCalc && <Acalc>{dat.aCalc.print_t_bracket}%</Acalc>}
        {dat.bCalc && <Acalc>{dat.aCalc.print_t_bracket}%</Acalc>}
      </View>
      <View style={styles.row}>
        <Description>Monthly Federal Tax Savings</Description>
        {dat.aCalc && (
          <Acalc>
            <PdfCash v={dat.aCalc.tax_saving} />
          </Acalc>
        )}
        {dat.bCalc && (
          <Acalc>
            <PdfCash v={dat.bCalc.tax_saving} />
          </Acalc>
        )}
      </View>
      <View style={styles.row}>
        <Description>Net Monthly Mortgage Payment (Note 11)</Description>
        {dat.aCalc && (
          <Acalc>
            <PdfCash v={dat.aCalc.net_mort_pay} />
          </Acalc>
        )}
        {dat.bCalc && (
          <Acalc>
            <PdfCash v={dat.bCalc.net_mort_pay} />
          </Acalc>
        )}
      </View>
      <View style={styles.row}>
        <Description>Payment Ratios (Note 12)</Description>
        {dat.aCalc && (
          <Acalc>
            {dat.aCalc.cal_fr}% {dat.aCalc.cal_br}%
          </Acalc>
        )}
        {dat.bCalc && (
          <Acalc>
            {dat.bCalc.cal_fr}% {dat.bCalc.cal_br}%
          </Acalc>
        )}
      </View>
    </View>
  );
}

export default PdfReportCashBcalc;
