/*
 * Copyright 2020-2021 AskChristee, LLC. All rights reserved.
 */

import React, { Fragment } from 'react';
import { Document, Text, View, StyleSheet, Image, Page } from '@react-pdf/renderer';
import { PdfCash } from '../../atoms';
import { THecmAClose, THecmANotes, THecmCalc } from '../../types/api';
import ReportTitle from '../../atoms/Pdf/ReportTitle';
import PdfMessageReport from './HecmMessage';
import PdfMessageReportCash from './HecmMessageCash';
import logo from '../../assets/images/logo.png';
import ReportClose from './HecmClosing';

const styles = StyleSheet.create({
  body: {
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
  description: {
    textAlign: 'left',
    width: '50%',
    fontSize: 9,
  },
  tableContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 15,
  },
  row: {
    flexDirection: 'row',
    height: 16,
  },
  acalc: {
    width: '30%',
    fontSize: 9,
    textAlign: 'left',
  },
});

interface Props {
  aCalc: THecmCalc;
  bCalc: THecmCalc;
  aClose: THecmAClose;
  aNotes: THecmANotes;
  bNotes: THecmANotes;
  title: string | undefined;
}

const HecmPdfReport: React.FC<Props> = ({ aCalc, bCalc }) => {
  console.log('HECM->PDFHelper->aCalc:', aCalc);
  console.log('HECM->PDFHelper->bCalc:', bCalc);

  return (
    <View style={styles.tableContainer}>
      <View style={styles.row}>
        <Text style={styles.description}>State</Text>
        {aCalc && <Text style={styles.acalc}>{aCalc.state_sel}</Text>}
        {bCalc && <Text style={styles.acalc}>{bCalc.state_sel}</Text>}
      </View>
      <View style={styles.row}>
        <Text style={styles.description}></Text>
        {aCalc && <Text style={styles.acalc}>{aCalc.report_type}</Text>}
        {bCalc && <Text style={styles.acalc}>{bCalc.report_type}</Text>}
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>Report Type</Text>
        {aCalc && <Text style={styles.acalc}>{aCalc.fumess}</Text>}
        {bCalc && <Text style={styles.acalc}>{bCalc.fumess}</Text>}
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>Selected Area</Text>
        {aCalc && <Text style={styles.acalc}>{aCalc.area}</Text>}
        {bCalc && <Text style={styles.acalc}>{bCalc.area}</Text>}
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>Interest Rate Entered</Text>
        {aCalc && <Text style={styles.acalc}>{aCalc.temp_rate}%</Text>}
        {bCalc && <Text style={styles.acalc}>{bCalc.temp_rate}%</Text>}
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>Interest Rate Used (Note 1)</Text>
        {aCalc && <Text style={styles.acalc}>{aCalc.ex_rate}%</Text>}
        {bCalc && <Text style={styles.acalc}>{aCalc.ex_rate}%</Text>}
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>Interest Rate with MIP (Note 2)</Text>
        {aCalc && <Text style={styles.acalc}>{aCalc.act_rate}%</Text>}
        {bCalc && <Text style={styles.acalc}>{bCalc.act_rate}%</Text>}
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>Age of Youngest Borrower (Note 3)</Text>
        {aCalc && <Text style={styles.acalc}>{aCalc.age}</Text>}
        {bCalc && <Text style={styles.acalc}>{bCalc.age}</Text>}
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>Maximum Claim Amount (Note 4)</Text>
        {aCalc && (
          <Text style={styles.acalc}>
            <PdfCash v={aCalc.max_claim} />
          </Text>
        )}
        {bCalc && (
          <Text style={styles.acalc}>
            <PdfCash v={bCalc.max_claim} />
          </Text>
        )}
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>Purchase Price (Note 5)</Text>
        {aCalc && (
          <Text style={styles.acalc}>
            <PdfCash v={aCalc.sp} />
          </Text>
        )}
        {bCalc && (
          <Text style={styles.acalc}>
            <PdfCash v={bCalc.sp} />
          </Text>
        )}
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>Base Loan Amount (Note 6)</Text>
        {aCalc && (
          <Text style={styles.acalc}>
            <PdfCash v={aCalc.ma} />
          </Text>
        )}
        {bCalc && (
          <Text style={styles.acalc}>
            <PdfCash v={bCalc.ma} />
          </Text>
        )}
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>Loan To Value (Note 7)</Text>
        {aCalc && <Text style={styles.acalc}>{aCalc.ltv}%</Text>}
        {bCalc && <Text style={styles.acalc}>{bCalc.ltv}%</Text>}
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>Principal Lending Factor (Note 8)</Text>
        {aCalc && <Text style={styles.acalc}>{aCalc.plf_factor}</Text>}
        {bCalc && <Text style={styles.acalc}>{bCalc.plf_factor}</Text>}
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>Total Loan Amount (Note 9)</Text>
        {aCalc && (
          <Text style={styles.acalc}>
            <PdfCash v={aCalc.total_mtge} />
          </Text>
        )}
        {bCalc && (
          <Text style={styles.acalc}>
            <PdfCash v={bCalc.total_mtge} />
          </Text>
        )}
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>Down Payment</Text>
        {aCalc && (
          <Text style={styles.acalc}>
            <PdfCash v={aCalc.d_payment} />
          </Text>
        )}
        {bCalc && (
          <Text style={styles.acalc}>
            <PdfCash v={bCalc.d_payment} />
          </Text>
        )}
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>Estimated Closing Cost (Note 10)</Text>
        {aCalc && (
          <Text style={styles.acalc}>
            <PdfCash v={aCalc.totalcc} />
          </Text>
        )}
        {bCalc && (
          <Text style={styles.acalc}>
            <PdfCash v={bCalc.totalcc} />
          </Text>
        )}
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>Required Cash (Note 11)</Text>
        {aCalc && (
          <Text style={styles.acalc}>
            <PdfCash v={aCalc.r_cash} />
          </Text>
        )}
        {bCalc && (
          <Text style={styles.acalc}>
            <PdfCash v={bCalc.r_cash} />
          </Text>
        )}
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>Cash Available</Text>
        {aCalc && (
          <Text style={styles.acalc}>
            <PdfCash v={aCalc.t_cash} />
          </Text>
        )}
        {bCalc && (
          <Text style={styles.acalc}>
            <PdfCash v={bCalc.t_cash} />
          </Text>
        )}
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>Additional Cash Required</Text>
        {aCalc && (
          <Text style={styles.acalc}>
            <PdfCash v={aCalc.ex_cash} />
          </Text>
        )}
        {bCalc && (
          <Text style={styles.acalc}>
            <PdfCash v={bCalc.ex_cash} />
          </Text>
        )}
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>Additional Property Taxes (Note 11)</Text>
        {aCalc && (
          <Text style={styles.acalc}>
            <PdfCash v={aCalc.temp_pt} />
          </Text>
        )}
        {bCalc && (
          <Text style={styles.acalc}>
            <PdfCash v={bCalc.temp_pt} />
          </Text>
        )}
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>Annual Property Insurance</Text>
        {aCalc && (
          <Text style={styles.acalc}>
            <PdfCash v={aCalc.temp_ins} />
          </Text>
        )}
        {bCalc && (
          <Text style={styles.acalc}>
            <PdfCash v={bCalc.temp_ins} />
          </Text>
        )}
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>Estimated HECM Balance (Note 12)</Text>
        {aCalc && (
          <Text style={styles.acalc}>
            <PdfCash v={aCalc.hecm_bal} />
          </Text>
        )}
        {bCalc && (
          <Text style={styles.acalc}>
            <PdfCash v={bCalc.hecm_bal} />
          </Text>
        )}
      </View>
    </View>
  );
};

