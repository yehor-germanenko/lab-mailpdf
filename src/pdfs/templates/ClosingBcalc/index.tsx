import React from "react";
import { View, StyleSheet } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";
import { PdfCash, PdfText } from "../../atoms";

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

const ClosingBcalc = ({ dat }: any) => {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.row}>
        <Description>
          <PdfText v="Closing Cost Estimate for Purchase Price of " />
          {dat.bClose && <PdfCash v={dat.bClose.sp} />}
          <PdfText v="in" />
          {dat.bClose && <PdfText v={dat.bClose.area} />}
          {dat.bClose && <PdfText v={dat.bClose.state_sel} />}
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="Preparation Date" />
          {dat.bClose && <PdfText v={dat.bClose.current_date} />}
          <PdfText v="Close Date" />
          {dat.bClose && <PdfText v={dat.bClose.est_close} />}
          <PdfText v="First Mortgage Payment" />
          {dat.bClose && <PdfText v={dat.bClose.first_payment} />}
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(1) Appraisal Fee&nbsp;" />
          {dat.bClose && <PdfCash v={dat.bClose.app_fee} />}
          <PdfText v="(Lender Requirement) [POC]" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(2) Home Inspection&nbsp;" />
          {dat.bClose && <PdfCash v={dat.bClose.home_ins} />}
          <PdfText v="(Buyer Option) [POC]" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(3) Credit Report&nbsp;" />
          {dat.bClose && <PdfCash v={dat.bClose.cred_rpt} />}
          <PdfText v="($25 Per Report)" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(4) Flood Cert&nbsp;" />
          {dat.bClose && <PdfCash v={dat.bClose.flood_cert} />}
          <PdfText v="(Lender Requirement)" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(5) Pest Inspection&nbsp;" />
          {dat.bClose && <PdfCash v={dat.bClose.pest_ins} />}
          <PdfText v="(Lender Requirement)" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(6) Lender Fees&nbsp;" />
          {dat.bClose && <PdfCash v={dat.bClose.underfee} />}
          <PdfText v="(User Input) [Negotiable]" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          {dat.bClose && <PdfText v={dat.bClose.loan_org$} />}
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(8) Abstract Fee&nbsp;" />
          {dat.bClose && <PdfCash v={dat.bClose.abs_fee} />}
          <PdfText v="(Title History) [Negotiable]" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(9) Closing Fee&nbsp;" />
          {dat.bClose && <PdfCash v={dat.bClose.clo_fee} />}
          <PdfText v="(Typical Fee for Area) [Negotiable]" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(10) Title Insurance&nbsp;" />
          {dat.bClose && <PdfCash v={dat.bClose.ins_tit} />}
          <PdfText v="(Buyers Title Insurance) [Government Agency]" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(11) Location Servey&nbsp;" />
          {dat.bClose && <PdfCash v={dat.bClose.survey} />}
          <PdfText v="(Optional Lender Requirement)" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(12) Interim Interest&nbsp;" />
          {dat.bClose && <PdfCash v={dat.bClose.int_int} />}
          {dat.bClose && <PdfText v={dat.bClose.days_interest} />}
          <PdfText v=" Days) [Date Sensitive]" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          {dat.bClose && <PdfText v={dat.bClose.haz_insur$} />}
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(14) Net Property Taxes&nbsp;" />
          {dat.bClose && <PdfCash v={dat.bClose.net_tax} />}
          <PdfText v="(See Notes Below) [Date Sensitive]" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(15) Transfer Taxes&nbsp;" />
          {dat.bClose && <PdfCash v={dat.bClose.transfer} />}
          <PdfText v="[Government Agency]" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(16) Documentary Stamps&nbsp;" />
          {dat.bClose && <PdfCash v={dat.bClose.docstamp} />}
          <PdfText v="[Government Agency]" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(17) Mortgage Recordation Tax&nbsp;" />
          {dat.bClose && <PdfCash v={dat.bClose.mtgetax} />}
          <PdfText v="[Government Agency]" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(18) Recording fee to Clerk&nbsp;" />
          {dat.bClose && <PdfCash v={dat.bClose.clerk_office} />}
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
          {dat.bClose && <PdfCash v={dat.bClose.totalcc} />}
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          {dat.bClose && <PdfText v={dat.bClose.s_credit$} />}
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          {dat.bClose && <PdfText v={dat.bClose.l_credit$} />}
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="Minus Credits&nbsp;" />
          {dat.bClose && <PdfCash v={dat.bClose.total_cred} />}
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="Plus, Down Payment&nbsp;" />
          {dat.bClose && <PdfCash v={dat.bClose.d_payment} />}
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="Estimated Required Cash&nbsp;" />
          {dat.bClose && <PdfCash v={dat.bClose.r_cash} />}
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
          {dat.bClose && <PdfText v={dat.bClose.tax_period$} />}
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="Preparation Date" />
          {dat.bClose && <PdfText v={dat.bClose.current_date} />}
          <PdfText v="Close Date of" />
          {dat.bClose && <PdfText v={dat.bClose.est_close} />}
          <PdfText v="First Mortgage Payment" />
          {dat.bClose && <PdfText v={dat.bClose.first_payment} />}
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          {dat.bClose && <PdfText v={dat.bClose.p_tax_adj$} />}
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="Property Taxes Escrow&nbsp;" />
          {dat.bClose && <PdfCash v={dat.bClose.escrow_tax} />}
          <PdfText v="(Escrow Tax Date" />
          {dat.bClose && <PdfText v={dat.bClose.tax_escrow_date} />}
          {dat.bClose && <PdfText v={dat.bClose.tax_escrow} />}
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

export default ClosingBcalc;
