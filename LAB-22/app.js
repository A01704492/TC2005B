const express = require('express');
const multer = require('multer');

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());


const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, 'public/uploads');
    },
    filename: (request, file, callback) => {
        callback(null, new Date().toISOString() + '-' + file.originalname);
    },
});

app.use(multer({ storage: fileStorage }).single('archivo')); 

app.set('views', 'views');
app.set('view engine', 'ejs');

// Ruta
const uploadRuta = require('./routes/upload.routes');
app.use('/', uploadRuta);

// Error
app.use((request, response) => {
    response.statusCode = 404;
    response.send("Lo sentimos, no contamos con esa ruta.");
});

app.listen(3000);
