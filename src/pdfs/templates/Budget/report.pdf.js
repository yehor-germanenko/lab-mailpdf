/**
 * Budget Report Sections are included here as functions.  This
 * prevents repeated calls for the same import statements and
 * reduces the number of files in the directory.
 *
 * * IMPORTANT: All functions that return data, such as <PdfCash> and
 * * <PdfPercent> must have &nbsp; prior to and after, since
 * * &nbsp; fails to print a space whenreturned from
 * * atoms/CommonFormats.
 *
 */
import { Document, Image, Page, Text, View } from "@react-pdf/renderer";
import React, { Fragment } from "react";
import { PdfCash, PdfPercent } from "../../Helpers/CommonFormats";
import ReportTitle from "../../Helpers/pdf.title";
import {
  Description,
  StylesFromAtoms,
  StylesFromAtomsTable,
  TextBold,
} from "../../Helpers/Styles";
import Logo from "../../Helpers/logo.png";

// styles used in the details sections
const styles = StylesFromAtomsTable;

// styles used as part of the pdf layout
const pageStyles = StylesFromAtoms;

/**
 * State Maryland:	Selected Area: Anne Arundel
 * Christee Monthly Budget Based upon purchase of $300000 home
 * State Selected Maryland		Area within State Anne Arundel
 * (A) Taxable Mo Income $7083.33	 (B) Tax Free Mo Income $166.67	 (C) Total Mo Income $7250.00
 * (D) User Entered LTV 0.8	 (E) Max Loan Set by User $225000	 (F) Credit Score 800
 */
function SectionHeader({ dat }) {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.row}>
        <TextBold>
          State:&nbsp;{dat.pdf.state_sel}&nbsp;Selected Area:&nbsp;
          {dat.pdf.area}
        </TextBold>
      </View>
      <View style={styles.row}>
        <Description>
          Christee Monthly Budget Based upon purchase of Based upon purchase of
          &nbsp;
          <PdfCash v={dat.pdf.sp} />
          &nbsp;home.
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          State Selected:&nbsp;{dat.pdf.state_sel}&nbsp;Area within State:&nbsp;
          {dat.pdf.area}
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          (A) Taxable Mo Income:&nbsp;
          <PdfCash v={dat.pdf.q_income} />
          &nbsp;(B) Tax Free Mo Income:&nbsp;
          <PdfCash v={dat.pdf.tfree_income} />
          &nbsp;(C) Total Mo Income:&nbsp;
          <PdfCash v={dat.pdf.tot_monthy} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          {dat.pdf.pdf_h4}&nbsp;{dat.pdf.pdf_h5}
          &nbsp;(F) Credit Score:&nbsp;{dat.pdf.inputcred}
        </Description>
      </View>
    </View>
  );
}

/**
 * 1. Mortgage Details Conventional Loan	 Percent of Income 18.87%
 * Base Loan $225000 75.00% LTV	Total Loan $225000	Interest Rate: 2.75%
 * Total Mortgage Payment $1368.04		Principal & Interest $918.54
 * Monthly Mortgage Insurance $0	Monthly Property Taxes $248.25
 * Monthly Property Insurance $101.25	Condo / HOA Fees 100
 * Potential Monthly Fed Tax Savings $166.92	Estimated Net Mortgage Payment $1201.12
 */
function SectionOne({ dat }) {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.row}>
        <TextBold>
          1. Mortgage Details:&nbsp;{dat.pdf.dis_mtge}&nbsp;Loan Percent of
          Income:&nbsp;
          <PdfPercent v={dat.pdf.cal_fr} />
        </TextBold>
      </View>
      <View style={styles.row}>
        <Description>
          Base Loan:&nbsp;
          <PdfCash v={dat.pdf.ma} />
          &nbsp;
          <PdfPercent v={dat.pdf.ltv} />
          &nbsp;LTV Total Loan:&nbsp;
          <PdfCash v={dat.pdf.total_mtge} />
          &nbsp;Interest Rate:&nbsp;
          <PdfPercent v={dat.pdf.temp_rate} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          Total Mortgage Payment:&nbsp;
          <PdfCash v={dat.pdf.t_piti} />
          &nbsp;Principal &amp; Interest:&nbsp;
          <PdfCash v={dat.pdf.temp_pi} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          Monthly Mortgage Insurance:&nbsp;
          <PdfCash v={dat.pdf.temp_mi} />
          &nbsp;Monthly Property Taxes:&nbsp;
          <PdfCash v={dat.pdf.temp_pt} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          Monthly Property Insurance:&nbsp;
          <PdfCash v={dat.pdf.temp_ins} />
          &nbsp;Condo / HOA Fees:&nbsp;
          <PdfCash v={dat.pdf.condo} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          Potential Monthly Fed Tax Savings:&nbsp;
          <PdfCash v={dat.pdf.tax_saving} />
          &nbsp;Estimated Net Mortgage Payment:&nbsp;
          <PdfCash v={dat.pdf.net_mort_pay} />
        </Description>
      </View>
    </View>
  );
}

/**
 * 2. Federal & State Income Taxes $2257.04	Effective Tax Rate 31.00%
 * Estimated Federal Taxes $1391.4 Tax Bracket 22%
 * Estimated Interest and Property Tax Deduction $9105
 * Estimated Social Security $439.16 Rate 6.20%
 * Estimated Medicare Tax $102.7 Rate 1.45%
 * Estimated State Income Tax $323.79	Rate 4.75%
 */