const ContainerFinal: React.FC<Props> = ({ aCalc, bCalc, aClose, aNotes, bNotes, title }) => {
  return (
    <Fragment>
      {bCalc && (
        <Fragment>
          <Page style={styles.body}>
            <Text style={styles.header} fixed>
              <Image style={styles.image} src={logo} />
            </Text>
            <ReportTitle title={title} />
            <HecmPdfReport {...{ aCalc, bCalc, aClose, aNotes, bNotes }} title="" />
            <PdfMessageReport aNotes={aNotes} />
            <PdfMessageReportCash bNotes={bNotes} />
            <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
          </Page>
          <Page style={styles.body}>
            <Text style={styles.header} fixed>
              <Image style={styles.image} src={logo} />
            </Text>
            <ReportTitle title="Closing Costs" />
            <ReportClose aClose={aClose} />
            <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
          </Page>
        </Fragment>
      )}
      {!bCalc && (
        <Fragment>
          <Page style={styles.body}>
            <Text style={styles.header} fixed>
              <Image style={styles.image} src={logo} />
            </Text>
            <ReportTitle title={title} />
            <HecmPdfReport {...{ aCalc, bCalc, aClose, aNotes, bNotes }} title="" />
            <PdfMessageReport aNotes={aNotes} />
            <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
          </Page>
          <Page style={styles.body}>
            <Text style={styles.header} fixed>
              <Image style={styles.image} src={logo} />
            </Text>
            <ReportTitle title="Closing Costs" />
            <ReportClose aClose={aClose} />
            <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
          </Page>
        </Fragment>
      )}
    </Fragment>
  );
};

const PdfReportContainer: React.FC<Props> = ({ aCalc, bCalc, aClose, aNotes, bNotes, title }) => {
  return (
    <Document>
      <ContainerFinal {...{ aCalc, bCalc, aClose, aNotes, bNotes }} title={title} />
    </Document>
  );
};

export default PdfReportContainer;
