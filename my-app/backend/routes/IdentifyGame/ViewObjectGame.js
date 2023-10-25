const express = require('express');
const db = require('../../db');
const router = express.Router();

router.get('/identify-game/view-object-game', (req, res) => {

    let sql = "SELECT * from identifyset"

    db.query(sql, (err, result) => {
        if (err) return res.json('Error');
        return res.json(result);
    });
});


module.exports = router;
