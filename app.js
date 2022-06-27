const express = require('express');
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

module.exports = app;