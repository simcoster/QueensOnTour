var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var QueenSchema = new Schema({
  id: ObjectId,
  name: { type: String, required: false },
  website: { type: String, required: false },
  events: [ {type : mongoose.Schema.ObjectId, ref : 'Event'}]
});

module.exports = mongoose.model('Queen', QueenSchema);
