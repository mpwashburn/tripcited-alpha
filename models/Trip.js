const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TripSchema = new Schema ({
  title: {
    type: String,
    required: true
  },
  destination: {
    type:String,
    required:true
  },
  dates: {
    type: String,
  },
  description: {
    type: String,
  },
  visiblity: {
    type: String,
  },
  createDate:{
    type:Date,
    default: Date.now()
  }
});

// Create collection and add Schema
mongoose.model('trips', TripSchema);
