const express = require('express');
const app = express();
const ownersRoute = require('./routes/ownersRoute')
const usersRoute = require('./routes/usersRoute')
const productsRoute = require('./routes/productsRoute')

const cookiesParser = require('cookie-parser')
const path = require('path')

// Mongoose DataBase
const db = require("./config/mongooseConnection")

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cookiesParser())
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')

// Routes
app.use("/owner", ownersRoute);
app.use("/user", usersRoute);
app.use("/products", productsRoute);


app.listen(3000)