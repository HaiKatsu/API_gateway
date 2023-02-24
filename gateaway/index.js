const express = require('express')
const helmet = require("helmet");
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Home gateway !')
})

app.get('/ping', (req, res) => {
    res.send('Ok')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
