const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/view-images', (req, res) => {
    const { keyword, page, pageSize } = req.query;
    let sql = 'SELECT * from pictureGallery';

    // If a keyword is provided, add a WHERE clause to filter by title
    if (keyword) {
        sql += ` WHERE title LIKE '%${keyword}%'`;
    }

    // Pagination
    if (page && pageSize) {
        const offset = (page - 1) * pageSize;
        sql += ` LIMIT ${pageSize} OFFSET ${offset}`;
    }

    db.query(sql, (err, result) => {
        if (err) return res.json('Error');
        return res.json(result);
    });
});

module.exports = router;
