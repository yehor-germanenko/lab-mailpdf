/**
 * Rent or Buy PDF
 *
 * This files has both the PDF container and the report details as a function.
 * While report details could be separated out into it's own file, there
 * is no problem having it together, so the file includes all that is required.
 *
 * Also, as this PDF would be required in both the ask and tcb urls, having
 * it as a single file seems to be cleaner, but that may just be a
 * personal preference.
 *
 * TODO: pdf-helpers.rob should move into the Styles.js
 */
import React from "react";
import { Document, Page, Text, Image } from "@react-pdf/renderer";
import { View, StyleSheet } from "@react-pdf/renderer";
import ReportTitle from "../../atoms/pdf.title";
import styles from "../../atoms/pdf-helpers.rob";
import Logo from "../../Helpers/logo.png";
import styled from "@react-pdf/styled-components";
import { PdfCash } from "../../Helpers/CommonFormats";
import ReportClose from "../Closing/close.aCalc.pdf";

const Description = styled.Text`
  text-align: left;
  width: "40%";
  font-size: 9px;
`;

const Acalc = styled.Text`
  width: "60%";
  text-align: left;
  padding: 0 10px;
  font-size: 9px;
`;

const Note = styled.Text`
  width: "100%";
  text-align: left;
  font-size: 9px;
`;

function ReportDetails({ dat }) {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.row}>
        <Description>(1) Loan Type</Description>
        <Acalc>{dat.fumess}</Acalc>
      </View>
      <View style={styles.row}>
        <Description>(2) Area Selected</Description>
        <Acalc>{dat.area}</Acalc>
      </View>
      <View style={styles.row}>
        <Description>(3) Report Period</Description>
        <Acalc>{dat.report_years} years</Acalc>
      </View>
      <View style={styles.row}>
        <Description>(4) Monthly Rent</Description>
        <Acalc>
          <PdfCash v={dat.m_rent} />
        </Acalc>
      </View>
      <View style={styles.row}>
        <Description>(5) Purchase Price</Description>
        <Acalc>
          <PdfCash v={dat.sp} />
        </Acalc>
      </View>
      <View style={styles.row}>
        <Description>(6) Mortgage Amount</Description>
        <Acalc>
          <PdfCash v={dat.ma} /> Interest Rate: {dat.temp_rate}% {dat.ltv} % LTV
        </Acalc>
      </View>
      <View style={styles.row}>
        <Description>(7) Total Mortgage</Description>
        <Acalc>
          <PdfCash v={dat.total_mtge} /> See Note 1
        </Acalc>
      </View>
      <View style={styles.row}>
        <Description>(8) Monthly Mortgage Payment</Description>
        <Acalc>
          <PdfCash v={dat.t_piti} />
        </Acalc>
      </View>
      <View style={styles.row}>
        <Description>(9) Principal and Interest</Description>
        <Acalc>
          <PdfCash v={dat.temp_pi} />
        </Acalc>
      </View>
      <View style={styles.row}>
        <Description>(10) Mortgage Insurance</Description>
        <Acalc>
          <PdfCash v={dat.temp_mi} />
        </Acalc>
      </View>
      <View style={styles.row}>
        <Description>(11) Propery Taxes</Description>
        <Acalc>
          <PdfCash v={dat.temp_pt} />
        </Acalc>
      </View>
      <View style={styles.row}>
        <Description>(12) Property Insurance</Description>
        <Acalc>
          <PdfCash v={dat.temp_ins} />
        </Acalc>
      </View>
      <View style={styles.row}>
        <Description>(13) Down Payment</Description>
        <Acalc>
          <PdfCash v={dat.d_payment} />
        </Acalc>
      </View>
      <View style={styles.row}>
        <Description>(14) Total Closing Cost</Description>
        <Acalc>
          <PdfCash v={dat.totalcc} />
        </Acalc>
      </View>
      <View style={styles.row}>
        <Description>(15) Seller Paid Closing</Description>
        <Acalc>
          <PdfCash v={dat.dol_cred} /> {dat.temp_cred}%
        </Acalc>
      </View>
      <View style={styles.row}>
        <Description>(16) Cash Required</Description>
        <Acalc>
          <PdfCash v={dat.r_cash} />
        </Acalc>
      </View>
      <View style={styles.row}>
        <Description>(17) Total Rent Payments</Description>
        <Acalc>
          <PdfCash v={dat.total_rent} />
        </Acalc>
      </View>
      <View style={styles.row}>
        <Description>(18) Total Mortgage Payments</Description>
        <Acalc>
          <PdfCash v={dat.total_piti} />
        </Acalc>
      </View>
      <View style={styles.row}>
        <Description>(19) After Tax Mortgage Payments</Description>
        <Acalc>
          <PdfCash v={dat.total_net_payment} /> See Note 2
        </Acalc>
      </View>
      <View style={styles.row}>
        <Description>(20) Estimated Tax Deduction</Description>
        <Acalc>
          <PdfCash v={dat.tot_duct} /> See Note 3
        </Acalc>
      </View>
      <View style={styles.row}>
        <Description>(21) Mortgage Interest</Description>
        <Acalc>
          <PdfCash v={dat.total_int} /> Report Period
        </Acalc>
      </View>
      <View style={styles.row}>
        <Description>(22) Property Taxes</Description>
        <Acalc>
          <PdfCash v={dat.total_taxes} /> Report Period
        </Acalc>
      </View>
      <View style={styles.row}>
        <Description>(23) Total Tax Savings</Description>
        <Acalc>
          <PdfCash v={dat.tax_saving} /> Tax Bracket: {dat.print_t_bracket}%
        </Acalc>
      </View>
      <View style={styles.row}>
        <Description>(24) Effective Mortgage Payment</Description>
        <Acalc>
          <PdfCash v={dat.net_mopiti} /> See Note 4
        </Acalc>
      </View>
      <View style={styles.row}>
        <Description>(25) Future Value of Cash Investment</Description>
        <Acalc>
          <PdfCash v={dat.cash_value} /> Compounded at&nbsp;{dat.temp_return}%
          See Note 5
        </Acalc>
      </View>
      <View style={styles.row}>
        <Description>(26) Future Home Value</Description>
        <Acalc>
          <PdfCash v={dat.h_value} /> Compounded at {dat.temp_app}%
        </Acalc>
      </View>
      <View style={styles.row}>
        <Description>(27) Minus Mortgage Balance</Description>
        <Acalc>
          <PdfCash v={dat.ma_bal} />
        </Acalc>
      </View>
      <View style={styles.row}>
        <Description>(28) Equals Home Equity</Description>
        <Acalc>
          <PdfCash v={dat.net_equity} /> After {dat.report_years} years
        </Acalc>
      </View>
      <View style={styles.row}>
        <Description>(29) Net Gain/Loss</Description>
        <Acalc>
          <PdfCash v={dat.net_gain} /> In home Ownership See Note 6
        </Acalc>
      </View>
      <View style={styles.row}>
        <Description>(30) Dollar Gain on Cash into Real Estate</Description>
        <Acalc>
          <PdfCash v={dat.rate_return} /> Note 7
        </Acalc>
      </View>
      <View style={styles.row}>
        <Note>Please consult adviser for better understanding of report</Note>
      </View>
      <View style={styles.row}>
        <Note>Report based upon user inputs.</Note>
      </View>
      <View style={styles.row}>
        <Note></Note>
      </View>
      <View style={styles.row}>
        <Note>
          Note 1. FHA,VA and USDA Total Mortgage Amount Includes Upfront Funding
          Fee
        </Note>
      </View>
      <View style={styles.row}>
        <Note>
          Note 2. Total Mortgage Payments for Period Minus Tax Savings. This
          amount would
        </Note>
      </View>
      <View style={styles.row}>
        <Note>
          Represent what comparable rent payments would be for the property
        </Note>
      </View>
      <View style={styles.row}>
        <Note>
          Note 3. Estimated Amount of Interest Payments and Property Taxes for
          Report
        </Note>
      </View>
      <View style={styles.row}>
        <Note>
          Period. Does not include payments that reduced principal loan balance
        </Note>
      </View>
      <View style={styles.row}>
        <Note>
          Note 4. Mortgage Payment after tax savings have been applied.
        </Note>
      </View>
      <View style={styles.row}>
        <Note>
          Note 5. The value of cash (required to purchase) invested over report
        </Note>
      </View>
      <View style={styles.row}>
        <Note>
          Period at the compounded annual rate of return as entered by user
        </Note>
      </View>
      <View style={styles.row}>
        <Note>
          Note 6. The difference between Equity and Non RE investment #28-#25
          (note 5)
        </Note>
      </View>
      <View style={styles.row}>
        <Note>
          Note 7. Dollar Gain of Cash Invested into Real Estate #28-#16 (note 7)
        </Note>
      </View>
    </View>
  );
}

