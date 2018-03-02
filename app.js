const express = require("express"),
      bodyParser = require("body-parser"),
      PORT       = process.env.PORT || 3000,
      app        = express(),
      path       = require('path'),
      morgan     = require('morgan');
      
require('dotenv').config();

//Set Up Database mongo DB
const mongoose = require('mongoose');
require('./config/database')(mongoose);

//Set Up My App
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use("/public", express.static(path.join(__dirname, 'public')));

var indexUrl = require('./routes/index');

app.use('/', indexUrl);
app.listen(PORT, console.log("RUNINNG ON PORT 127.0.0.1:"+PORT));