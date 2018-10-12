var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
    EventSchema = require('./Event.js')

var QueenSchema = new Schema({
  id: ObjectId,
  name: { type: String, required: true },
  website_url: { type: String, required: false },
  events: [ EventSchema]
});

module.exports = mongoose.model('Queen', QueenSchema);
