const path = require('path');

const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

const helmet = require('helmet');
app.use(helmet());

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());

app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));

app.get('/', (req,res) => {
    res.send('Sanity Check')
});

app.get('/login', (req,res,next) => {
    // the req object has a query property in Express
    // req.query is an object with a property of every key in the wuery string
    console.log(req.query);
    res.render('login');
});

app.post('/process_login', (req,res,next) => {
    // req.body is made ny urlencoded, which parses the http message for sent data!
    const username = req.body.username;
    const password = req.body.password;
    if( password === 'asd' ) {
        // res.cookie() has 2 args:
        // 1. name of the cookie
        // 2. value to  set it to
        res.cookie('username', username);
        // res.redirect() has 1 arg:
        // 1. Where to send the browser
        res.redirect('/welcome');
    } else {
        res.redirect('/login?msg=fail');
    }
    //res.json(req.body);
});

app.get('/welcome', (req,res,next) => {
    res.render('welcome', {
        username: req.cookies.username
    });  
})

app.get('/logout', (req,res) => {
    // res.clearCookie() takes 1 arg:
    // 1. cookie to clear (by name)
    res.clearCookie('username');
    res.redirect('/login');
});

app.listen(3000);
console.log('Listening to port 3000');