const express = require('express');
const db = require('../models/CreateAlbum');

const router = express.Router();

// Define an API endpoint to create a new album
router.post('/create-album', (req, res) => {
    const { albumName } = req.body; // Assuming you send the albumName in the request body

    db.createAlbum(albumName, (err, albumId) => {
        if (err) {
            console.error('Error creating album:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json({ message: 'Album created successfully', albumId });
    });
});

module.exports = router;
