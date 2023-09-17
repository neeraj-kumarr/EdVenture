const express = require('express');
const mysql = require('mysql');
const bodyparser = require('body-parser');

var app = express();

app.use(bodyparser.json());

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: "edventur3",
    database: "file",
    multipleStatements: true

})



app.post('/login', (req, res) => {
    const sql = "SELECT * FROM record WHERE email = ? AND password = ?"
    const values = [req.body.email,
    req.body.password]
    db.query(sql, values, (err, data) => {
        if (err) return res.json("Error");
        if (data.length > 0) {
            return res.json("Login Successfully")

        } else {
            return res.json("No Record")
        }
    })
})


app.listen(3000, () => {
    console.log('Listening...')
})