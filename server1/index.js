const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/ventes', (req, res) => {
  res.send('test ventes route !')
})

app.get('/ventes/test', (req, res) => {
  res.send('test ventes routes')
})



app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
