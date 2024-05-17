const mongoose = require('mongoose')

mongoose.connect(process.env.MONGOO_URI);

const userSchema = mongoose.Schema({
  // // TODO These are the things we need to Create for a backend model

  // - Full Name = String
  // - Email = String
  // - Password = String
  // - Cart = Array
  // - isAdmin = Boolean
  // - orders = Array
  // - Contact = Number
  // - Image = String/db


  // // TODO :- Created from here
  fullname: {
    require: true,
    type: String,
  },
  email: {
    require: true,
    type: String,
  },
  password: {
    require: true,
    type: String,
  },
  cart: {
    type: Array,
    default: []
  },
  isAdmin: {
    type: Boolean
  },
  orders: {
    type: Array,
    default: []
  },
  contact: {
    type: Number,
  },
  image: {
    require: true,
    type: String,
  }
})

module.exports = mongoose.model("user", userSchema);