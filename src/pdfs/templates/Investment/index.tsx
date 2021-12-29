/*
 * Copyright 2020-2021 AskChristee, LLC. All rights reserved.
 */

import { Document, Image, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import React, { Fragment } from "react";
import {
	PdfCash,
	PdfCashPrompt,
	PdfCashPromptWithPercent,
	PdfPercentPrompt,
	PdfPromptCashPercentParens
} from '../../atoms';
import logo from '../../assets/images/logo.png';
import ReportClose from "../ClosingAcalc";
import { TInvestmentAClose, TInvestmentPDF } from "../../types/api";


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
		fontFamily: "Roboto",
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
		width: "100%",
		fontSize: 9
	},
	tableContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		marginTop: 10,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		height: 16,
	},
});


function SectionHeader(pdf: TInvestmentPDF) {
	return (
		<View style={styles.tableContainer}>
			<View style={styles.row}>
				<Text style={styles.textbold}>Christee Investment Analysis.</Text>
				<Text style={styles.description} >
					&nbsp;State:&nbsp;{pdf.state_sel}
					&nbsp;Selected Area:&nbsp;{pdf.area}
				</Text>
			</View>
			<View style={styles.row}>
				<Text style={styles.description} >{pdf.pdf_head1}</Text>
			</View>
			<View style={styles.row}>
				<Text style={styles.description} >{pdf.pdf_head2}</Text>
			</View>
		</View>
	);
}

function SectionOne(pdf: TInvestmentPDF) {
	return (
		<View style={styles.tableContainer}>
			<View style={styles.row}>
				<Text style={styles.textbold}>1. Purchase Details&nbsp;</Text>
				<Text style={styles.description} >
					<PdfCashPrompt v={pdf.sp} prompt="Price" />
					<PdfCashPrompt v={pdf.d_payment} prompt="Down payment" />
					<PdfCashPrompt v={pdf.totalcc} prompt="Closing Cost" />
				</Text>
			</View>
			<View style={styles.row}>
				<Text style={styles.description} >
					<PdfCashPromptWithPercent
						prompt="Closing Credit"
						v={pdf.dol_cred}
						p={pdf.temp_cred}
					/>
					<PdfCashPrompt prompt="Cash Investment" v={pdf.r_cash} />
					<PdfCashPrompt prompt="Acquisition Cost" v={pdf.acq_cost} />
				</Text>
			</View>
		</View>
	);
}

function SectionTwo(pdf: TInvestmentPDF) {
	return (
		<View style={styles.tableContainer}>
			<View style={styles.row}>
				<Text style={styles.textbold}>2. Mortgage Details&nbsp;</Text>
				<Text style={styles.description} >{pdf.pdfmess2}</Text>
			</View>
			<View style={styles.row}>
				<Text style={styles.description} >
					<PdfCashPrompt prompt="Monthly Payment" v={pdf.t_piti} />
					<PdfCashPrompt prompt="Prin. &amp; Int" v={pdf.temp_pi} />
					<PdfCashPrompt prompt="Mortgage Ins" v={pdf.temp_mi} />
					<PdfCashPrompt prompt="Property Taxes" v={pdf.temp_pt} />
				</Text>
			</View>
			<View style={styles.row}>
				<Text style={styles.description} >
					<PdfCashPrompt prompt="Property Ins" v={pdf.temp_ins} />
					<PdfCashPrompt prompt="Condo/HOA Fees" v={pdf.condo} />
					<PdfCashPrompt prompt="Debt Service" v={pdf.debt_ser} />
					(Annual Mortgage Payment)
				</Text>
			</View>
		</View>
	);
}

