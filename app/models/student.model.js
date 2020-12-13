'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
var StudentsSchema = new Schema({
  name: {
    type: String,
  },
  number: {
    type: String,
  },
  email: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Students", StudentsSchema);