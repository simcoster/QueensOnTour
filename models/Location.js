var mongoose = require('mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var LocationSchema = new Schema({
  id: ObjectId,
  name: { type: String, required:true },
  coordiate_north: { type: String, required:true },
  coordiate_west: { type: String, required:true },
  events: [ {type : mongoose.Schema.ObjectId, ref : 'Event'} ]
});

module.exports = mongoose.model('Location', LocationSchema);
