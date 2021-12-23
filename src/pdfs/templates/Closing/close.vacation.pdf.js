import React from "react";
import { View, StyleSheet } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";
import { PdfCash, PdfText } from "../../atoms/CommonFormats";

const Description = styled.Text`
  text-align: left;
  font-size: 9px;
`;

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 24,
  },
  row: {
    flexDirection: "row",
    height: 16,
    width: "100%",
  },
});

export default function PdfReport({ dat }) {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.row}>
        <Description>
          <PdfText v="Closing Cost Estimate for Purchase Price of " />
          {dat && <PdfCash v={dat.sp} />}
          <PdfText v="in" />
          {dat && <PdfText v={dat.area} />}
          {dat && <PdfText v={dat.state_sel} />}
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="Preparation Date" />
          {dat && <PdfText v={dat.current_date} />}
          <PdfText v="Close Date" />
          {dat && <PdfText v={dat.est_close} />}
          <PdfText v="First Mortgage Payment" />
          {dat && <PdfText v={dat.first_payment} />}
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(1) Appraisal Fee&nbsp;" />
          {dat && <PdfCash v={dat.app_fee} />}
          <PdfText v="(Lender Requirement) [POC]" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(2) Home Inspection&nbsp;" />
          {dat && <PdfCash v={dat.home_ins} />}
          <PdfText v="(Buyer Option) [POC]" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(3) Credit Report&nbsp;" />
          {dat && <PdfCash v={dat.cred_rpt} />}
          <PdfText v="($25 Per Report)" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(4) Flood Cert&nbsp;" />
          {dat && <PdfCash v={dat.flood_cert} />}
          <PdfText v="(Lender Requirement)" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(5) Pest Inspection&nbsp;" />
          {dat && <PdfCash v={dat.pest_ins} />}
          <PdfText v="(Lender Requirement)" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(6) Lender Fees&nbsp;" />
          {dat && <PdfCash v={dat.underfee} />}
          <PdfText v="(User Input) [Negotiable]" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>{dat.aClose && <PdfText v={dat.loan_org$} />}</Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(8) Abstract Fee&nbsp;" />
          {dat && <PdfCash v={dat.abs_fee} />}
          <PdfText v="(Title History) [Negotiable]" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(9) Closing Fee&nbsp;" />
          {dat && <PdfCash v={dat.clo_fee} />}
          <PdfText v="(Typical Fee for Area) [Negotiable]" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(10) Title Insurance&nbsp;" />
          {dat && <PdfCash v={dat.ins_tit} />}
          <PdfText v="(Buyers Title Insurance) [Government Agency]" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(11) Location Servey&nbsp;" />
          {dat && <PdfCash v={dat.survey} />}
          <PdfText v="(Optional Lender Requirement)" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(12) Interim Interest&nbsp;" />
          {dat && <PdfCash v={dat.int_int} />}
          {dat && <PdfText v={dat.days_interest} />}
          <PdfText v=" Days) [Date Sensitive]" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>{dat && <PdfText v={dat.haz_insur$} />}</Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(14) Net Property Taxes&nbsp;" />
          {dat && <PdfCash v={dat.net_tax} />}
          <PdfText v="(See Notes Below) [Date Sensitive]" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(15) Transfer Taxes&nbsp;" />
          {dat && <PdfCash v={dat.transfer} />}
          <PdfText v="[Government Agency]" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(16) Documentary Stamps&nbsp;" />
          {dat && <PdfCash v={dat.docstamp} />}
          <PdfText v="[Government Agency]" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(17) Mortgage Recordation Tax&nbsp;" />
          {dat && <PdfCash v={dat.mtgetax} />}
          <PdfText v="[Government Agency]" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(18) Recording fee to Clerk&nbsp;" />
          {dat && <PdfCash v={dat.clerk_office} />}
          <PdfText v="[Government Agency]" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="&nbsp;" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="Estimated Total Closing Cost&nbsp;" />
          {dat && <PdfCash v={dat.totalcc} />}
        </Description>
      </View>
      <View style={styles.row}>
        <Description>{dat && <PdfText v={dat.s_credit$} />}</Description>
      </View>
      <View style={styles.row}>
        <Description>{dat && <PdfText v={dat.l_credit$} />}</Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="Minus Credits&nbsp;" />
          {dat && <PdfCash v={dat.total_cred} />}
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="Plus, Down Payment&nbsp;" />
          {dat && <PdfCash v={dat.d_payment} />}
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="Estimated Required Cash&nbsp;" />
          {dat && <PdfCash v={dat.r_cash} />}
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="&nbsp;" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="Please Read Notes for Better Understanding&nbsp;" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="Tax Adjustments Based on" />
          {dat && <PdfText v={dat.tax_period$} />}
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="Preparation Date" />
          {dat && <PdfText v={dat.current_date} />}
          <PdfText v="Close Date of" />
          {dat && <PdfText v={dat.est_close} />}
          <PdfText v="First Mortgage Payment" />
          {dat && <PdfText v={dat.first_payment} />}
        </Description>
      </View>
      <View style={styles.row}>
        <Description>{dat && <PdfText v={dat.p_tax_adj$} />}</Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="Property Taxes Escrow&nbsp;" />
          {dat && <PdfCash v={dat.escrow_tax} />}
          <PdfText v="(Escrow Tax Date" />
          {dat && <PdfText v={dat.tax_escrow_date} />}
          {dat && <PdfText v={dat.tax_escrow} />}
          <PdfText v="Months Total Escrow)&nbsp;" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="POC ... Paid Outside Closing. Not Included in Closing Cost Totals" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="Negotiable Items ... Prices May Vary Between Title Companies, Lenders or Other Vendors" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="Date Sensitive ... Amount Due Will Change Based Upon Closing Date" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="Government Agency ... Amount is Based upon State or Local Rate Policies" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="Any Intangible Tax Included in Mortgage Recordation Tax" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="Closing Costs are estimates. Final Numbers will be provided by Lender/ Title Company" />
        </Description>
      </View>
    </View>
  );
}
