const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/store").then(function() {
  console.log("connected successfully");
}).catch((err) => {
  console.log("Error while connected", err);
})

module.exports = mongoose.connection;