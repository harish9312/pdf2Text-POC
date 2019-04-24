var express = require('express');
const convertToText = require('./src/pdfToText.js')
var app = express(); // the main app
// var admin = express(); // the sub app
// var bodyParser = require('body-parser');
var pdfUtil = require('pdf-to-text');

// app.use(bodyParser());
var multer = require('multer');
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './temp/')
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname + '-' + Date.now()}.pdf`)
  }
});
var upload = multer({ storage: storage });
// app.use(multer({ dest: './tmp/'}));

app.get('/', function (req, res) {
  // console.log(admin.mountpath); // /admin
  res.send('Admin Homepage');
});

app.post('/pdfToText', upload.single('pdfFile'), (req, res) => {
  pdfUtil.pdfToText(`./${req.file.path}`, (err, data) => {
    if (err) {
      res.status(500);
      return res.send({ error: 'Something went wrong..!!!' });
    }
    return res.send({ jsonData: data });
  })
})
console.log('ServerListing at 3001');
app.listen(3001);

