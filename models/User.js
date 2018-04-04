const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  local: {
        name: String,
        email: String,
        password: String,
        date: {
          type: Date,
          default: Date.now
    }
  }

  // googleID:{
  //   type: String,
  //   required:true
  // },
  // email:{
  //   type: String,
  //   required:true
  // },
  // firstName:{
  //   type:String
  // },
  // lastName:{
  //   type:String
  // },
  // image:{
  //   type:String
  // }
});

// Create collection and add Schema
mongoose.model('users', UserSchema);
