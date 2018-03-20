const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({

});

// Create collection and add Schema
mongoose.model('trips', UserSchema);
