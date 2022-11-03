const express = require('express')
const app = express()
const port = 5025

app.get('/', (req, res) => {
  res.send('Hello World!\
  This is Steve vought.')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})