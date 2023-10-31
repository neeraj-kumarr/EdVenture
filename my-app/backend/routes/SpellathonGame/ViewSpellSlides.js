const express = require('express');
const db = require('../../db');
const router = express.Router();

router.get('/spell-game/view-slides', (req, res) => {

    let sql = "SELECT * from spellbee"

    db.query(sql, (err, result) => {
        if (err) return res.json('Error');
        return res.json(result);
    });
});


module.exports = router;


