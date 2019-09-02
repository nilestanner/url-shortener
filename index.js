require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const mongoURI = process.env.MONGODB_URI;
const mongoose = require("mongoose");
const connectOptions = {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE
};
mongoose.Promise = global.Promise;
mongoose.connect(mongoURI, connectOptions, (err, db) => {
  if (err) console.log(`Error`, er);
  console.log(`Connected to MongoDB`);
});

app.listen(PORT, () => {
 console.log(`Server started on port`, PORT);
});