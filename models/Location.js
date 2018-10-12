var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
    EventSchema = require('./Event.js')

var LocationSchema = new Schema({
  id: ObjectId,
  name: { type: String, required:true },
  coordiate_north: { type: String, required:true },
  coordiate_west: { type: String, required:true },
  events: [ EventSchema ]
});

module.exports = mongoose.model('Location', LocationSchema);
