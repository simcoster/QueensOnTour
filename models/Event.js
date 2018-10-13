var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var EventSchema = new Schema({
  id: ObjectId,
  name: { type: String, required:false },
  location: {type : mongoose.Schema.ObjectId, ref : 'Location'},
  queens: [ {type : mongoose.Schema.ObjectId, ref : 'Queen'} ]
});

module.exports = mongoose.model('Event', EventSchema);
