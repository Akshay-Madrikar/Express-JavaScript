const express = require('express');
const path = require('path');
const helmet = require('helmet');
const app = express();


app.use(helmet());

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));


app.get('/',( req, res ) => {
    // render has 2 args:
    // 1. file you want to display
    // 2. the data which is going to be appended to res.locals
    res.render('index', {
        message: 'Welcome EJS!'
    });
});

app.listen(3000);