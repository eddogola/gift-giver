const express = require('express');
const GiftExchange = require('../models/gift-exchange');
const router = express.Router();

router.post('/pairs', (req, res) => {
  const names = req.body.names;
  const pairs = GiftExchange.pairs(names)

  res.status(200).send(pairs);
})

router.post('/traditional', (req, res) => {
    const names = req.body.names;
    const traditional = GiftExchange.traditional(names);

    res.status(200).send(traditional)
})


module.exports = router