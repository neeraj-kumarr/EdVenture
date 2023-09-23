// viewImagesInAlbum.js

const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Define the directory where your images are stored
const imageDirectory = path.join(__dirname, '..', 'src', 'Components', 'PictureGallery');

// Create a route to fetch images for a specific album and optionally search by keyword
router.get('/', (req, res) => {
    const { album, keyword } = req.query; // Assuming you send the album name and keyword in the query parameters

    // Read the contents of the image directory and filter images for the specified album
    fs.readdir(imageDirectory, (err, files) => {
        if (err) {
            console.error('Error reading image directory:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        const albumImages = files.filter((file) => file.startsWith(album));

        // If a keyword is provided, filter images by keyword
        if (keyword) {
            const keywordImages = albumImages.filter((image) =>
                image.toLowerCase().includes(keyword.toLowerCase())
            );
            return res.json(keywordImages);
        }

        // Send the list of images for the album
        res.json(albumImages);
    });
});

module.exports = router;
