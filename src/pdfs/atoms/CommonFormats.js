import React from "react";
import { Text } from "@react-pdf/renderer";

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

function PdfCash({ v }) {
  if (v > 9999) {
    v = addCommas(v);
  }
  return <Text>${v}</Text>;
}

function PdfText({ v }) {
  return <Text>&nbsp;{v}</Text>;
}

export {
  PdfCash,
  PdfText,
};
