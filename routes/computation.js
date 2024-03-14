var express = require('express');
var router = express.Router();

/* Computation end point. */
router.get('/', function(req, res, next) {
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  const x = req.query.x ? parseFloat(req.query.x) : randomNumber;


  res.send(`Math.acosh() of ${x} is ${Math.acosh(x)}<br> Math.log1p() applied to ${x} is ${Math.log1p(x)}<br> Math.tanh() applied to ${x} is ${Math.tanh(x)}<br> Math.sqrt() applied to ${x} is ${Math.sqrt(x)}`);


});

module.exports = router;
