var express = require('express');
var router = express.Router();

var students = require('../controllers/studentController')

router.get('/',students.getAll)
      .post('/',students.create)
      .get('/:id', students.getById)
      .put('/:id', students.update)
      .delete('/:id', students.delete)

module.exports = router;