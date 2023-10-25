const express = require('express');
const db = require('../../db');
const router = express.Router();

router.get('/identify-object/view-objects', (req, res) => {

    let sql = "SELECT * from identify"

    db.query(sql, (err, result) => {
        if (err) return res.json('Error');
        return res.json(result);
    });
});


module.exports = router;
