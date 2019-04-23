var pdfUtil = require('pdf-to-text');
var pdfPath = "./invoice.pdf";

// function convertToPDF() {
// const pdfFile = document.getElementById('pdfFile');
pdfUtil.pdfToText(pdfPath, (err, data) => {
   if (err) throw (err);
   console.log(data)
   // document.getElementById('pdfText').innerHTML = data;
})

// }

// module.exports = convertToPDF;