function SectionThree(pdf: TInvestmentPDF) {
	return (
		<View style={styles.tableContainer}>
			<View style={styles.row}>
				<Text style={styles.textbold}>3. Annual Income Analysis&nbsp;</Text>
				<Text style={styles.description} >
					<PdfCashPrompt prompt="Average Annual Rents" v={pdf.avg_rent} />
					<PdfPercentPrompt prompt="Rent Increase" v={pdf.rent_increase} />
					for&nbsp;{pdf.report_years}&nbsp;years
				</Text>
			</View>
			<View style={styles.row}>
				<Text style={styles.description} >
					<PdfCashPrompt
						prompt="Annual Vacancy Allowance"
						v={pdf.vacancy}
					/>
					({pdf.vac_allow}%)&nbsp;
					<PdfCashPrompt prompt="Management Fee" v={pdf.mgt_fee} />(
					{pdf.prop_mgt}%)&nbsp;
					<PdfCashPrompt prompt="Maintenance" v={pdf.main_amt} />
				</Text>
			</View>
			<View style={styles.row}>
				<Text style={styles.description} >
					<PdfCashPrompt prompt="Annual Net Operating Income" v={pdf.noi} />
					<PdfCashPrompt prompt="Annual Debt Service" v={pdf.debt_ser} />
					&nbsp;
					{pdf.cash_flow_$}&nbsp;Cash Flow&nbsp;
					<PdfCash v={pdf.cash_flow} />
				</Text>
			</View>
			<View style={styles.row}>
				<Text style={styles.description} >
					Average&nbsp;{pdf.tax_sit}&nbsp;
					<PdfCash v={pdf.tot_duct} />
					&nbsp;
					{pdf.tax_due$}&nbsp;
					<PdfCash v={pdf.tax_saving} />
				</Text>
			</View>
		</View>
	);
}

function SectionFour(pdf: TInvestmentPDF) {
	return (
		<View style={styles.tableContainer}>
			<View style={styles.row}>
				<Text style={styles.textbold}>4. Projected Future Value&nbsp;</Text>
				<Text style={styles.description} >
					Report Period&nbsp;{pdf.report_years}&nbsp;Years. Appreciation
					Rate&nbsp;
					{pdf.prop_app}%&nbsp;Annually
				</Text>
			</View>
			<View style={styles.row}>
				<Text style={styles.description} >
					<PdfCashPrompt prompt="Home Value" v={pdf.h_value} />
					<PdfCashPrompt prompt="Mortgage Balance" v={pdf.ma_bal} />
					<PdfCashPrompt prompt="Equity" v={pdf.net_equity} />
					(Value Minus Loan Balance)
				</Text>
			</View>
			<View style={styles.row}>
				<Text style={styles.description} >
					<PdfCashPrompt prompt="Gross Profits" v={pdf.gross_profit} />
					<PdfCashPrompt prompt="Net Cash" v={pdf.net_equity} />
					{pdf.cash_$}&nbsp;
					{pdf.cash_imp}
				</Text>
			</View>
		</View>
	);
}

function SectionFive(pdf: TInvestmentPDF) {
	return (
		<View style={styles.tableContainer}>
			<View style={styles.row}>
				<Text style={styles.textbold}>5. Deprecation Details&nbsp;</Text>
				<Text style={styles.description} >
					<PdfCashPrompt
						prompt="Average Yearly Deprecation"
						v={pdf.avg_deprec}
					/>
					For Report Period
				</Text>
			</View>
			<View style={styles.row}>
				<Text style={styles.description} >
					<PdfCashPrompt
						prompt="Structural Deprecation basis"
						v={pdf.dep_base}
					/>
					<PdfCashPrompt
						prompt="Annual Straight-Line Deprecation"
						v={pdf.an_deprec}
					/>
					({pdf.st_depre} years)
				</Text>
			</View>
			<View style={styles.row}>
				<Text style={styles.description} >
					<PdfCashPrompt
						prompt="Non-Structural Deprecation Basis"
						v={pdf.cost_seg}
					/>
					<PdfCashPrompt
						prompt="Annual Non-Structural Deprecation"
						v={pdf.seg_dep}
					/>
					({pdf.cost_seg_period}&nbsp;years)
				</Text>
			</View>
		</View>
	);
}

