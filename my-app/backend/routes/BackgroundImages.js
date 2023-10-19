const express = require('express');
const multer = require('multer');
const path = require('path');
const db = require('../db');

const router = express.Router();

// Define the absolute path to the destination directory
const uploadDir = path.join(__dirname, '../../src/Components/PictureGallery/gamebg');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({
    storage: storage
});

router.post('/upload', upload.single('image'), (req, res) => {
    const image = req.file.filename;
    const sql = 'INSERT INTO bggallery (image) VALUES (?)';
    db.query(sql, [image], (err, result) => {
        if (err) return res.json({ Message: 'Error' })
        return res.json({ Status: 'Success' })
    })
});

router.get('/background-images', (req, res) => {
    const { keyword, page, pageSize } = req.query;
    let sql = 'SELECT * from bggallery';

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
