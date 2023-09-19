const express = require('express');
const db = require('../models/viewAlbum');

const router = express.Router();

// Define an API endpoint to retrieve album data
router.get('/view-albums', (req, res) => {
    const sql = 'SELECT * FROM viewAlbum';
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error querying MySQL:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json(data);
    });
});

module.exports = router;
