/*
 * Copyright 2020-2021 AskChristee, LLC. All rights reserved.
 */

import { TResponseMeta } from '.';

type TBWPForm = {
    condo: number,
    county_select: number,
    display_pdf_output: string,
    doconv: string,
    dofha: string,
    doType: string[],
    dousda: string,
    dova: string,
    email: string,
    filing_status: string,
    ftbuyer: string,
    inc_rent: number,
    input_ltv: number,
    input_ma: number,
    inputcred: number,
    int_rate: number,
    int_rate2: number,
    m_debts: number,
    prop_app: number,
    prop_t: number,
    q_income: number,
    report_years: number,
    s_cred: number,
    sp: number,
    state: string,
    term: number
}

type TBWPLambda = {
    zprop_app: number,
    zreport_years: number,
    zcounty_select: number,
    zstate: string,
    zsp: number,
    zinput_ma: number,
    zinput_ltv: number,
    zfiling_status: string,
    zint_rate: number,
    zint_rate2: number,
    zq_income: number,
    zm_debts: number,
    zftbuyer: string,
    zdoconv: string,
    zdofha: string,
    zdova: string,
    zdousda: string,
    zprop_t: number,
    zinputcred: number,
    zs_cred: number,
    zterm: number
}

export type TBWACalc = {
    state_sel: string,
    report_type: string,
    fumess: string,
    area: string,
    sp: number,
    ma: number,
    ltv: number,
    total_mtge: number,
    d_payment: number,
    totalcc: number,
    temp_cred: number,
    dol_cred: number,
    r_cash: number,
    temp_rate: number,
    t_piti: number,
    temp_pi: number,
    temp_mi: number,
    temp_pt: number,
    temp_ins: number,
    tot_duct: number,
    net_mort_pay:number,
    print_t_bracket: number,
    tax_saving: number,
    cal_fr: number,
    cal_br: number,
    condo: number,
    report_type_2: string,
    state_select_2: string,
    area_2: string,
    fumess_2: string,
    sp_2: number,
    ma_2: number,
    ltv_2: number,
    total_mtge_2: number,
    d_payment_2: number,
    totalcc_2: number,
    dol_cred_2: number,
    temp_cred_2: number,
    r_cash_2: number,
    temp_rate_2: number,
    t_piti_2: number,
    temp_pi_2: number,
    temp_mi_2: number,
    temp_pt_2: number,
    temp_ins_2: number,
    condo_2: number,
    tot_duct_2: number,
    tax_saving_2: number,
    net_mort_pay_2: number
}

export type TBWAClose = {
    sp: number,
    area: string,
    state_sel: string,
    current_date: string,
    est_close: string,
    first_payment: string,
    app_fee: number,
    home_ins: number,
    cred_rpt: number,
    flood_cert: number,
    pest_ins: number,
    underfee: number,
    loan_org$: string,
    abs_fee: number,
    clo_fee: number,
    ins_tit: number,
    survey: number,
    int_int:number,
    days_interest: number,
    haz_insur$: string,
    escrow_tax: number,
    clo_tax: number,
    net_tax: number,
    transfer: number,
    docstamp: number,
    mtgetax: number,
    clerk_office: number,
    totalcc: number,
    s_credit$: string,
    l_credit$: string,
    total_cred: number,
    d_payment: number,
    r_cash: number,
    tax_period$: string,
    p_tax_adj$: string,
    tax_escrow_date:string,
    tax_escrow: number
}

export type TBWANotes = {
    current_date: string,
    state_sel: string,
    report_type: string,
    fumess: string,
    area: string,
    sp: number,
    ma: number,
    ltv: number,
    total_mtge: number,
    d_payment: number,
    totalcc: number,
    temp_cred: number,
    dol_cred: number,
    r_cash: number,
    temp_rate: number,
    t_piti: number,
    temp_pi: number,
    temp_mi: number,
    temp_pt: number,
    temp_ins: number,
    condo: number,
    tot_duct: number,
    net_mort_pay: number,
    print_t_bracket: number,
    tax_saving: number,
    cal_fr: number,
    cal_br: number,
    report_type_2: string,
    state_select_2: string,
    area_2: string,
    sp_2: number,
    ma_2: number,
    ltv_2: number,
    total_mtge_2: number,
    d_payment_2: number,
    totalcc_2: number,
    dol_cred_2: number,
    temp_cred_2: number,
    r_cash_2: number,
    temp_rate_2: number,
    t_piti_2: number,
    temp_pi_2: number,
    temp_mi_2: number,
    temp_pt_2: number,
    temp_ins_2: number,
    condo_2: number,
    tot_duct_2: number,
    tax_saving_2: number,
    net_mort_pay_2: number,
    cal_fr_2: number,
    cal_br_2: number,
    pdfmess: string,
    pdf_head1: string,
    pdf_head2: string,
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
    pdf_mess13: string,
    pdf_mess14: string,
    pdf_mess15: string
}

export type TBuyWaitParams = {
    pForm: TBWPForm,
    pLambda: TBWPLambda
}

export type TBuyWaitResults = {
    aCalc: TBWACalc,
    aNotes: TBWANotes,
    aClose: TBWAClose
}

export type TBuyWaitResponse = {
    meta: TResponseMeta,
    params: TBuyWaitParams,
    results: TBuyWaitResults
};