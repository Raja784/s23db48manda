var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sugar', { title: 'Search Results sugar' });
});

module.exports = router;
