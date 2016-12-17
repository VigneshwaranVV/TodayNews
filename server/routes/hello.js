const express = require('express');
const app = express();

// app.get('/', function(req, res) {
//   res.send('Hello World')
// })
const bodyParser= require('body-parser');


app.use(bodyParser.urlencoded({extended: true}))


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/login.html')
  // Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
  // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
})
app.post('/quotes', (req, res) => {
  console.log(req.body);
})













console.log('May Node be with you')

module.exports = app;