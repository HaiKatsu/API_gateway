const express = require('express')
const helmet = require("helmet");
const cors = require("cors");
const { Router } = require('express');
const app = express()
const port = 3000

app.use(helmet());
app.use(cors());

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Acess-Control-Allow-Headers, Content-Type');
});

Router.all('/:Apiname/*', (req, res, next) => {
  req.params.Apiname = req.params.Apiname.toLowerCase();

});

app.get('/', (req, res) => {
  res.send('Home gateway !')
})

app.get('/ping', (req, res) => {
    res.send('Ok')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
