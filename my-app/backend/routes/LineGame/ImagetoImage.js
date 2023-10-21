const express = require('express');
const db = require('../../db');
const router = express.Router();


router.get('/line-game/image-to-image-viewslide', (req, res) => {

    let sql = "SELECT * from imgtoimglingame"

    db.query(sql, (err, result) => {
        if (err) return res.json('Error');
        return res.json(result);
    });
});

router.get('/line-game/image-to-image-viewgame', (req, res) => {

    let sql = "SELECT * from imgtoimglingame_sets"

    db.query(sql, (err, result) => {
        if (err) return res.json('Error');
        return res.json(result);
    });
});

module.exports = router;
