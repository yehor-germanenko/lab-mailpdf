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
          <PdfText v="Closing Cost Estimate for HECM Purchase Price of " />
          {dat.aClose && <PdfCash v={dat.aClose.sp} />}
          <PdfText v="in" />
          {dat.aClose && <PdfText v={dat.aClose.area} />}
          {dat.aClose && <PdfText v={dat.aClose.state_sel} />}
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="Preparation Date" />
          {dat.aClose && <PdfText v={dat.aClose.current_date} />}
          <PdfText v="Close Date" />
          {dat.aClose && <PdfText v={dat.aClose.est_close} />}
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(1) Appraisal Fee&nbsp;" />
          {dat.aClose && <PdfCash v={dat.aClose.app_fee} />}
          <PdfText v="(Lender Requirement) [POC]" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(2) Home Inspection&nbsp;" />
          {dat.aClose && <PdfCash v={dat.aClose.home_ins} />}
          <PdfText v="(Buyer Option) [POC]" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(3) Credit Report&nbsp;" />
          {dat.aClose && <PdfCash v={dat.aClose.cred_rpt} />}
          <PdfText v="($25 Per Report)" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(4) Flood Cert&nbsp;" />
          {dat.aClose && <PdfCash v={dat.aClose.flood_cert} />}
          <PdfText v="(Lender Requirement)" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(5) Pest Inspection&nbsp;" />
          {dat.aClose && <PdfCash v={dat.aClose.pest_ins} />}
          <PdfText v="(Lender Requirement)" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(6) No Lender Fees&nbsp;" />
          {dat.aClose && <PdfCash v={dat.aClose.underfee} />}
          <PdfText v="(User Input) [Negotiable]" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          {dat.aClose && <PdfText v={dat.aClose.loan_org$} />}
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(8) Abstract Fee&nbsp;" />
          {dat.aClose && <PdfCash v={dat.aClose.abs_fee} />}
          <PdfText v="(Title History) [Negotiable]" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(9) Closing Fee&nbsp;" />
          {dat.aClose && <PdfCash v={dat.aClose.clo_fee} />}
          <PdfText v="(Typical Fee for Area) [Negotiable]" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(10) Title Insurance&nbsp;" />
          {dat.aClose && <PdfCash v={dat.aClose.ins_tit} />}
          <PdfText v="(Buyers Title Insurance) [Government Agency]" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(11) Location Servey&nbsp;" />
          {dat.aClose && <PdfCash v={dat.aClose.survey} />}
          <PdfText v="(Optional Lender Requirement)" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(12) No Interim Interest - Reverse Mortgage" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(13) Hazard Insurance Policy&nsbp;" />
          {dat.aClose && <PdfText v={dat.aClose.haz_insur} />}
          <PdfText v="1 Year policy [Negotiable]" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(14) Property Taxes&nbsp;" />
          {dat.aClose && <PdfCash v={dat.aClose.clo_tax} />}
          <PdfText v="(See Notes Below. No Escrow Account.)" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(15) Transfer Taxes&nbsp;" />
          {dat.aClose && <PdfCash v={dat.aClose.transfer} />}
          <PdfText v="[Government Agency]" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(16) Documentary Stamps&nbsp;" />
          {dat.aClose && <PdfCash v={dat.aClose.docstamp} />}
          <PdfText v="[Government Agency]" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(17) Mortgage Recordation Tax&nbsp;" />
          {dat.aClose && <PdfCash v={dat.aClose.mtgetax} />}
          <PdfText v="[Government Agency]" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="(18) Recording fee to Clerk&nbsp;" />
          {dat.aClose && <PdfCash v={dat.aClose.clerk_office} />}
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
          {dat.aClose && <PdfCash v={dat.aClose.totalcc} />}
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="Plus, Down Payment&nbsp;" />
          {dat.aClose && <PdfCash v={dat.aClose.d_payment} />}
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="Estimated Required Cash&nbsp;" />
          {dat.aClose && <PdfCash v={dat.aClose.r_cash} />}
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="Please Read Notes for Better Understanding&nbsp;" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="Future Property Taxes &amp; Insurance Are Buyer Responsibility" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfText v="Property Taxes&nbsp;" />
          {dat.aClose && <PdfCash v={dat.aClose.tax_period$} />}
          {dat.aClose && <PdfText v={dat.aClose.area} />}
        </Description>
      </View>

      <View style={styles.row}>
        <Description>
          {dat.aClose && <PdfText v={dat.aClose.p_tax_adj$} />}
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          {dat.aClose && <PdfText v={dat.aClose.f_tax$} />}
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
    </View>
  );
}
