const express = require('express');
const db = require('../../db');
const router = express.Router();


router.get('/line-game/text-to-image-viewslide', (req, res) => {

    let sql = "SELECT * from linegame"

    db.query(sql, (err, result) => {
        if (err) return res.json('Error');
        return res.json(result);
    });
});

router.get('/line-game/text-to-image-viewgame', (req, res) => {

    let sql = "SELECT * from linegame"

    db.query(sql, (err, result) => {
        if (err) return res.json('Error');
        return res.json(result);
    });
});

module.exports = router;
