/*
 * Copyright 2020-2021 AskChristee, LLC. All rights reserved.
 */

import React from "react";
import { View, StyleSheet, Text } from "@react-pdf/renderer";
import { PdfCash, PdfText } from '../../atoms';
import { THecmAClose } from "../../types/api";


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
  description: {
    textAlign: 'left',
    fontSize: 9,
  }
});


interface Props {
  aClose: THecmAClose,
}

const HecmPdfReport: React.FC<Props> = ({ aClose }) => {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.row}>
        <Text style={styles.description}>
          <PdfText v="Closing Cost Estimate for HECM Purchase Price of " />
          {aClose && <PdfCash v={aClose.sp} />}
          <PdfText v="in" />
          {aClose && <PdfText v={aClose.area} />}
          {aClose && <PdfText v={aClose.state_sel} />}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          <PdfText v="Preparation Date" />
          {aClose && <PdfText v={aClose.current_date} />}
          <PdfText v="Close Date" />
          {/* {aClose && <PdfText v={aClose.est_close} />} */}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          <PdfText v="(1) Appraisal Fee&nbsp;" />
          {aClose && <PdfCash v={aClose.app_fee} />}
          <PdfText v="(Lender Requirement) [POC]" />
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          <PdfText v="(2) Home Inspection&nbsp;" />
          {aClose && <PdfCash v={aClose.home_ins} />}
          <PdfText v="(Buyer Option) [POC]" />
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          <PdfText v="(3) Credit Report&nbsp;" />
          {aClose && <PdfCash v={aClose.cred_rpt} />}
          <PdfText v="($25 Per Report)" />
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          <PdfText v="(4) Flood Cert&nbsp;" />
          {aClose && <PdfCash v={aClose.flood_cert} />}
          <PdfText v="(Lender Requirement)" />
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          <PdfText v="(5) Pest Inspection&nbsp;" />
          {aClose && <PdfCash v={aClose.pest_ins} />}
          <PdfText v="(Lender Requirement)" />
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          <PdfText v="(6) No Lender Fees&nbsp;" />
          {aClose && <PdfCash v={aClose.underfee} />}
          <PdfText v="(User Input) [Negotiable]" />
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          {aClose && <PdfText v={aClose.loan_org$} />}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          <PdfText v="(8) Abstract Fee&nbsp;" />
          {aClose && <PdfCash v={aClose.abs_fee} />}
          <PdfText v="(Title History) [Negotiable]" />
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          <PdfText v="(9) Closing Fee&nbsp;" />
          {aClose && <PdfCash v={aClose.clo_fee} />}
          <PdfText v="(Typical Fee for Area) [Negotiable]" />
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          <PdfText v="(10) Title Insurance&nbsp;" />
          {aClose && <PdfCash v={aClose.int_tit} />}
          <PdfText v="(Buyers Title Insurance) [Government Agency]" />
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          <PdfText v="(11) Location Servey&nbsp;" />
          {aClose && <PdfCash v={aClose.survey} />}
          <PdfText v="(Optional Lender Requirement)" />
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          <PdfText v="(12) No Interim Interest - Reverse Mortgage" />
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          <PdfText v="(13) Hazard Insurance Policy&nsbp;" />
          {aClose && <PdfText v={aClose.haz_insur} />}
          <PdfText v="1 Year policy [Negotiable]" />
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          <PdfText v="(14) Property Taxes&nbsp;" />
          {aClose && <PdfCash v={aClose.clo_tax} />}
          <PdfText v="(See Notes Below. No Escrow Account.)" />
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          <PdfText v="(15) Transfer Taxes&nbsp;" />
          {aClose && <PdfCash v={aClose.transfer} />}
          <PdfText v="[Government Agency]" />
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          <PdfText v="(16) Documentary Stamps&nbsp;" />
          {aClose && <PdfCash v={aClose.docstamp} />}
          <PdfText v="[Government Agency]" />
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          <PdfText v="(17) Mortgage Recordation Tax&nbsp;" />
          {aClose && <PdfCash v={aClose.mtgetax} />}
          <PdfText v="[Government Agency]" />
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          <PdfText v="(18) Recording fee to Clerk&nbsp;" />
          {aClose && <PdfCash v={aClose.clerk_office} />}
          <PdfText v="[Government Agency]" />
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          <PdfText v="&nbsp;" />
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          <PdfText v="Estimated Total Closing Cost&nbsp;" />
          {aClose && <PdfCash v={aClose.totalcc} />}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          <PdfText v="Plus, Down Payment&nbsp;" />
          {aClose && <PdfCash v={aClose.d_payment} />}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          <PdfText v="Estimated Required Cash&nbsp;" />
          {aClose && <PdfCash v={aClose.r_cash} />}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          <PdfText v="" />
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          <PdfText v="Please Read Notes for Better Understanding&nbsp;" />
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          <PdfText v="Future Property Taxes &amp; Insurance Are Buyer Responsibility" />
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          <PdfText v="Property Taxes&nbsp;" />
          {aClose && <PdfCash v={aClose.tax_period$} />}
          {aClose && <PdfText v={aClose.area} />}
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.description}>
          {aClose && <PdfText v={aClose.p_tax_adj$} />}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          {aClose && <PdfText v={aClose.f_tax$} />}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          <PdfText v="POC ... Paid Outside Closing. Not Included in Closing Cost Totals" />
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          <PdfText v="Negotiable Items ... Prices May Vary Between Title Companies, Lenders or Other Vendors" />
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          <PdfText v="Date Sensitive ... Amount Due Will Change Based Upon Closing Date" />
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          <PdfText v="Government Agency ... Amount is Based upon State or Local Rate Policies" />
        </Text>
      </View>
    </View>
  );
}

export default HecmPdfReport;
