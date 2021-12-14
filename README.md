# lab-mailpdf

Testing the ability to mail a pdf that has been generated as part of a server process.

## Requirements

- Generate a data table in a PDF from JSON data
- Place that generated PDF into an S3 bucket
- Using Mailgun or some other SMTP service mail that pdf as an attachment
- The PDF file name should be abstract and not include any part of the email address
- The S3 bucket should only be accessible by the SMTP tool, it should not be public
- 
