// Image.js (Model)

const mysql = require('mysql');

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'edventur3',
    database: 'content', // Update with your database name
    multipleStatements: true,
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the database');
    }
});

// Define a function to fetch images for a specific album
const getImagesForAlbum = (albumName, callback) => {
    const sql = 'SELECT image FROM pictureGallery WHERE title = ?';
    db.query(sql, [albumName], (err, results) => {
        if (err) {
            console.error('Error fetching images for album:', err);
            callback(err, null);
            return;
        }
        const images = results.map((row) => row.image);
        callback(null, images);
    });
};

module.exports = { getImagesForAlbum };
