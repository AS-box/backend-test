const express = require('express')
const bodyParser = require('body-parser')

const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

app.post('/test', function (req, res) {
  console.log(req.body)
  res.send({
    message: req.body.text
  })
})

app.listen(process.env.port||3000)