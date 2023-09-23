const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const users = require('./routes/Users');
const createAlbum = require('./routes/CreateAlbum');
const viewImages = require('./routes/ViewImages');
const backgroundImages = require('./routes/BackgroundImages'); // Import your API routes

const app = express();

app.use(express.json());
app.use(bodyparser.json());
app.use(cors());
app.use(express.static('../src/Components'))

app.use(users);
app.use(createAlbum);
app.use(viewImages);
app.use(backgroundImages);



app.listen(3000, () => {
    console.log('Listening on port 3000...');
});
