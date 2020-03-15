require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const Sentry = require('@sentry/node');
require('./models/UrlShorten');

Sentry.init({ dsn: process.env.SENTRY_DSN });
const app = express();
const PORT = process.env.PORT || 3000;
const mongoURI = process.env.MONGODB_URI;
mongoose.Promise = global.Promise;

const connectOptions = {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
  useNewUrlParser: true,
};

mongoose.connect(mongoURI, connectOptions, (err, db) => {
  if (err) console.log(`Error`, er);
  console.log(`Connected to MongoDB`);
});

app.listen(PORT, () => {
 console.log(`Server started on port`, PORT);
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.header(
      "Access-Control-Allow-Headers",
      "Content-type,Accept,x-access-token,X-Key"
    );
    if (req.method == "OPTIONS") {
      res.status(200).end();
    } else {
      next();
    }
});
app.use(bodyParser.json());
app.use(express.static('client/build'));

require("./routes/urlshorten")(app);