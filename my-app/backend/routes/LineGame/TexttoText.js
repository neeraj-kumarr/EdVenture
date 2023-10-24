const express = require('express');
const db = require('../../db');
const router = express.Router();

// Function to reverse an array
function reverseArray(arr) {
    return arr.slice().reverse();
}

router.get('/line-game/text-to-text-viewslide', (req, res) => {

    let sql = "SELECT * from linegame2"

    db.query(sql, (err, result) => {
        if (err) return res.json('Error');
        const reversedData = reverseArray(result); // Reverse the data array
        return res.json(reversedData);
    });
});

router.get('/line-game/text-to-text-viewgame', (req, res) => {

    let sql = "SELECT * from linegame2"

    db.query(sql, (err, result) => {
        if (err) return res.json('Error');
        const reversedData = reverseArray(result); // Reverse the data array
        return res.json(reversedData);
    });
});

router.get('/line-game/text-to-text-compile', (req, res) => {

    let sql = "SELECT * from linegamesets2"

    db.query(sql, (err, result) => {
        if (err) return res.json('Error');
        const reversedData = reverseArray(result); // Reverse the data array
        return res.json(reversedData);
    });
});

module.exports = router;
