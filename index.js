const movies = require('./routes/movies');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

let dev_db_url = 'mongodb://127.0.0.1:27017/streaming';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'ejs')
app.use('/movies', movies);

app.listen(1234, () => {
    console.log('Server is up and running on port numner ' + 1234);
});