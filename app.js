const express = require('express');
const NotFoundError = require('./utils/errors')
// logger
const morgan = require('morgan')
const bodyParser = require('body-parser')

const app = express();

const giftExchange = require('./routes/gift-exchange')

app.use(morgan('tiny'))
app.use(bodyParser.json())

app.use('/gift-exchange', giftExchange) // mount router to endpoint

app.get('/', (req, res) => {
    res.status(200).send({"ping": "pong"});
})

// 404 handler
app.use((error, req, res, next) => {
    const err = new NotFoundError();

    next(err);
})

app.use((error, req, res, next) => {
    const message = error.message ? error.message : "Something wen't wrong in the application";
    const status = error.status ? error.status : 500;

    res.status(status).send({"error": {
        "status": status,
        "message": message,
    }});
})

module.exports = app;