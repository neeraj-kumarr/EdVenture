const express = require('express');
const multer = require('multer');
const path = require('path');
const db = require('../models/AddImagesInAlbum');

const router = express.Router();

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

module.exports = router;
