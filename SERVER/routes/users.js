//@@ -1,9 +1,11 @@
//var express = require('express');
//var router = express.Router();
import express from 'express';
const { Router } = express;

const router = Router();

/* GET users listing. */
//router.get('/', function(req, res, next) {
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

//module.exports = router;
export default router;