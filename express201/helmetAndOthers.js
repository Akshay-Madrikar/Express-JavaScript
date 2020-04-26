const express = require('express');
const helmet = require('helmet');
const app = express();


app.use(helmet());

// Other MIDDLEWARES
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.post('/ajax', ( req, res ) => {
    console.log(req.body);
    res.json("Test");
});

app.listen(3000);