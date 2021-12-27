/*
 * Copyright 2020-2021 AskChristee, LLC. All rights reserved.
 */

import { TResponseMeta } from '.';

export type TSellerNetCalc = {
    "fumess": string,
    "current_date": string,
    "report_type": string,
    "sp": number,
    "total_payoff": number,
    "transfer": number,
    "doc_stamps": number,
    "s_survey": number,
    "s_clo_fee": number,
    "s_docprep": number,
    "s_abs_fee": number,
    "s_attorney": number,
    "s_title_agent": number,
    "s_tit_ins": number,
    "mtge_release": number,
    "broker_fee": number,
    "comm": string,
    "dol_cred": number,
    "temp_cred": number,
    "loan_org": number,
    "seller_charges": string,
    "dol_tax_adj": number,
    "seller_net": string
}

export type TSellerNetNotes = {
    "pdfmess1": string,
    "pdfmess2": string,
    "pdfmess2a": string,
    "pdfmess3": string,
    "pdfmess4": string,
    "pdfmess5": string,
    "pdfmess6": string,
    "pdfmess7": string,
    "pdfmess8": string,
    "pdfmess9": string,
    "pdfmess10": string,
    "pdfmess11": string,
    "pdfmess12": string,
    "pdfmess13": string,
    "pdfmess14": string,
    "pdfmess15": string,
    "pdfmess16": string,
    "pdfmess17": string,
    "pdfmess18": string,
    "pdfmess19": string,
    "pdfmess20": string,
    "pdfmess21": string,
    "pdfmess22": string,
    "pdfmess23": string,
    "pdfmess24": string,
    "pdfmess25": string,
    "pdfmess26": string,
    "pdfmess27": string,
    "pdfmess28": string,
    "pdfmess29": string,
    "pdfmess30": string,
    "pdfmess31": string,
    "pdfmess32": string,
    "pdfmess33": string,
    "pdfmess34": string,
    "pdfmess35": string,
    "pdfmess36": string,
    "pdfmess37": string,
    "pdfmess38": string,
    "pdfmess39": string,
    "pdfmess40": string,
    "pdfmess41": string,
    "pdfmess42": string
}
export type TSellerNetResults = {
    aCalc: TSellerNetCalc,
    aNotes: TSellerNetNotes
}

export type TSellerNetResponse = {
    meta: TResponseMeta,
    results: TSellerNetResults
};

