/**
 * * IMPORTANT: All functions that return data, such as <PdfCash> and
 * * <PdfPercent> must have &nbsp; prior to and after, since
 * * &nbsp; fails to print a space whenreturned from
 * * atoms/CommonFormats.
 */
import { Document, Image, Page, Text, View } from "@react-pdf/renderer";
import React, { Fragment } from "react";
import {
  PdfCash,
  PdfCashPrompt,
  PdfPercentPrompt,
  PdfCashPromptWithPercent,
  PdfPromptCashPercentParens,
} from "../../Helpers/CommonFormats";
import Logo from "../../Helpers/logo.png";
import ReportTitle from "../../Helpers/pdf.title";
import {
  Description,
  StylesFromAtoms,
  StylesFromAtomsTable,
  TextBold,
} from "../../Helpers/Styles";
import ReportClose from "../Closing/close.aCalc.pdf";

// styles used in the details sections
const styles = StylesFromAtomsTable;

// styles used as part of the pdf layout
const pageStyles = StylesFromAtoms;

// function SectionClosing({ dat }) {
//   return (
//     <View style={styles.tableContainer}>
//       <View style={styles.row}>
//         <Description>
//           <PdfCashPrompt prompt="Appraisal Fee" v={dat.close.app_fee} />
//           Paid Outside Closing (POC)
//         </Description>
//       </View>
//       <View style={styles.row}>
//         <Description>
//           <PdfCashPrompt prompt="Home Inspection" v={dat.close.home_ins} />
//           Paid Outside Closing (POC)
//         </Description>
//       </View>
//       <View style={styles.row}>
//         <Description>
//           {" "}
//           <PdfCashPrompt prompt="Lender Fees" v={dat.close.underfee} />
//         </Description>
//       </View>
//       <View style={styles.row}>
//         <Description>
//           <PdfCashPrompt prompt="Credit Report" v={dat.close.cred_rpt} />
//         </Description>
//       </View>
//       <View style={styles.row}>
//         <Description>
//           <PdfCashPrompt prompt="Flood Cert" v={dat.close.flood_cert} />
//         </Description>
//       </View>
//       <View style={styles.row}>
//         <Description>
//           <PdfCashPrompt prompt="Pest Inspection" v={dat.close.pest_ins} />
//         </Description>
//       </View>
//       <View style={styles.row}>
//         <Description>
//           <PdfCashPrompt prompt="Loan Origination" v={dat.close.loan_org} />
//         </Description>
//       </View>
//       <View style={styles.row}>
//         <Description>
//           <PdfCashPrompt prompt="Abstract Fee" v={dat.close.abs_fee} />
//         </Description>
//       </View>
//       <View style={styles.row}>
//         <Description>
//           <PdfCashPrompt prompt="Closing Fee" v={dat.close.clo_fee} />
//         </Description>
//       </View>
//       <View style={styles.row}>
//         <Description>
//           <PdfCashPrompt prompt="Title Insurance" v={dat.close.ins_tit} />
//         </Description>
//       </View>
//       <View style={styles.row}>
//         <Description>
//           <PdfCashPrompt prompt="Survey" v={dat.close.survey} />
//         </Description>
//       </View>
//       <View style={styles.row}>
//         <Description>
//           <PdfCashPrompt prompt="Interim Interest" v={dat.close.int_int} />
//         </Description>
//       </View>
//       <View style={styles.row}>
//         <Description>
//           <PdfCashPrompt
//             prompt="Home Owners Insurance"
//             v={dat.close.haz_insur}
//           />
//         </Description>
//       </View>
//       <View style={styles.row}>
//         <Description>
//           <PdfCashPrompt prompt="Property Taxes" v={dat.close.clo_tax} />
//         </Description>
//       </View>
//       <View style={styles.row}>
//         <Description>
//           <PdfCashPrompt prompt="Transfer Taxes" v={dat.close.transfer} />
//         </Description>
//       </View>
//       <View style={styles.row}>
//         <Description>
//           <PdfCashPrompt prompt="Documentary Stamps" v={dat.close.docstamp} />
//         </Description>
//       </View>
//       <View style={styles.row}>
//         <Description>
//           <PdfCashPrompt
//             prompt="Mortgage Recordation Tax"
//             v={dat.close.mtgetax}
//           />
//         </Description>
//       </View>
//       <View style={styles.row}>
//         <Description>
//           <PdfCashPrompt
//             prompt="Recording fee to Clerk"
//             v={dat.close.clerk_office}
//           />
//         </Description>
//       </View>
//       <View style={styles.row}>
//         <Description>
//           <PdfCashPrompt
//             prompt="Estimated Closing Cost"
//             v={dat.close.totalcc}
//           />
//         </Description>
//       </View>
//     </View>
//   );
// }

