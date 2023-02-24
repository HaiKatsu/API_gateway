const express = require('express')
const app = express()
const port = 3002

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/transport', (req, res) => {
  res.send('Home serveur transport !')
})

app.get('/transport/test', (req, res) => {
  res.send('test transport route !')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
