var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var family =["Deepak","Radhe","Ria","Charve"]
  res.render('family',{title:'Sharma Family',
                      family:family});
//  res.send('respond with a resource');
});

module.exports = router;
