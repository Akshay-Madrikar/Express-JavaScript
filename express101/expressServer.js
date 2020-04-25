// Nodejs is the language
// Express is node, a node module

//express is a 3rd party module
const express = require('express');
// An "app" is the express function invoked inside the Express module invoked
// and is an Express application
const app = express();

// all is a method, and it takes 2 args:
// 1. route
// 2. callback to run if the route is requested
app.all('*', ( req, res ) => {
    // -----Unlike http : -----------
    // Express handles the basic headers( status code, mime-type )
    // Express handles the end
    res.send('<h1>Hello World! 420</h1>');
});

app.listen(3000);
