//@@ -1,7 +1,7 @@
// Importing Express library
//var express = require('express');
// Creating a Router Instace
//var router = express.Router();
import express from 'express';
const { Router } = express;

const router = Router();

// Creating the route
router.get('/author', (req, res)=>{
//@@ -15,4 +15,4 @@ router.get('/author', (req, res)=>{
}); // function(req, res){}

// Exporting the router
//module.exports = router;
export default router;