function SectionSix(pdf: TInvestmentPDF) {
	return (
		<View style={styles.tableContainer}>
			<View style={styles.row}>
				<Text style={styles.textbold}>6. Potential Tax Overview&nbsp;</Text>
				<Text style={styles.description} >
					<PdfCashPrompt prompt="Capital Gains" v={pdf.capital_gain} />
					<PdfCashPrompt prompt="Net Profits" v={pdf.net_profits} />
				</Text>
			</View>
			<View style={styles.row}>
				<Text style={styles.description} >
					<PdfPromptCashPercentParens
						prompt="Capital Gains Taxes"
						v={pdf.fed_cap_tax}
						p={pdf.cap_gain_rate}
					/>
					<PdfPromptCashPercentParens
						prompt="State"
						v={pdf.state_cap_tax}
						p={pdf.st_caprate}
					/>
					<PdfPromptCashPercentParens
						prompt="NIIT tax of"
						v={pdf.niit_tax}
						p={pdf.niittax_rate}
					/>
				</Text>
			</View>
			<View style={styles.row}>
				<Text style={styles.description} >
					<PdfCashPrompt
						prompt="Recapture Tax Basis"
						v={pdf.total_deprec}
					/>
					<PdfPromptCashPercentParens
						prompt="Recapture Tax"
						v={pdf.recapture}
						p={pdf.recap_rate}
					/>
					<PdfPromptCashPercentParens
						prompt="Potential Taxes on Sales"
						v={pdf.total_taxes}
						p={pdf.total_tx_per}
					/>
				</Text>
			</View>
		</View>
	);
}

function SectionSeven(pdf: TInvestmentPDF) {
	return (
		<View style={styles.tableContainer}>
			<View style={styles.row}>
				<Text style={styles.textbold}>7. Ratios&nbsp;</Text>
				<Text style={styles.description} >
					<PdfPercentPrompt
						prompt="Return on Investment (ROI)"
						v={pdf.roi_return}
					/>
					<PdfPercentPrompt prompt="Cap Rate" v={pdf.capit_rate} />
					Debt Service Ratio&nbsp;{pdf.dscr}
				</Text>
			</View>
			<View style={styles.row}>
				<Text style={styles.description} >
					<PdfPercentPrompt
						prompt="Annual Return on Cash"
						v={pdf.cash_return}
					/>
					Gross Rent Multiplier&nbsp;{pdf.grm_factor}&nbsp;Return of
					Capital&nbsp;{pdf.return_invest}&nbsp;years
				</Text>
			</View>
		</View>
	);
}

function SectionFooter(pdf: TInvestmentPDF) {
	return (
		<View style={styles.tableContainer}>
			<View style={styles.row}></View>
			<View style={styles.row}>
				<Text style={styles.textbold}>
					<Text style={styles.description} >{pdf.pdf_bottom}</Text>
				</Text>
			</View>
		</View>
	);
}


const ReportContainer: React.FC<InvestPdf> = ({ pdf, aClose }) => {
	return (
		<Fragment>
			<Page style={styles.body}>
				<Text style={styles.header} fixed>
					<Image style={styles.image} src={logo} />
				</Text>
				<ReportTitle title="" />
				<SectionHeader {...pdf} />
				<SectionOne {...pdf} />
				<SectionTwo {...pdf} />
				<SectionThree {...pdf} />
				<SectionFour {...pdf} />
				<SectionFive {...pdf} />
				<SectionSix {...pdf} />
				<SectionSeven {...pdf} />
				<SectionFooter {...pdf} />
				<Text
					style={styles.pageNumber}
					render={({ pageNumber, totalPages }) =>
						`${pageNumber} / ${totalPages}`
					}
					fixed
				/>
			</Page>
			<Page style={styles.body}>
				<Text style={styles.header} fixed>
					<Image style={styles.image} src={logo} />
				</Text>
				<ReportTitle title="Christee Results Closing Cost Estimate" />
				<ReportClose dat={{aClose: aClose}} />
				<Text
					style={styles.pageNumber}
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
 * This is the exported function it takes the and
 * title from pdf.button.
 */

interface InvestPdf {
	pdf: TInvestmentPDF,
	aClose: TInvestmentAClose,
}

interface Props {
	dat: InvestPdf;
}

const PdfReport: React.FC<Props> = ({ dat: { pdf, aClose}}) => {
	return (
		<Document>
			<ReportContainer {...{ pdf: pdf, aClose: aClose }}/>
		</Document>
	);
}

export default PdfReport;
