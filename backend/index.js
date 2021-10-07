const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql');

const cors = require('cors')

const app = express()
app.use(express.static('../frontend/dist'))
app.use(express.json())
app.use(cors())

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'mysql',
  database: 'game'
})

app.get('/test2', (req, res) => {
  connection.query(
    'SELECT*FROM names', (error, results) => {
      console.log(results)
      res.send({
        names:results
      })
    }
  )
})

app.post('/test', function (req, res) {
  console.log(req.body.text)
  res.send({
    message: req.body.text
  })
})

app.listen(process.env.port||3000)