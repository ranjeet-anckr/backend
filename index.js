require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.json({
        "ranjeet" :2512
    })
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})