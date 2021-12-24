import React from "react";
import { View } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";
import { PdfCash } from "../../Helpers/CommonFormats";
//import { StylesFromAtomsTable } from "../atoms/Styles";
import { StylesFromAtomsTable } from "../../Helpers/Styles";

// styles used in the details sections
const styles = StylesFromAtomsTable;

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

export default function PdfReport({ dat }) {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.row}>
        <Description></Description>
        {dat.aNotes && <Acalc>{dat.aNotes.report_type}</Acalc>}
        {dat.aNotes && <Acalc>{dat.aNotes.report_type_2}</Acalc>}
      </View>
      <View style={styles.row}>
        <Description>State</Description>
        {dat.aNotes && <Acalc>{dat.aNotes.state_sel}</Acalc>}
        {dat.aNotes && <Acalc>{dat.aNotes.state_select_2}</Acalc>}
      </View>
      <View style={styles.row}>
        <Description>Selected Area</Description>
        {dat.aNotes && <Acalc>{dat.aNotes.area}</Acalc>}
        {dat.aNotes && <Acalc>{dat.aNotes.area_2}</Acalc>}
      </View>
      <View style={styles.row}>
        <Description>Purchase Price (Note 1)</Description>
        {dat.aNotes && (
          <Acalc>
            <PdfCash v={dat.aNotes.sp} />
          </Acalc>
        )}
        {dat.aNotes && (
          <Acalc>
            <PdfCash v={dat.aNotes.sp_2} />
          </Acalc>
        )}
      </View>
      <View style={styles.row}>
        <Description>Base Loan Amount (Note 2)</Description>
        {dat.aNotes && (
          <Acalc>
            <PdfCash v={dat.aNotes.ma} /> {dat.aNotes.ltv}%
          </Acalc>
        )}
        {dat.aNotes && (
          <Acalc>
            <PdfCash v={dat.aNotes.ma_2} /> {dat.aNotes.ltv_2}%
          </Acalc>
        )}
      </View>
      <View style={styles.row}>
        <Description>Total Loan Amount</Description>
        {dat.aNotes && (
          <Acalc>
            <PdfCash v={dat.aNotes.total_mtge} />
          </Acalc>
        )}
        {dat.aNotes && (
          <Acalc>
            <PdfCash v={dat.aNotes.total_mtge_2} />
          </Acalc>
        )}
      </View>
      <View style={styles.row}>
        <Description>Down payment</Description>
        {dat.aNotes && (
          <Acalc>
            <PdfCash v={dat.aNotes.d_payment} />
          </Acalc>
        )}
        {dat.aNotes && (
          <Acalc>
            <PdfCash v={dat.aNotes.d_payment_2} />
          </Acalc>
        )}
      </View>
      <View style={styles.row}>
        <Description>Total Closing Cost</Description>
        {dat.aNotes && (
          <Acalc>
            <PdfCash v={dat.aNotes.totalcc} />
          </Acalc>
        )}
        {dat.aNotes && (
          <Acalc>
            <PdfCash v={dat.aNotes.totalcc_2} />
          </Acalc>
        )}
      </View>
      <View style={styles.row}>
        <Description>Seller Paid Cost (Note 6)</Description>
        {dat.aNotes && (
          <Acalc>
            <PdfCash v={dat.aNotes.dol_cred} /> {dat.aNotes.temp_cred}%
          </Acalc>
        )}
        {dat.aNotes && (
          <Acalc>
            <PdfCash v={dat.aNotes.dol_cred_2} /> {dat.aNotes.temp_cred_2}%
          </Acalc>
        )}
      </View>
      <View style={styles.row}>
        <Description>Required Cash (Note 4)</Description>
        {dat.aNotes && (
          <Acalc>
            <PdfCash v={dat.aNotes.r_cash} />
          </Acalc>
        )}
        {dat.aNotes && (
          <Acalc>
            <PdfCash v={dat.aNotes.r_cash_2} />
          </Acalc>
        )}
      </View>
      <View style={styles.row}>
        <Description>Interest Rate (Note 7)</Description>
        {dat.aNotes && <Acalc>{dat.aNotes.temp_rate}%</Acalc>}
        {dat.aNotes && <Acalc>{dat.aNotes.temp_rate_2}%</Acalc>}
      </View>
      <View style={styles.row}>
        <Description>Total Monthly Payment (Note 3)</Description>
        {dat.aNotes && (
          <Acalc>
            <PdfCash v={dat.aNotes.t_piti} />
          </Acalc>
        )}
        {dat.aNotes && (
          <Acalc>
            <PdfCash v={dat.aNotes.t_piti_2} />
          </Acalc>
        )}
      </View>
      <View style={styles.row}>
        <Description>Principal &amp; Interest</Description>
        {dat.aNotes && (
          <Acalc>
            <PdfCash v={dat.aNotes.temp_pi} />
          </Acalc>
        )}
        {dat.aNotes && (
          <Acalc>
            <PdfCash v={dat.aNotes.temp_pi_2} />
          </Acalc>
        )}
      </View>
      <View style={styles.row}>
        <Description>Monthly Mortgage Insurance</Description>
        {dat.aNotes && (
          <Acalc>
            <PdfCash v={dat.aNotes.temp_mi} />
          </Acalc>
        )}
        {dat.aNotes && (
          <Acalc>
            <PdfCash v={dat.aNotes.temp_mi_2} />
          </Acalc>
        )}
      </View>
      <View style={styles.row}>
        <Description>Monthly Property Taxes</Description>
        {dat.aNotes && (
          <Acalc>
            <PdfCash v={dat.aNotes.temp_pt} />
          </Acalc>
        )}
        {dat.aNotes && (
          <Acalc>
            <PdfCash v={dat.aNotes.temp_pt_2} />
          </Acalc>
        )}
      </View>
      <View style={styles.row}>
        <Description>Monthly Property Insurance</Description>
        {dat.aNotes && (
          <Acalc>
            <PdfCash v={dat.aNotes.temp_ins} />
          </Acalc>
        )}
        {dat.aNotes && (
          <Acalc>
            <PdfCash v={dat.aNotes.temp_ins_2} />
          </Acalc>
        )}
      </View>
      <View style={styles.row}>
        <Description>Monthly Condo/HOA Fee</Description>
        {dat.aNotes && (
          <Acalc>
            <PdfCash v={dat.aNotes.condo} />
          </Acalc>
        )}
        {dat.aNotes && (
          <Acalc>
            <PdfCash v={dat.aNotes.condo_2} />
          </Acalc>
        )}
      </View>
      <View style={styles.row}>
        <Description>Estimated Annual Tax Deduction (Note 9)</Description>
        {dat.aNotes && (
          <Acalc>
            <PdfCash v={dat.aNotes.tot_duct} />
          </Acalc>
        )}
        {dat.aNotes && (
          <Acalc>
            <PdfCash v={dat.aNotes.tot_duct_2} />
          </Acalc>
        )}
      </View>
      <View style={styles.row}>
        <Description>Federal Tax Bracket (Note 10)</Description>
        {dat.aNotes && <Acalc>{dat.aNotes.print_t_bracket}%</Acalc>}
        {dat.aNotes && <Acalc>{dat.aNotes.print_t_bracket}%</Acalc>}
      </View>
      <View style={styles.row}>
        <Description>Monthly Federal Tax Savings</Description>
        {dat.aNotes && (
          <Acalc>
            <PdfCash v={dat.aNotes.tax_saving} />
          </Acalc>
        )}
        {dat.aNotes && (
          <Acalc>
            <PdfCash v={dat.aNotes.tax_saving_2} />
          </Acalc>
        )}
      </View>
      <View style={styles.row}>
        <Description>Net Monthly Mortgage Payment (Note 11)</Description>
        {dat.aNotes && (
          <Acalc>
            <PdfCash v={dat.aNotes.net_mort_pay} />
          </Acalc>
        )}
        {dat.aNotes && (
          <Acalc>
            <PdfCash v={dat.aNotes.net_mort_pay_2} />
          </Acalc>
        )}
      </View>
      <View style={styles.row}>
        <Description>Front Ratio</Description>
        {dat.aNotes && <Acalc>{dat.aNotes.cal_fr}%</Acalc>}
        {dat.aNotes && <Acalc>{dat.aNotes.cal_fr_2}%</Acalc>}
      </View>
      <View style={styles.row}>
        <Description>Back Ratio</Description>
        {dat.aNotes && <Acalc>{dat.aNotes.cal_br}%</Acalc>}
        {dat.aNotes && <Acalc>{dat.aNotes.cal_br_2}%</Acalc>}
      </View>
    </View>
  );
}
