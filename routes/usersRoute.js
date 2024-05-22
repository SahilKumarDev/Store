const express = require("express")
const router = express.Router()

router.get("/", function (req, res) {
  res.send("It is User Test")
})



module.exports = router