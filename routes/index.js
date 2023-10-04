var express = require('express');
var router = express.Router();


const homeData = {
  title: 'home',
  me: 'Ronald Hardock',
  mission: 'My mission is to provide the best services possible in the area of full stack web development.'
};

const contactData = {
  title: 'Contact Me',
  me: 'Ronald Hardock',
  phone: '647-794-1223'
};

const aboutData = {
  title: 'About Me',
  me: 'Ronald Hardock'
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', homeData);
});

/* GET home page. */
router.get('/home', function(req, res, next) {
    res.render('index', homeData );
});

/* GET About Me page. */
router.get('/about', function(req, res, next) {
  res.render('about', aboutData);
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
    res.render('projects', { title: 'Projects'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services'});
});

/* GET Contact Me page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', contactData);
});

module.exports = router;