function SectionHeader({ dat }) {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.row}>
        <TextBold>Christee Investment Analysis.</TextBold>
        <Description>
          &nbsp;State:&nbsp;{dat.pdf.state_sel}
          &nbsp;Selected Area:&nbsp;{dat.pdf.area}
        </Description>
      </View>
      <View style={styles.row}>
        <Description>{dat.pdf.pdf_head1}</Description>
      </View>
      <View style={styles.row}>
        <Description>{dat.pdf.pdf_head2}</Description>
      </View>
    </View>
  );
}

function SectionOne({ dat }) {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.row}>
        <TextBold>1. Purchase Details&nbsp;</TextBold>
        <Description>
          <PdfCashPrompt v={dat.pdf.sp} prompt="Price" />
          <PdfCashPrompt v={dat.pdf.d_payment} prompt="Down payment" />
          <PdfCashPrompt v={dat.pdf.totalcc} prompt="Closing Cost" />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfCashPromptWithPercent
            prompt="Closing Credit"
            v={dat.pdf.dol_cred}
            p={dat.pdf.temp_cred}
          />
          <PdfCashPrompt prompt="Cash Investment" v={dat.pdf.r_cash} />
          <PdfCashPrompt prompt="Acquisition Cost" v={dat.pdf.acq_cost} />
        </Description>
      </View>
    </View>
  );
}

function SectionTwo({ dat }) {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.row}>
        <TextBold>2. Mortgage Details&nbsp;</TextBold>
        <Description>{dat.pdf.pdfmess2}</Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfCashPrompt prompt="Monthly Payment" v={dat.pdf.t_piti} />
          <PdfCashPrompt prompt="Prin. &amp; Int" v={dat.pdf.temp_pi} />
          <PdfCashPrompt prompt="Mortgage Ins" v={dat.pdf.temp_mi} />
          <PdfCashPrompt prompt="Property Taxes" v={dat.pdf.temp_pt} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfCashPrompt prompt="Property Ins" v={dat.pdf.temp_ins} />
          <PdfCashPrompt prompt="Condo/HOA Fees" v={dat.pdf.condo} />
          <PdfCashPrompt prompt="Debt Service" v={dat.pdf.debt_ser} />
          (Annual Mortgage Payment)
        </Description>
      </View>
    </View>
  );
}

function SectionThree({ dat }) {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.row}>
        <TextBold>3. Annual Income Analysis&nbsp;</TextBold>
        <Description>
          <PdfCashPrompt prompt="Average Annual Rents" v={dat.pdf.avg_rent} />
          <PdfPercentPrompt prompt="Rent Increase" v={dat.pdf.rent_increase} />
          for&nbsp;{dat.pdf.report_years}&nbsp;years
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfCashPrompt
            prompt="Annual Vacancy Allowance"
            v={dat.pdf.vacancy}
          />
          ({dat.pdf.vac_allow}%)&nbsp;
          <PdfCashPrompt prompt="Management Fee" v={dat.pdf.mgt_fee} />(
          {dat.pdf.prop_mgt}%)&nbsp;
          <PdfCashPrompt prompt="Maintenance" v={dat.pdf.main_amt} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfCashPrompt prompt="Annual Net Operating Income" v={dat.pdf.noi} />
          <PdfCashPrompt prompt="Annual Debt Service" v={dat.pdf.debt_ser} />
          &nbsp;
          {dat.pdf.cash_flow_$}&nbsp;Cash Flow&nbsp;
          <PdfCash v={dat.pdf.cash_flow} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          Average&nbsp;{dat.pdf.tax_sit}&nbsp;
          <PdfCash v={dat.pdf.tot_duct} />
          &nbsp;
          {dat.pdf.tax_due$}&nbsp;
          <PdfCash v={dat.pdf.tax_saving} />
        </Description>
      </View>
    </View>
  );
}

function SectionFour({ dat }) {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.row}>
        <TextBold>4. Projected Future Value&nbsp;</TextBold>
        <Description>
          Report Period&nbsp;{dat.pdf.report_years}&nbsp;Years. Appreciation
          Rate&nbsp;
          {dat.pdf.prop_app}%&nbsp;Annually
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfCashPrompt prompt="Home Value" v={dat.pdf.h_value} />
          <PdfCashPrompt prompt="Mortgage Balance" v={dat.pdf.ma_bal} />
          <PdfCashPrompt prompt="Equity" v={dat.pdf.net_equity} />
          (Value Minus Loan Balance)
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfCashPrompt prompt="Gross Profits" v={dat.pdf.gross_profit} />
          <PdfCashPrompt prompt="Net Cash" v={dat.pdf.net_equity} />
          {dat.pdf.cash_$}&nbsp;
          {dat.pdf.cash_imp}
        </Description>
      </View>
    </View>
  );
}

