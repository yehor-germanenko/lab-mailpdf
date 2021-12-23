import React from "react";
import { Text } from "@react-pdf/renderer";

/**
 * Place text in <td align="center">
 * This is being deprecated to use the more expressive TdAlignCenter
 * @param {String} v
 */
function DetailTextCenter({ v }) {
  return TdCenter({ v });
}

/**
 * Place text in <td align="center">
 * @param {String} v
 */
function TdCenter({ v }) {
  return <td align="center">{v}</td>;
}

/**
 * Old function, should be deprecated
 * use TdCash instead.
 * @param {*} param0
 */
function DetailCashNaked({ v }) {
  return TdCash({ v });
}

/**
 * https://stackoverflow.com/questions/3753483/javascript-thousand-separator-string-format/19840881
 * @param {*} nStr
 */
function addCommas(nStr) {
  nStr += "";
  var x = nStr.split(".");
  var x1 = x[0];
  var x2 = x.length > 1 ? "." + x[1] : "";
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, "$1,$2");
  }
  return x1 + x2;
}

function TdCash({ v }) {
  let x = addCommas(v);
  return <td align="center">${x}</td>;
}

function PdfCash({ v }) {
  if (v > 9999) {
    v = addCommas(v);
  }
  return <Text>${v}</Text>;
}

function PdfCashPrompt({ v, prompt }) {
  if (v > 9999) {
    v = addCommas(v);
  }
  return (
    <Text>
      {prompt}&nbsp;${v}&nbsp;&nbsp;
    </Text>
  );
}

function PdfPercentPrompt({ v, prompt }) {
  return (
    <Text>
      {prompt}&nbsp;{v}%&nbsp;&nbsp;
    </Text>
  );
}

function PdfCashPromptWithPercent({ v, prompt, p }) {
  if (v > 9999) {
    v = addCommas(v);
  }
  return (
    <Text>
      {prompt}&nbsp;${v}&nbsp;{p}%&nbsp;
    </Text>
  );
}

function PdfPromptCashPercent({ v, prompt, p }) {
  if (v > 9999) {
    v = addCommas(v);
  }
  return (
    <Text>
      {prompt}&nbsp;${v}&nbsp;{p}%&nbsp;
    </Text>
  );
}

function PdfPromptCashPercentParens({ v, prompt, p }) {
  if (v > 9999) {
    v = addCommas(v);
  }
  return (
    <Text>
      {prompt}&nbsp;${v}&nbsp;({p}%)&nbsp;
    </Text>
  );
}

function PdfPercent({ v }) {
  let x = addCommas(v);
  return <Text>{x}%</Text>;
}

function DolPerText({ dollAmt, percAmt, txtDisplay }) {
  let x = addCommas(dollAmt);
  return (
    <td align="center">
      ${x}&nbsp;{percAmt}%&nbsp;{txtDisplay}
    </td>
  );
}

function DolText({ dollAmt, txtDisplay }) {
  let x = addCommas(dollAmt);
  return (
    <td align="center">
      ${x}&nbsp;{txtDisplay}
    </td>
  );
}

/**
 * Use TdPercent
 */
function DetailPercent({ v }) {
  return TdPercent({ v });
}

/**
 * Returns param in td with a % suffix
 * @param {v} param0
 */
function TdPercent({ v }) {
  return <td align="center">{v}%</td>;
}

/**
 * Format given text inside a <td>
 * @param {string} String to be displayed placed
 */
function DetailText({ v }) {
  return TdText({ v });
}

/**
 * Format given text inside a <td>
 * @param {string} String to be displayed placed
 */
function TdText({ v }) {
  return <td>{v}</td>;
}

function DetailTextBold({ v }) {
  return (
    <td>
      <strong>{v}</strong>
    </td>
  );
}

function DetailTextBoldTip({ v, t }) {
  return (
    <td data-tip data-for={t}>
      <strong>{v}</strong>
    </td>
  );
}

function HtmlDetailTextTwo({ a, b }) {
  let x = addCommas(a);
  return (
    <td align="center">
      ${x}&nbsp;{b}%
    </td>
  );
}

function HtmlDetailTextThree({ a, b, c, d }) {
  return (
    <td align="center">
      {a}&nbsp;${b}&nbsp;{c}&nbsp;{d}%
    </td>
  );
}

function HtmlDetailTextFour({ a, b }) {
  return (
    <td align="center">
      {a}&nbsp;${b}
    </td>
  );
}

function HtmlDetailTextFive({ a, b }) {
  return (
    <td align="center">
      ${a}&nbsp; After {b} years
    </td>
  );
}

function HtmlDetailTextSix({ a }) {
  return <td align="center">${a}&nbsp; in home ownership</td>;
}

export {
  DetailPercent,
  DetailText,
  HtmlDetailTextTwo,
  HtmlDetailTextThree,
  HtmlDetailTextFour,
  HtmlDetailTextFive,
  HtmlDetailTextSix,
  DetailTextBold,
  DetailTextBoldTip,
  DetailCashNaked,
  DetailTextCenter,
  TdCenter,
  TdCash,
  TdPercent,
  TdText,
  DolPerText,
  DolText,
  PdfCash,
  PdfCashPrompt,
  PdfCashPromptWithPercent,
  PdfPercent,
  PdfPercentPrompt,
  PdfPromptCashPercent,
  PdfPromptCashPercentParens,
};
