const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TripSchema = new Schema ({
  title: {
    type: String,
    required: true
  },
  destination: {
    type:String
  },
  dates: {
    type: String
  },
  titleBkgrndImg: {
    type:String
  },
  description: {
    type: String
  },
  visibility: {
    type: String
  },
  createDate:{
    type:Date,
    default: Date.now()
  },
  name: {
    type: String
  }
});

// Create collection and add Schema
mongoose.model('trips', TripSchema);
