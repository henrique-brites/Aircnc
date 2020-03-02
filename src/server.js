require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

mongoose.connect(
  process.env.MONGO_URL,
  {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
  }
);

const app = express();

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333);