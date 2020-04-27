const express = require('express');
const path = require('path');
const helmet = require('helmet');
const app = express();


app.use(helmet());
// serve up static files
app.use(express.static('public'));

// parse json and urlencoded data into req.body
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

// set() has 2 args:
// 1. key
// 2. value
app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));


app.get('/',( req, res ) => {
    res.render('index');
});

app.listen(3000);