const express = require('express')
const bodyParser = require('body-parser')

const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

app.get('/test', function (req, res) {
  res.send({
    message:'Hello world'
  })
})

app.listen(process.env.port||3000)