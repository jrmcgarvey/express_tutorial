var async = require('async')
var Book = require('./models/book')
var Author = require('./models/author')
var Genre = require('./models/genre')
var BookInstance = require('./models/bookinstance')
require('dotenv').config();

var mongoose = require('mongoose');
var mongoDB = process.env.MONGO_URL;
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoose.Promise = global.Promise;

async function findBookInstances(title) {
  book = await Book.findOne({title: title});
  bookinstances = await BookInstance.find({ book: book});
  console.log("book instances are ", bookinstances);
  mongoose.connection.close();
}

findBookInstances("Death Wave");
