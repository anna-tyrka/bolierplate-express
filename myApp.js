let express = require('express');
let app = express();

console.log("Hello World")

const handler = (req, res) => {
  res.send('Hello Express')
}
app.get('/', (req, res) => {
  res.send("Hello Express")
})
































 module.exports = app;
