// Importting Express library
var express = require('express');
// Creating a Router Instace
var router = express.Router();

// Creating the router
router.get('/author', function(req, res){

 res.json({
    "name":"Javier",
    "lastname": "Larios",
    "twitter": "@javierla",
    "job": "ITGM",
 });   
});  // function(req, res){}

// Exporting the router
module.exports = router;