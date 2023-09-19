const mysql = require('mysql');

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'edventur3',
    database: 'content',
    multipleStatements: true
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the database');
    }
});


// Function to insert a new album into the database
const createAlbum = (albumName, callback) => {
    const sql = 'INSERT INTO viewAlbum (Title) VALUES (?)';
    db.query(sql, [albumName], (err, data) => {
        if (err) {
            console.error('Error inserting album:', err);
            callback(err, null);
            return;
        }
        callback(null, data.insertId); // Return the ID of the newly inserted album
    });
};

module.exports = { createAlbum };
