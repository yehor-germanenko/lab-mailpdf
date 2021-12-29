/*
 * Copyright 2020-2021 AskChristee, LLC. All rights reserved.
 */

import { Document, View } from '@react-pdf/renderer';
import React, { Fragment } from 'react';
import { Page, Text, Image, StyleSheet } from '@react-pdf/renderer';
import ReportTitle from '../../atoms/Pdf/ReportTitle';
import { PdfCash } from '../../atoms';
import logo from '../../assets/images/logo.png';
import ReportClose from '../ClosingAcalc';
import { TBuyWaitResults } from '../../types/api';

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
    width: '50%',
    fontSize: 9,
  },
  description2: {
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
  acalc: {
    width: '30%',
    fontSize: 9,
    textAlign: 'left',
  },
});

const PdfReport: React.FC<Result> = ({ results }) => {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.row}>
        <Text style={styles.description}></Text>
        {results.aNotes && <Text style={styles.acalc}>{results.aNotes.report_type}</Text>}
        {results.aNotes && <Text style={styles.acalc}>{results.aNotes.report_type_2}</Text>}
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>State</Text>
        {results.aNotes && <Text style={styles.acalc}>{results.aNotes.state_sel}</Text>}
        {results.aNotes && <Text style={styles.acalc}>{results.aNotes.state_select_2}</Text>}
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>Selected Area</Text>
        {results.aNotes && <Text style={styles.acalc}>{results.aNotes.area}</Text>}
        {results.aNotes && <Text style={styles.acalc}>{results.aNotes.area_2}</Text>}
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>Purchase Price (Note 1)</Text>
        {results.aNotes && (
          <Text style={styles.acalc}>
            <PdfCash v={results.aNotes.sp} />
          </Text>
        )}
        {results.aNotes && (
          <Text style={styles.acalc}>
            <PdfCash v={results.aNotes.sp_2} />
          </Text>
        )}
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>Base Loan Amount (Note 2)</Text>
        {results.aNotes && (
          <Text style={styles.acalc}>
            <PdfCash v={results.aNotes.ma} /> {results.aNotes.ltv}%
          </Text>
        )}
        {results.aNotes && (
          <Text style={styles.acalc}>
            <PdfCash v={results.aNotes.ma_2} /> {results.aNotes.ltv_2}%
          </Text>
        )}
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>Total Loan Amount</Text>
        {results.aNotes && (
          <Text style={styles.acalc}>
            <PdfCash v={results.aNotes.total_mtge} />
          </Text>
        )}
        {results.aNotes && (
          <Text style={styles.acalc}>
            <PdfCash v={results.aNotes.total_mtge_2} />
          </Text>
        )}
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>Down payment</Text>
        {results.aNotes && (
          <Text style={styles.acalc}>
            <PdfCash v={results.aNotes.d_payment} />
          </Text>
        )}
        {results.aNotes && (
          <Text style={styles.acalc}>
            <PdfCash v={results.aNotes.d_payment_2} />
          </Text>
        )}
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>Total Closing Cost</Text>
        {results.aNotes && (
          <Text style={styles.acalc}>
            <PdfCash v={results.aNotes.totalcc} />
          </Text>
        )}
        {results.aNotes && (
          <Text style={styles.acalc}>
            <PdfCash v={results.aNotes.totalcc_2} />
          </Text>
        )}
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>Seller Paid Cost (Note 6)</Text>
        {results.aNotes && (
          <Text style={styles.acalc}>
            <PdfCash v={results.aNotes.dol_cred} /> {results.aNotes.temp_cred}%
          </Text>
        )}
        {results.aNotes && (
          <Text style={styles.acalc}>
            <PdfCash v={results.aNotes.dol_cred_2} /> {results.aNotes.temp_cred_2}%
          </Text>
        )}
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>Required Cash (Note 4)</Text>
        {results.aNotes && (
          <Text style={styles.acalc}>
            <PdfCash v={results.aNotes.r_cash} />
          </Text>
        )}
        {results.aNotes && (
          <Text style={styles.acalc}>
            <PdfCash v={results.aNotes.r_cash_2} />
          </Text>
        )}
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>Interest Rate (Note 7)</Text>
        {results.aNotes && <Text style={styles.acalc}>{results.aNotes.temp_rate}%</Text>}
        {results.aNotes && <Text style={styles.acalc}>{results.aNotes.temp_rate_2}%</Text>}
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>Total Monthly Payment (Note 3)</Text>
        {results.aNotes && (
          <Text style={styles.acalc}>
            <PdfCash v={results.aNotes.t_piti} />
          </Text>
        )}
        {results.aNotes && (
          <Text style={styles.acalc}>
            <PdfCash v={results.aNotes.t_piti_2} />
          </Text>
        )}
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>Principal &amp; Interest</Text>
        {results.aNotes && (
          <Text style={styles.acalc}>
            <PdfCash v={results.aNotes.temp_pi} />
          </Text>
        )}
        {results.aNotes && (
          <Text style={styles.acalc}>
            <PdfCash v={results.aNotes.temp_pi_2} />
          </Text>
        )}
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>Monthly Mortgage Insurance</Text>
        {results.aNotes && (
          <Text style={styles.acalc}>
            <PdfCash v={results.aNotes.temp_mi} />
          </Text>
        )}
        {results.aNotes && (
          <Text style={styles.acalc}>
            <PdfCash v={results.aNotes.temp_mi_2} />
          </Text>
        )}
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>Monthly Property Taxes</Text>
        {results.aNotes && (
          <Text style={styles.acalc}>
            <PdfCash v={results.aNotes.temp_pt} />
          </Text>
        )}
        {results.aNotes && (
          <Text style={styles.acalc}>
            <PdfCash v={results.aNotes.temp_pt_2} />
          </Text>
        )}
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>Monthly Property Insurance</Text>
        {results.aNotes && (
          <Text style={styles.acalc}>
            <PdfCash v={results.aNotes.temp_ins} />
          </Text>
        )}
        {results.aNotes && (
          <Text style={styles.acalc}>
            <PdfCash v={results.aNotes.temp_ins_2} />
          </Text>
        )}
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>Monthly Condo/HOA Fee</Text>
        {results.aNotes && (
          <Text style={styles.acalc}>
            <PdfCash v={results.aNotes.condo} />
          </Text>
        )}
        {results.aNotes && (
          <Text style={styles.acalc}>
            <PdfCash v={results.aNotes.condo_2} />
          </Text>
        )}
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>Estimated Annual Tax Deduction (Note 9)</Text>
        {results.aNotes && (
          <Text style={styles.acalc}>
            <PdfCash v={results.aNotes.tot_duct} />
          </Text>
        )}
        {results.aNotes && (
          <Text style={styles.acalc}>
            <PdfCash v={results.aNotes.tot_duct_2} />
          </Text>
        )}
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>Federal Tax Bracket (Note 10)</Text>
        {results.aNotes && <Text style={styles.acalc}>{results.aNotes.print_t_bracket}%</Text>}
        {results.aNotes && <Text style={styles.acalc}>{results.aNotes.print_t_bracket}%</Text>}
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>Monthly Federal Tax Savings</Text>
        {results.aNotes && (
          <Text style={styles.acalc}>
            <PdfCash v={results.aNotes.tax_saving} />
          </Text>
        )}
        {results.aNotes && (
          <Text style={styles.acalc}>
            <PdfCash v={results.aNotes.tax_saving_2} />
          </Text>
        )}
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>Net Monthly Mortgage Payment (Note 11)</Text>
        {results.aNotes && (
          <Text style={styles.acalc}>
            <PdfCash v={results.aNotes.net_mort_pay} />
          </Text>
        )}
        {results.aNotes && (
          <Text style={styles.acalc}>
            <PdfCash v={results.aNotes.net_mort_pay_2} />
          </Text>
        )}
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>Front Ratio</Text>
        {results.aNotes && <Text style={styles.acalc}>{results.aNotes.cal_fr}%</Text>}
        {results.aNotes && <Text style={styles.acalc}>{results.aNotes.cal_fr_2}%</Text>}
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>Back Ratio</Text>
        {results.aNotes && <Text style={styles.acalc}>{results.aNotes.cal_br}%</Text>}
        {results.aNotes && <Text style={styles.acalc}>{results.aNotes.cal_br_2}%</Text>}
      </View>
    </View>
  );
};

