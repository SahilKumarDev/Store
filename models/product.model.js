const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  // // TODO These are the things we need to Create for a backend model
  // - Name = String
  // - Price = Number
  // - Discount = Number
  // - Image = db/String
  // - BgColor = String
  // - PanelColor = String
  // - TextColor = String


  // // TODO :- Created from here
  name: {
    require: true,
    type: String,
  },
  price: {
    require: true,
    type: Number,
  },
  discount: {
    type: Number,
    default: 0
  },
  image: {
    require: true,
    type: String,
  },
  bgColor: {
    type: String,
    default: "#fff000"
  },
  panelColor: {
    type: String,
    default: "#fff000"
  },
  textColor: {
    type: String,
    default: "#fff000"
  }
})

module.exports = mongoose.model("product", productSchema);