// ./server.js
/*
 * Initialise Express
 */
const express = require('express');
var cors = require('cors');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));
app.use(cors());

/*
 * Initialise Pusher
 */
const Pusher = require('pusher');
const pusher = new Pusher({
  appId: '1624709',
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: 'ap3',
  useTLS: true,
});

/*
 * Define post route for creating new reviews
 */
app.post('/release-alarm', (req, res) => {
  pusher.trigger('my-channel', 'my-event', req.body);
  res.status(200).send();
});

app.post('/release-alarm-manager-web', (req, res) => {
  pusher.trigger('managerWeb-channel', 'managerWeb-event', req.body);
  res.status(200).send();
});

/*
 * Run app
 */
const port = 3001;
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
