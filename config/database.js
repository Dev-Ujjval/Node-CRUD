// ****** Set up default mongoes connection START ****** //
var Mongoose = require('mongoose');
var Auth = '';
var DBPass = '';

if (process.env.DB_PASS) {
  DBPass = process.env.DB_USER + ':' + process.env.DB_PASS + '@';
}

if (process.env.DB_AUTHDB) {
  Auth = '?authSource=' + process.env.DB_AUTHDB;
}

Mongoose.set('useUnifiedTopology', true);

Mongoose.connect(
  'mongodb://' +
  DBPass +
  process.env.DB_HOST +
  ':' +
  process.env.DB_PORT +
  '/' +
  process.env.DB_NAME +
  Auth,
  { useNewUrlParser: true }
);

var db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
  console.log('Connection with database succeeded.');
});

Mongoose.set('useFindAndModify', false);
exports.db = db;


// ****** Set up default mongoes connection END ****** //
