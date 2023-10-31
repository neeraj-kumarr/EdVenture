const express = require('express');
const db = require('../../db');
const router = express.Router();

router.get('/spell-game/view-games', (req, res) => {

    let sql = "SELECT * from spellgames"

    db.query(sql, (err, result) => {
        if (err) return res.json('Error');
        return res.json(result);
    });
});


module.exports = router;


