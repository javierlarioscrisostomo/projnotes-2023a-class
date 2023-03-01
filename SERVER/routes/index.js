var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let iconSet = ["🤑","😎","🤬"];
  let icon = iconSet [Math.floor(Math.random() * 3)]
  console.log(`Icono: ${icon}`)
  res.render('index', { title: 'DWPCII.2023A', icon });
});

router.get('/author', function(req, res){

  let author = { 
    "name":"Javier",
    "lastname": "Larios",
    "twitter": "@javierla",
    "job": "ITGM",
};

res.render('author', author);

});

module.exports = router;
