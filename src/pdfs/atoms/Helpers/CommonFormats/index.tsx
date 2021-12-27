import React from "react";
import { Text } from "@react-pdf/renderer";


export interface IVProps {
  v: string | number
}

export interface IVPromptProps {
  v: number | string,
  prompt: string,
}

export interface IVPromptPProps {
  v: number,
  prompt: string,
  p: string | number
}

const PdfCash = ({ v }: IVProps) => {
  let nV: number = +v;
  if (nV > 9999) {
    v = addCommas(v as string);
  }
  return <Text>${v}</Text>;
}

const PdfCashPrompt = ({ v, prompt }: IVPromptProps) => {
  let sv = '';
  if (v) {
    typeof v === 'string' ? v : v.toString();
    if (v > 9999) {
      sv = addCommas(v.toString());
    } else { sv = v.toString(); }
  }

  return (
    <Text>
      {prompt}&nbsp;${sv}&nbsp;&nbsp;
    </Text>
  );
}

const PdfCashPromptWithPercent = ({ v, prompt, p }: IVPromptPProps) => {
  let sv: string = '';
  if (v) {
    if (v > 9999) {
      sv = addCommas(v.toString());
    } else { sv = v.toString(); }
  }

  return (
    <Text>
      {prompt}&nbsp;${sv}&nbsp;{p}%&nbsp;
    </Text>
  );
}

const PdfPercent = ({ v }: IVProps) => {
  let x = addCommas(v as string);
  return <Text>{x}%</Text>;
}


const PdfPercentPrompt = ({ v, prompt }: IVPromptProps) => {
  return (
    <Text>
      {prompt}&nbsp;{v}%&nbsp;&nbsp;
    </Text>
  );
}

const PdfPromptCashPercentParens = ({ v, prompt, p }: IVPromptPProps) => {
  let sv: string = '';
  if (v) {
    if (v > 9999) {
      sv = addCommas(v.toString());
    } else { sv = v.toString(); }
  }
  return (
    <Text>
      {prompt}&nbsp;${sv}&nbsp;({p}%)&nbsp;
    </Text>
  );
}

const PdfText = ({ v }: IVProps) => {
  return <Text>&nbsp;{v}</Text>;
}

/**
 * https://stackoverflow.com/questions/3753483/javascript-thousand-separator-string-format/19840881
 * @param {*} nStr
 */
const addCommas = (nStr: string) => {
  nStr += "";
  var x = nStr?.split(".");
  var x1 = x[0];
  var x2 = x.length > 1 ? "." + x[1] : "";
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, "$1" + "," + "$2");
  }
  return x1 + x2;
}

export {
  PdfCash,
  PdfCashPrompt,
  PdfCashPromptWithPercent,
  PdfPercent,
  PdfPercentPrompt,
  PdfPromptCashPercentParens,
  PdfText
};
