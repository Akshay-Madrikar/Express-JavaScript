const express = require('express');
const app = express();
const helmet = require('helmet');

app.use(helmet());
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());
app.use(express.static('public'));

const router = require('./mainRouter');
const userRouter = require('./userRouter');

app.use('/', router);
app.use('/user', userRouter);

app.listen(3000);