const express = require('express');
const app = express();

// Express has 2 things
// 1. Router
// 2. Middleware that comprises a webFramework

// Req------MIDDLEWARE------>Res
// Middleware is a function that has access to the req, res and next objects

function validateUser( req, res, next ) {
    // get info out of res object
    // do some stuff with the DB
    res.locals.validated = true
    console.log('Validated ran!');
    
    // next allows further middlewares to run after this
    next();
};

// This will run validateUser on ALL paths, all methods!
app.use(validateUser);

// This is will run validateUser on /admin, all methods!
app.use('/admin',validateUser);

// This is will run validateUser on '/', only on get methods!
app.get('/',validateUser);

app.get('/',(req,res) => {
    res.send('<h1>Home Page</h1>');
    console.log(res.locals.validated);
});

app.get('/admin',(req,res) => {
    res.send('<h1>Admin Page</h1>');
    console.log(res.locals.validated);
});

app.listen(3000);