/*
 * Copyright 2020-2021 AskChristee, LLC. All rights reserved.
 */

import { TResponseMeta } from ".";

export type TAmortizationHeader = string[] | number[][];
export type TAmortizationResults = string[] | number[][];

export type TAmortizationResponse = {
    meta: TResponseMeta,
    header: TAmortizationHeader,
    results: TAmortizationResults,
    fumess: string
};