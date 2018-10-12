var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
    QueenSchema = require('./Queen.js');
    LocationSchema = require('./Location.js');


var EventSchema = new Schema({
  id: ObjectId,
  name: { type: String, required:false },
  location: LocationSchema,
  queens: [ QueenSchema ]
});

module.exports = mongoose.model('Event', EventSchema);
