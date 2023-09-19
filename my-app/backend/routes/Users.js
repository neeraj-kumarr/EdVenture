const express = require('express');
const users = require('../models/Users');

const router = express.Router();

router.post('/login', (req, res) => {
    const sql = "SELECT * FROM record WHERE email = ? AND password = ?";
    const values = [req.body.email, req.body.password];

    users.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.json("Error");
        }
        if (data.length > 0) {
            return res.json("Login Successfully");
        } else {
            return res.json("No Record");
        }
    });
});

module.exports = router;
