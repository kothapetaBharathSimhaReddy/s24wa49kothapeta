var express = require('express');
var router = express.Router();

/* Part $ of Assignment - 9. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Bharath Simha Reddy Kothapeta' });
});

module.exports = router;
