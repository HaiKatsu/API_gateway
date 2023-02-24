const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Home gateway !')
})

app.get('/ping', (req, res) => {
    res.send('Ok')
})


app.get(any, (req, res, Apiname) => {
    res.send(Apiname)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