function SectionTwo({ dat }) {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.row}>
        <TextBold>
          2. Federal &amp; State Income Taxes:&nbsp;
          <PdfCash v={dat.pdf.total_taxes} />
          &nbsp;Effective Tax Rate:&nbsp;
          <PdfPercent v={dat.pdf.ttax_per} />
        </TextBold>
      </View>
      <View style={styles.row}>
        <Description>
          Estimated Federal Taxes:&nbsp;
          <PdfCash v={dat.pdf.mfed_taxes} />
          &nbsp;Tax Bracket:&nbsp;
          <PdfPercent v={dat.pdf.print_t_bracket} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          Estimated Interest and Property Tax Deduction:&nbsp;
          <PdfCash v={dat.pdf.tot_duct} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          Estimated Social Security:&nbsp;
          <PdfCash v={dat.pdf.ss_with} />
          &nbsp;Rate:&nbsp;
          <PdfPercent v={dat.pdf.ss_rate} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          Estimated Medicare Tax:&nbsp;
          <PdfCash v={dat.pdf.med_with} />
          &nbsp;Rate:&nbsp;
          <PdfPercent v={dat.pdf.med_rate} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          Estimated State Income Tax:&nbsp;
          <PdfCash v={dat.pdf.mstate_tax} />
          &nbsp;Rate:&nbsp;
          <PdfPercent v={dat.pdf.stax_rate} />
        </Description>
      </View>
    </View>
  );
}

/**
 * 3. Monthly Debt Obligations $3108	 Percent of Income 42.86%
 * Alimony $200	Cable / Wifi $90	Car Payments $415
 * Cell Phone $60	Child Care $50	Child Support $100
 * Credit Cards $100	Food $900 Actual
 * Insurance Health $200	Insurance Auto $100
 * Pet Expenses $50	Retirement Fund Monthly $300	School Tuition $75
 * Utilities Monthly $250 Actual	Sample $100
 */
function SectionThree({ dat }) {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.row}>
        <TextBold>
          3. Monthly Debt Obligations:&nbsp;
          <PdfCash v={dat.pdf.total_debts} />
          &nbsp;Percent of Income:&nbsp;
          <PdfPercent v={dat.pdf.tdebt_per} />
        </TextBold>
      </View>
      <View style={styles.row}>
        <Description>
          Alimony:&nbsp;
          <PdfCash v={dat.pdf.alimony} />
          &nbsp; Cable / Wifi:&nbsp;
          <PdfCash v={dat.pdf.cable} />
          &nbsp;Car Payments:&nbsp;
          <PdfCash v={dat.pdf.car_pay} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          Cell Phone:&nbsp;
          <PdfCash v={dat.pdf.c_phone} />
          &nbsp;Child Care:&nbsp;
          <PdfCash v={dat.pdf.c_care} />
          &nbsp;Child Support:&nbsp;
          <PdfCash v={dat.pdf.c_support} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          Credit Cards:&nbsp;
          <PdfCash v={dat.pdf.c_cards} />
          &nbsp;Food:&nbsp;
          <PdfCash v={dat.pdf.food} />
          &nbsp;{dat.pdf.dis_food}
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          Insurance Health:&nbsp;
          <PdfCash v={dat.pdf.health_ins} />
          &nbsp;Insurance Auto:&nbsp;
          <PdfCash v={dat.pdf.auto_ins} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          Pet Expenses:&nbsp;
          <PdfCash v={dat.pdf.pets} />
          &nbsp;Retirement Fund Monthly:&nbsp;
          <PdfCash v={dat.pdf.retire} />
          &nbsp;School Tuition:&nbsp;
          <PdfCash v={dat.pdf.coll_debt} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          Utilities Monthly:&nbsp;
          <PdfCash v={dat.pdf.utilities} />
          &nbsp;{dat.pdf.dis_util}&nbsp;
          {dat.pdf.otherd} <PdfCash v={dat.pdf.other_amt} />
        </Description>
      </View>
    </View>
  );
}

/**
 * 4. Monthly Summary
 * Total Monthly Obligations $6733.09	Percent of Income 92.87%
 * Discretionary Monthly Cash $516.9	Percent Discretionary Cash 7.13%
 * The information contained herein though believed accurate is not guaranteed. This is not a pre-approval
 */
function SectionFour({ dat }) {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.row}>
        <TextBold>4. Monthly Summary</TextBold>
      </View>
      <View style={styles.row}>
        <Description>
          Total Monthly Obligations:&nbsp;
          <PdfCash v={dat.pdf.total_exp} />
          &nbsp;Percent of Income:&nbsp;
          <PdfPercent v={dat.pdf.total_exp_per} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>
          Discretionary Monthly Cash:&nbsp;
          <PdfCash v={dat.pdf.f_momey} />
          &nbsp;Percent Discretionary Cash:&nbsp;
          <PdfPercent v={dat.pdf.f_money_per} />
        </Description>
      </View>
      <View style={styles.row}>
        <Description>{dat.pdf.pdf_bottom}</Description>
      </View>
    </View>
  );
}

/**
 * Fragment that is sent to react-pdf.
 */
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
