var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/teamone', function(req, res, next) {
  res.render('index', { title: 'Team One', team:'teamone' });
});

router.get('/teamtwo', function(req, res, next) {
  res.render('index', { title: 'Team Two', team:'teamtwo' });
});

router.get('/teamthree', function(req, res, next) {
  res.render('index', { title: 'Team Three', team:'teamthree' });
});

router.get('/gameboard', function(req, res, next) {
  res.render('gameboard', { title: 'Gameboard', team:'gameboard' });
});

router.get('/hostboard', function(req, res, next) {
  res.render('hostboard', { title: 'hostboard', team: 'hostboard' });
});

module.exports = router;
