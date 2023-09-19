const express = require('express');
const bodyparser = require('body-parser');
const users = require('./routes/Users');
const viewAlbum = require('./routes/ViewAlbum');

const app = express();

app.use(bodyparser.json());

app.use(users);
app.use(viewAlbum);


app.listen(3000, () => {
    console.log('Listening on port 3000...');
});