function SectionFive({ dat }) {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.row}>
        <TextBold>5. Deprecation Details&nbsp;</TextBold>
        <Description>
          <PdfCashPrompt
            prompt="Average Yearly Deprecation"
            v={dat.pdf.avg_deprec}
          />
          For Report Period
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfCashPrompt
            prompt="Structural Deprecation basis"
            v={dat.pdf.dep_base}
          />
          <PdfCashPrompt
            prompt="Annual Straight-Line Deprecation"
            v={dat.pdf.an_deprec}
          />
          ({dat.pdf.st_depre} years)
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfCashPrompt
            prompt="Non-Structural Deprecation Basis"
            v={dat.pdf.cost_seg}
          />
          <PdfCashPrompt
            prompt="Annual Non-Structural Deprecation"
            v={dat.pdf.seg_dep}
          />
          ({dat.pdf.cost_seg_period}&nbsp;years)
        </Description>
      </View>
    </View>
  );
}

function SectionSix({ dat }) {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.row}>
        <TextBold>6. Potential Tax Overview&nbsp;</TextBold>
        <Description>
          <PdfCashPrompt prompt="Capital Gains" v={dat.pdf.capital_gain} />
          <PdfCashPrompt prompt="Net Profits" v={dat.pdf.net_profits} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfPromptCashPercentParens
            prompt="Capital Gains Taxes"
            v={dat.pdf.fed_cap_tax}
            p={dat.pdf.cap_gain_rate}
          />
          <PdfPromptCashPercentParens
            prompt="State"
            v={dat.pdf.state_cap_tax}
            p={dat.pdf.st_caprate}
          />
          <PdfPromptCashPercentParens
            prompt="NIIT tax of"
            v={dat.pdf.niit_tax}
            p={dat.pdf.niittax_rate}
          />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfCashPrompt
            prompt="Recapture Tax Basis"
            v={dat.pdf.total_deprec}
          />
          <PdfPromptCashPercentParens
            prompt="Recapture Tax"
            v={dat.pdf.recapture}
            p={dat.pdf.recap_rate}
          />
          <PdfPromptCashPercentParens
            prompt="Potential Taxes on Sales"
            v={dat.pdf.total_taxes}
            p={dat.pdf.total_tx_per}
          />
        </Description>
      </View>
    </View>
  );
}

function SectionSeven({ dat }) {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.row}>
        <TextBold>7. Ratios&nbsp;</TextBold>
        <Description>
          <PdfPercentPrompt
            prompt="Return on Investment (ROI)"
            v={dat.pdf.roi_return}
          />
          <PdfPercentPrompt prompt="Cap Rate" v={dat.pdf.capit_rate} />
          Debt Service Ratio&nbsp;{dat.pdf.dscr}
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          <PdfPercentPrompt
            prompt="Annual Return on Cash"
            v={dat.pdf.cash_return}
          />
          Gross Rent Multiplier&nbsp;{dat.pdf.grm_factor}&nbsp;Return of
          Capital&nbsp;{dat.pdf.return_invest}&nbsp;years
        </Description>
      </View>
    </View>
  );
}

function SectionFooter({ dat }) {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.row}></View>
      <View style={styles.row}>
        <TextBold>
          <Description>{dat.pdf.pdf_bottom}</Description>
        </TextBold>
      </View>
    </View>
  );
}

function ReportContainer({ dat, title }) {
  return (
    <Fragment>
      <Page style={pageStyles.body}>
        <Text style={pageStyles.header} fixed>
          <Image style={pageStyles.image} src={Logo} alt="images" />
        </Text>
        <ReportTitle title="" />
        <SectionHeader dat={dat} />
        <SectionOne dat={dat} />
        <SectionTwo dat={dat} />
        <SectionThree dat={dat} />
        <SectionFour dat={dat} />
        <SectionFive dat={dat} />
        <SectionSix dat={dat} />
        <SectionSeven dat={dat} />
        <SectionFooter dat={dat} />
        <Text
          style={pageStyles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
      <Page style={pageStyles.body}>
        <Text style={pageStyles.header} fixed>
          <Image style={pageStyles.image} src={Logo} alt="images" />
        </Text>
        <ReportTitle title="Christee Results Closing Cost Estimate" />
        <ReportClose dat={dat} />
        <Text
          style={pageStyles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Fragment>
  );
}

/**
 * This is the exported function it takes the dat and
 * title from pdf.button.
 */
export default function PdfReport({ dat, title }) {
  return (
    <Document>
      <ReportContainer dat={dat} title={title} />
    </Document>
  );
}
