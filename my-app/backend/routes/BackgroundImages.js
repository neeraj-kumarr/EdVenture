const express = require('express');
const multer = require('multer');
const path = require('path');
const db = require('../models/BackgroundImages');

const router = express.Router();

// Define the absolute path to the destination directory
const uploadDir = path.join(__dirname, '../../src/Components/PictureGallery/');

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
    const sql = 'INSERT INTO pictureGallery (image) VALUES (?)';
    db.query(sql, [image], (err, result) => {
        if (err) return res.json({ Message: 'Error' })
        return res.json({ Status: 'Success' })
    })
});

router.get('/', (req, res) => {
    const sql = 'SELECT * from pictureGallery';
    db.query(sql, (err, result) => {
        if (err) return res.json({ Message: 'Error' })
        return res.json((result))
    })
})

module.exports = router;
