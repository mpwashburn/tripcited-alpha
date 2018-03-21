const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({

  trip:{
    createdDate: date(),
    title:{
      image:String,
      video:String,
      name:String,
      date:String,
    },
    place:{[
      {
        type:String
        
      }
    ]}
    companions:{[]},// A reference to other prolies and some of their details
    role{
      admin:{[]},
      viewer:{[]}, // Maybe just can comment, chat, vote, etc.. within main itinerary
    },
    locations:{[]},

  }

});

// Create collection and add Schema
mongoose.model('trips', UserSchema);
