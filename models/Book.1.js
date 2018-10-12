var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  description: String,
  published_year: String,
  publisher: String,
  updated_date: { type: Date, default: Date.now },
});

var QueenSchema = new Schema({
  id: ObjectId,
  name: { type: String, required: true },
  website_url: { type: String, required: false },
  events: [ {type : mongoose.Schema.ObjectId, ref : 'Event'} ]
});

var EventSchema = new Schema({
  id: ObjectId,
  name: { type: String, required:false },
  location: {type : mongoose.Schema.ObjectId, ref : 'Location'},
  queens: [ {type : mongoose.Schema.ObjectId, ref : 'Queen'} ]
});

var LocationSchema = new Schema({
  id: ObjectId,
  name: { type: String, required:true },
  coordiate_north: { type: String, required:true },
  coordiate_west: { type: String, required:true },
  events: [ {type : mongoose.Schema.ObjectId, ref : 'Event'} ]
});

module.exports = mongoose.model('Book', BookSchema);
