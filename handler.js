import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

import pdf from "html-pdf";
import { nanoid } from "nanoid";
import handlebars from "handlebars";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const exportHtmlToPdf = async (html, options) => {
  return new Promise((resolve, reject) => {
    pdf.create(html, options).toBuffer((err, buffer) => {
      if (err) {
        console.log('Error in exportHtmlToPdf')
        reject(err)
      } else {
        resolve(buffer)
      }
    });
  })
}

const generatePdf = async (event) => {
  const data = {
    title: event.data.title,
    text: event.data.text
  }
  const file = fs.readFileSync(path.resolve(__dirname, "templates/template.hbs"), 'utf8')
  const template = handlebars.compile(file)
  const html = template(data)

  try {
    await exportHtmlToPdf(html);

    const pdf = await exportHtmlToPdf(html);

    const path = 'pdfs';

    fs.writeFileSync(`${path}/${nanoid()}.pdf`, pdf,'binary')

  } catch (error) {
    console.log(error);
  }
};

generatePdf({
  data: {
    title: "Example",
    text: "description"
}})
