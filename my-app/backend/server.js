const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const users = require('./routes/Users');
const createAlbum = require('./routes/CreateAlbum');
const viewImages = require('./routes/ViewImages');
const backgroundImages = require('./routes/BackgroundImages'); // Import your API routes
const addImages = require('./routes/AddImagesInAlbum')
const imgToImgLineGame = require('./routes/LineGame/ImagetoImage')
const textToImgLineGame = require('./routes/LineGame/TexttoImage')
const textToTextLineGame = require('./routes/LineGame/TexttoText')
const CompileGame = require('./routes/CompileGame')
const app = express();

app.use(express.json());
app.use(bodyparser.json());
app.use(cors());
app.use(express.static('../src/Components'))

app.use(users);
app.use(createAlbum);
app.use(viewImages);
app.use(backgroundImages);
app.use(addImages);
app.use(imgToImgLineGame);
app.use(textToImgLineGame);
app.use(textToTextLineGame);
app.use(CompileGame);



app.listen(3000, () => {
    console.log('Listening on port 3000...');
});
