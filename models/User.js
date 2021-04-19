<<<<<<< HEAD
const mongoose = require('mongoose');
=======
const mongoose = require("mongoose");
>>>>>>> 9bde762b0b68db06166a50aa2d5d307f3928ed5b
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
<<<<<<< HEAD
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

module.exports = User = mongoose.model('User', UserSchema);
=======
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("user", UserSchema);
module.exports = User;
>>>>>>> 9bde762b0b68db06166a50aa2d5d307f3928ed5b
