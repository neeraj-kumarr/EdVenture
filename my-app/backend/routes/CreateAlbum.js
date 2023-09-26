const express = require('express');
const db = require('../db');

const router = express.Router();


// Function to insert a new album into the database
const createAlbum = (albumName, callback) => {
    const sql = 'INSERT INTO viewAlbum (title) VALUES (?)';
    db.query(sql, [albumName], (err, data) => {
        if (err) {
            console.error('Error inserting album:', err);
            callback(err, null);
            return;
        }
        callback(null, data.insertId); // Return the ID of the newly inserted album
    });
};
// Define an API endpoint to create a new album
router.post('/create-album', (req, res) => {
    const { albumName } = req.body; // Assuming you send the albumName in the request body

    createAlbum(albumName, (err, albumId) => {
        if (err) {
            console.error('Error creating album:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json({ message: 'Album created successfully', albumId });
    });
});


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
