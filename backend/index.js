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

app.get('/list', (req, res) => {
  connection.query(
    'SELECT*FROM names', (error, results) => {
      res.send(results)
    }
  )
})
app.post('/create', cors(), (req, res) => {
  connection.query('INSERT INTO names (name, discription) VALUES (?,?)',
    [req.body.name, req.body.discription],
    (error, results) => {
      if (error) {
        res.send(error)
      } else {
        res.redirect('/')
      }
  })
})


app.listen(process.env.port||3000)