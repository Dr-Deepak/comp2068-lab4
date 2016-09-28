var express = require('express');
var router = express.Router();
var family =["Deepak","Radhe","Ria","Charve"];
/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Sharma Family',
                      messege: 'Please click on our names above to know more about us',
                      family:family});
});
//if Deepak selected
router.get('/Deepak', function(req, res, next) {

  res.render('deepak', { title: 'Deepak',
                      messege: 'Deepak is a jack of all trades !!!',
                      family:family});
});

//if Deepak selected
router.get('/Radhe', function(req, res, next) {

  res.render('radhe', { title: 'Radhe',
                      messege: 'Radhe is a wonderfull mom',
                      family:family});
});
//if Deepak selected
router.get('/Ria', function(req, res, next) {

  res.render('ria', { title: 'Ria',
                      messege: 'Ria is an excellent observer',
                      family:family});
});
//if Deepak selected
router.get('/Charve', function(req, res, next) {

  res.render('charve', { title: 'Charve',
                      messege: 'Charve thinks everything could be seen is food, and try eating it',
                      family:family});
});



module.exports = router;
