const express = require('express');
const router = express.Router();

router.post('/pairs', (req, res) => {
  const names = req.body.names;

  res.status(200).send("Gotcha")
})

router.post('/traditional', (req, res) => {
    const names = req.body.names

    res.status(200).send("OK")
})


module.exports = router