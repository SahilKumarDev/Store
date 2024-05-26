const mongoose = require('mongoose')
const config = require("config")

const dbgr = require("debug")("development:mongoose");
// export DEBUG=development:* // This command is to use debugger


mongoose.connect(`${config.get("MONGO_URI")}/store`).then(function () {
  dbgr("Connected")
  // console.log("connected successfully");
}).catch((err) => {
  dbgr("Error", err)
  // console.log("Error while connected", err);
})

module.exports = mongoose.connection;