const express = require('express');
const app = express();
const port = 3000;
const host = '0.0.0.0'
const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/music');
app.use(express.urlencoded());
app.use(express.json());

const musicRoute = require('./routes/musicRoute');
app.use('/musics', musicRoute);

const rateRoute = require('./routes/rateRoute');
app.use('/', rateRoute);

app.listen(port, host);