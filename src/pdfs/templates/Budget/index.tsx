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
import { Document, Image, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import React, { Fragment } from 'react';
import { PdfCash, PdfPercent } from '../../atoms';
import logo from '../../assets/images/logo.png';
import { TBudgetPDF } from '../../types/api';
import Roboto from '../../assets/fonts/roboto/Roboto-Regular.ttf';
import RobotoBold from '../../assets/fonts/roboto/Roboto-Bold.ttf';

Font.register({
  family: 'Roboto',
  format: 'truetype',
  src: Roboto,
});

Font.register({
  family: 'RobotoBold',
  format: 'truetype',
  src: RobotoBold,
});

const headerStyles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 5,
  },
  reportTitle: {
    color: '#000000',
    fontSize: 12,
  },
});

interface TitleProps {
  title: string;
}

const ReportTitle: React.FC<TitleProps> = ({ title }) => (
  <View style={headerStyles.titleContainer}>
    <Text style={headerStyles.reportTitle}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  body: {
    fontFamily: 'Roboto',
    paddingTop: 10,
    paddingBottom: 25,
    paddingHorizontal: 30,
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 9,
    bottom: 15,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'black',
  },
  image: {
    width: 70,
    height: 20,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  textbold: {
    fontFamily: 'RobotoBold',
    fontWeight: 900,
    fontSize: 9,
  },
  description: {
    textAlign: 'left',
    width: '100%',
    fontSize: 9,
  },
  tableContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 16,
  },
});

/**
 * State Maryland:	Selected Area: Anne Arundel
 * Christee Monthly Budget Based upon purchase of $300000 home
 * State Selected Maryland		Area within State Anne Arundel
 * (A) Taxable Mo Income $7083.33	 (B) Tax Free Mo Income $166.67	 (C) Total Mo Income $7250.00
 * (D) User Entered LTV 0.8	 (E) Max Loan Set by User $225000	 (F) Credit Score 800
 */
