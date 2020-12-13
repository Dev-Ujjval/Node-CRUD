var express = require('express');
var router = express.Router();

const students = require('./students');

router.use('/student', students);

module.exports = router;