const PdfReportMessage: React.FC<Result> = ({ results }) => {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.row}>{results.aNotes && <Text style={styles.description2}>{results.aNotes.pdfmess}</Text>}</View>
      <View style={styles.row}>{results.aNotes && <Text style={styles.description2}>{results.aNotes.pdf_head1}</Text>}</View>
      <View style={styles.row}>{results.aNotes && <Text style={styles.description2}>{results.aNotes.pdf_head2}</Text>}</View>
      <View style={styles.row}>
        {results.aNotes && (
          <Text style={styles.description2}>
            {results.aNotes.pdfmess1} {results.aNotes.pdfmess2}
          </Text>
        )}
      </View>
      <View style={styles.row}>
        {results.aNotes && (
          <Text style={styles.description2}>
            {results.aNotes.pdfmess3} {results.aNotes.pdfmess4}
          </Text>
        )}
      </View>
      <View style={styles.row}>
        {results.aNotes && (
          <Text style={styles.description2}>
            {results.aNotes.pdfmess5} {results.aNotes.pdfmess6}
          </Text>
        )}
      </View>
      <View style={styles.row}>
        {results.aNotes && (
          <Text style={styles.description2}>
            {results.aNotes.pdfmess7} {results.aNotes.pdfmess8}
          </Text>
        )}
      </View>
      <View style={styles.row}>
        {results.aNotes && (
          <Text style={styles.description2}>
            {results.aNotes.pdfmess9} {results.aNotes.pdfmess10}
          </Text>
        )}
      </View>
      <View style={styles.row}>
        {results.aNotes && (
          <Text style={styles.description2}>
            {results.aNotes.pdfmess11} {results.aNotes.pdfmess12}
          </Text>
        )}
      </View>
      <View style={styles.row}>{results.aNotes && <Text style={styles.description2}>{results.aNotes.pdf_mess14}</Text>}</View>
      <View style={styles.row}>{results.aNotes && <Text style={styles.description2}>{results.aNotes.pdf_mess15}</Text>}</View>
    </View>
  );
};

const BuyWaitPdf: React.FC<Result> = ({ results }) => {
  return (
    <Fragment>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>
          <Image style={styles.image} src={logo} />
        </Text>
        <ReportTitle title="Christee Buy or Wait" />
        <PdfReport results={results} />
        <PdfReportMessage results={results} />
        <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
      </Page>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>
          <Image style={styles.image} src={logo} />
        </Text>
        <ReportTitle title="Christee Buy or Wait Closing Costs" />
        <ReportClose dat={results} />
        <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
      </Page>
    </Fragment>
  );
};

interface Result {
    results: TBuyWaitResults;
}

interface Props {
    dat: Result
}

const BuyWaitFinal: React.FC<Props> = ({dat: {results}}) => {
  return (
    <Document>
      <BuyWaitPdf results={results} />
    </Document>
  );
};

export default BuyWaitFinal;
