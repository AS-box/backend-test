const express = require('express')
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

app.get('/test', (req, res) => {
  connection.query(
    'SELECT*FROM names', (error, results) => {
      res.send(results)
    }
  )
})

// app.post('/test', function (req, res) {
//   console.log(req.body.text)
//   res.send({
//     message: req.body.text
//   })
// })

app.listen(process.env.port||3000)