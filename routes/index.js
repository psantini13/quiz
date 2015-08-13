var express = require('express');
var router = express.Router();

var quiz_controller = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Quiz' });
});

router.get('/quizes/question', quiz_controller.question);
router.get('/quizes/answer', quiz_controller.answer);

/* GET author page. */
router.get('/author', function(req, res, next) {
    res.render('author');
});

module.exports = router;
