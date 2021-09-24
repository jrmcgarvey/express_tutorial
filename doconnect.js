var async = require('async')
var Book = require('./models/book')
var Author = require('./models/author')
var Genre = require('./models/genre')
var BookInstance = require('./models/bookinstance')
var mongoose = require('mongoose');
require('dotenv').config();

function doConnect() {
  var mongoDB = process.env.MONGO_URL;
  mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  mongoose.Promise = global.Promise;
}

module.exports = {
  async: async,
  Book: Book,
  Author: Author,
  Genre: Genre,
  mongoose: mongoose,
  doConnect: doConnect
}