export default function PdfReportContainer({ dat, title }) {
  return (
    <Document>
      {dat.conventional && (
        <Page style={styles.body}>
          <Text style={styles.header} fixed>
            <Image style={styles.image} src={Logo} alt="images" />
          </Text>
          <ReportTitle title={title} />
          <ReportDetails dat={dat.conventional} />
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
        </Page>
      )}
      {dat.conventional && (
        <Page style={styles.body}>
          <Text style={styles.header} fixed>
            <Image style={styles.image} src={Logo} alt="images" />
          </Text>
          <ReportTitle title="Christee Report: Buy or Rent Closing" />
          <ReportClose dat={dat.conventionalV2} />
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
        </Page>
      )}
      {dat.fha && (
        <Page style={styles.body}>
          <Text style={styles.header} fixed>
            <Image style={styles.image} src={Logo} alt="images" />
          </Text>
          <ReportTitle title={title} />
          <ReportDetails dat={dat.fha} />
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
        </Page>
      )}
      {dat.fha && (
        <Page style={styles.body}>
          <Text style={styles.header} fixed>
            <Image style={styles.image} src={Logo} alt="images" />
          </Text>
          <ReportTitle title="Christee Report: Buy or Rent Closing" />
          <ReportClose dat={dat.fhaV2} />
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
        </Page>
      )}
      {dat.va && (
        <Page style={styles.body}>
          <Text style={styles.header} fixed>
            <Image style={styles.image} src={Logo} alt="images" />
          </Text>
          <ReportTitle title={title} />
          <ReportDetails dat={dat.va} />
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
        </Page>
      )}
      {dat.va && (
        <Page style={styles.body}>
          <Text style={styles.header} fixed>
            <Image style={styles.image} src={Logo} alt="images" />
          </Text>
          <ReportTitle title="Christee Report: Buy or Rent Closing" />
          <ReportClose dat={dat.vaV2} />
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
        </Page>
      )}
      {dat.usda && (
        <Page style={styles.body}>
          <Text style={styles.header} fixed>
            <Image style={styles.image} src={Logo} alt="images" />
          </Text>
          <ReportTitle title={title} />
          <ReportDetails dat={dat.usda} />
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
        </Page>
      )}
      {dat.usda && (
        <Page style={styles.body}>
          <Text style={styles.header} fixed>
            <Image style={styles.image} src={Logo} alt="images" />
          </Text>
          <ReportTitle title="Christee Report: Buy or Rent Closing" />
          <ReportClose dat={dat.usdaV2} />
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
        </Page>
      )}
    </Document>
  );
}