function SectionHeader(pdf: TBudgetPDF) {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.row}>
        <Text style={styles.textbold}>
          State:&nbsp;{pdf.state_sel}&nbsp;Selected Area:&nbsp;
          {pdf.area}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          Christee Monthly Budget Based upon purchase of Based upon purchase of &nbsp;
          <PdfCash v={pdf.sp.toString()} />
          &nbsp;home.
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          State Selected:&nbsp;{pdf.state_sel}&nbsp;Area within State:&nbsp;
          {pdf.area}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          (A) Taxable Mo Income:&nbsp;
          <PdfCash v={pdf.q_income.toString()} />
          &nbsp;(B) Tax Free Mo Income:&nbsp;
          <PdfCash v={pdf.tfree_income.toString()} />
          &nbsp;(C) Total Mo Income:&nbsp;
          <PdfCash v={pdf.tot_monthy.toString()} />
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          {pdf.pdf_h4}&nbsp;{pdf.pdf_h5}
          &nbsp;(F) Credit Score:&nbsp;{pdf.inputcred}
        </Text>
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
function SectionOne(pdf: TBudgetPDF) {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.row}>
        <Text style={styles.textbold}>
          1. Mortgage Details:&nbsp;{pdf.dis_mtge}&nbsp;Loan Percent of Income:&nbsp;
          <PdfPercent v={pdf.cal_fr.toString()} />
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          Base Loan:&nbsp;
          <PdfCash v={pdf.ma.toString()} />
          &nbsp;
          <PdfPercent v={pdf.ltv.toString()} />
          &nbsp;LTV Total Loan:&nbsp;
          <PdfCash v={pdf.total_mtge.toString()} />
          &nbsp;Interest Rate:&nbsp;
          <PdfPercent v={pdf.temp_rate.toString()} />
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          Total Mortgage Payment:&nbsp;
          <PdfCash v={pdf.t_piti.toString()} />
          &nbsp;Principal &amp; Interest:&nbsp;
          <PdfCash v={pdf.temp_pi.toString()} />
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          Monthly Mortgage Insurance:&nbsp;
          <PdfCash v={pdf.temp_mi.toString()} />
          &nbsp;Monthly Property Taxes:&nbsp;
          <PdfCash v={pdf.temp_pt.toString()} />
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          Monthly Property Insurance:&nbsp;
          <PdfCash v={pdf.temp_ins.toString()} />
          &nbsp;Condo / HOA Fees:&nbsp;
          <PdfCash v={pdf.condo.toString()} />
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          Potential Monthly Fed Tax Savings:&nbsp;
          <PdfCash v={pdf.tax_saving.toString()} />
          &nbsp;Estimated Net Mortgage Payment:&nbsp;
          <PdfCash v={pdf.net_mort_pay.toString()} />
        </Text>
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
function SectionTwo(pdf: TBudgetPDF) {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.row}>
        <Text style={styles.textbold}>
          2. Federal &amp; State Income Taxes:&nbsp;
          <PdfCash v={pdf.total_taxes.toString()} />
          &nbsp;Effective Tax Rate:&nbsp;
          <PdfPercent v={pdf.ttax_per.toString()} />
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          Estimated Federal Taxes:&nbsp;
          <PdfCash v={pdf.mfed_taxes.toString()} />
          &nbsp;Tax Bracket:&nbsp;
          <PdfPercent v={pdf.print_t_bracket.toString()} />
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          Estimated Interest and Property Tax Deduction:&nbsp;
          <PdfCash v={pdf.tot_duct.toString()} />
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          Estimated Social Security:&nbsp;
          <PdfCash v={pdf.ss_with.toString()} />
          &nbsp;Rate:&nbsp;
          <PdfPercent v={pdf.ss_rate.toString()} />
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          Estimated Medicare Tax:&nbsp;
          <PdfCash v={pdf.med_with.toString()} />
          &nbsp;Rate:&nbsp;
          <PdfPercent v={pdf.med_rate.toString()} />
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          Estimated State Income Tax:&nbsp;
          <PdfCash v={pdf.mstate_tax.toString()} />
          &nbsp;Rate:&nbsp;
          <PdfPercent v={pdf.stax_rate.toString()} />
        </Text>
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
function SectionThree(pdf: TBudgetPDF) {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.row}>
        <Text style={styles.textbold}>
          3. Monthly Debt Obligations:&nbsp;
          <PdfCash v={pdf.total_debts.toString()} />
          &nbsp;Percent of Income:&nbsp;
          <PdfPercent v={pdf.tdebt_per.toString()} />
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          Alimony:&nbsp;
          <PdfCash v={pdf.alimony.toString()} />
          &nbsp; Cable / Wifi:&nbsp;
          <PdfCash v={pdf.cable.toString()} />
          &nbsp;Car Payments:&nbsp;
          <PdfCash v={pdf.car_pay.toString()} />
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          Cell Phone:&nbsp;
          <PdfCash v={pdf.c_phone.toString()} />
          &nbsp;Child Care:&nbsp;
          <PdfCash v={pdf.c_care.toString()} />
          &nbsp;Child Support:&nbsp;
          <PdfCash v={pdf.c_support.toString()} />
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          Credit Cards:&nbsp;
          <PdfCash v={pdf.c_cards.toString()} />
          &nbsp;Food:&nbsp;
          <PdfCash v={pdf.food.toString()} />
          &nbsp;{pdf.dis_food}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          Insurance Health:&nbsp;
          <PdfCash v={pdf.health_ins.toString()} />
          &nbsp;Insurance Auto:&nbsp;
          <PdfCash v={pdf.auto_ins.toString()} />
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          Pet Expenses:&nbsp;
          <PdfCash v={pdf.pets.toString()} />
          &nbsp;Retirement Fund Monthly:&nbsp;
          <PdfCash v={pdf.retire.toString()} />
          &nbsp;School Tuition:&nbsp;
          <PdfCash v={pdf.coll_debt.toString()} />
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          Utilities Monthly:&nbsp;
          <PdfCash v={pdf.utilities.toString()} />
          &nbsp;{pdf.dis_util}&nbsp;
          {pdf.otherd} <PdfCash v={pdf.other_amt.toString()} />
        </Text>
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
function SectionFour(pdf: TBudgetPDF) {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.row}>
        <Text style={styles.textbold}>4. Monthly Summary</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          Total Monthly Obligations:&nbsp;
          <PdfCash v={pdf.total_exp.toString()} />
          &nbsp;Percent of Income:&nbsp;
          <PdfPercent v={pdf.total_exp_per.toString()} />
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          Discretionary Monthly Cash:&nbsp;
          <PdfCash v={pdf.f_momey.toString()} />
          &nbsp;Percent Discretionary Cash:&nbsp;
          <PdfPercent v={pdf.f_money_per.toString()} />
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>{pdf.pdf_bottom}</Text>
      </View>
    </View>
  );
}

/**
 * Fragment that is sent to react-pdf.
 */
function ReportContainer(pdf: TBudgetPDF) {
  return (
    <Fragment>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>
          <Image style={styles.image} src={logo} />
        </Text>
        <ReportTitle title="Christee Report: Budget" />
        <SectionHeader {...pdf} />
        <SectionOne {...pdf} />
        <SectionTwo {...pdf} />
        <SectionThree {...pdf} />
        <SectionFour {...pdf} />
        <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
      </Page>
    </Fragment>
  );
}

/**
 * This is the exported function it takes the dat and
 * title from pdf.button.
 */

interface Props {
  pdf: TBudgetPDF;
}

const PdfReport: React.FC<Props> = ({ pdf }) => {
  return (
    <Document>
      <ReportContainer {...pdf} />
    </Document>
  );
};
export default PdfReport;
