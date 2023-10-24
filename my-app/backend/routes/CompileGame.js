const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/compile-game/subjects', (req, res) => {

    let sql = "SELECT * from subjects"

    db.query(sql, (err, result) => {
        if (err) return res.json('Error');
        return res.json(result);
    });
});

router.get('/compile-game/books', (req, res) => {

    let sql = "SELECT * from my_books"

    db.query(sql, (err, result) => {
        if (err) return res.json('Error');
        return res.json(result);
    });
});

router.get('/compile-game', (req, res) => {

    let sql = "SELECT * from libr"

    db.query(sql, (err, result) => {
        if (err) return res.json('Error');
        return res.json(result);
    });
});

module.exports = router;
