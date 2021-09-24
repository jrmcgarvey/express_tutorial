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

// async function deleteEntries() {
// var count = await BookInstance.deleteMany({});
// console.log(count, " book instances deleted");
// count = await Genre.deleteMany({});
// console.log(count," genres deleted")
// count = await Author.deleteMany({});
// console.log(count, " authors deleted")
// count = await Book.deleteMany({});
// console.log(count, " books deleted")
// console.log("got here")
// // All done, disconnect from database]
// mongoose.connection.close();
// }
//
// deleteEntries();

function deleteAll(cb) {
async.series([
  function(callback) {
    Book.deleteMany({},{},callback)
  },
  function(callback) {
    Genre.deleteMany({},{},callback)
  },
  function(callback) {
    Author.deleteMany({},{},callback)
  },
  function(callback) {
    BookInstance.deleteMany({},{},callback)
  }
], cb);
};

deleteAll(function(err, results){
  console.log("at here");
  if (err) {
      console.log('FINAL ERR: '+err);
  }
  else {
      console.log('FINAL RESULTS: ', results);
  }
  // All done, disconnect from database
  mongoose.connection.close();
});
