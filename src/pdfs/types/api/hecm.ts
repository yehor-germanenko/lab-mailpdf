/*
 * Copyright 2020-2021 AskChristee, LLC. All rights reserved.
 */

import { TResponseMeta } from '.';

export type THecmCalc = {
    state_sel: string,
    report_type: string,
    fumess: string,
    area: string,
    ex_rate: number,
    act_rate: number,
    age: number,
    sp: number,
    ma: number,
    ltv: string,
    total_mtge: number,
    d_payment: number,
    totalcc: number,
    r_cash: number,
    t_cash: number,
    ex_cash: number,
    temp_pt: string,
    temp_ins: string,
    max_claim: number,
    plf_factor: number,
    hecm_bal: string,
    temp_rate: number
}

export type THecmANotes = {
    state_sel: string,
    report_type: string,
    fumess: string,
    area: string,
    temp_rate: number,
    ex_rate: number,
    act_rate: number,
    age: number,
    max_claim: number,
    sp: number,
    ma: number,
    ltv: string,
    plf_factor: number,
    total_mtge: number,
    d_payment: number,
    totalcc: number,
    r_cash: number,
    t_cash: number,
    ex_cash: number,
    temp_pt: string,
    temp_ins: string,
    hecm_bal: string,
    pdfmess: string,
    pdfmess1: string,
    pdfmess2: string,
    pdfmess3: string,
    pdfmess4: string,
    pdfmess5: string,
    pdfmess6: string,
    pdfmess7: string,
    pdfmess8: string,
    pdfmess9: string,
    pdfmess10: string,
    pdfmess11: string,
    pdfmess12: string,
    pdfmess13: string,
    pdf_bottom: string
}

export type THecmAClose = {
    sp: number,
    area: string,
    state_sel: string,
    current_date: string,
    app_fee: number,
    home_ins: number,
    cred_rpt: number,
    flood_cert: number,
    pest_ins: number,
    underfee: number,
    loan_org$: string,
    abs_fee: number,
    clo_fee: number,
    int_tit: string,
    survey: number,
    haz_insur: string,
    clo_tax: string,
    transfer: string,
    docstamp: string,
    mtgetax: string,
    clerk_office: number,
    totalcc: number,
    d_payment: number,
    r_cash: number,
    tax_period$: string,
    p_tax_adj$: string,
    f_tax$: string
}

export type THecmResponseObject = {
    aCalc: THecmCalc,
    aNotes: THecmANotes,
    aClose: THecmAClose,
    bCalc: THecmCalc,
    bNotes: THecmANotes,
    bClose: THecmAClose,
}

export type THecmResponse = {
    meta: TResponseMeta,
    hecm: THecmResponseObject | undefined
};
