const mongoose = require('mongoose')

const ownerSchema = mongoose.Schema({
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
  products: {
    type: Array,
    default: []
  },
  picture: {
    type: String,
  },
  gstn: {
    type: String
  }
})

module.exports = mongoose.model("owner", ownerSchema);