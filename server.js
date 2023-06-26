// ./server.js
/*
 * Initialise Express
 */
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

/*
 * Initialise Pusher
 */
const Pusher = require('pusher');
const pusher = new Pusher({
  appId: '1624709',
  key: 'a6ef665a2ac6b4aaf716',
  secret: 'e329e25488bc234a1c0c',
  cluster: 'ap3',
  useTLS: true,
});

/*
 * Define post route for creating new reviews
 */
app.post('/release-alarm', (req, res) => {
  pusher.trigger('my-channel', 'my-event', { alarm: req.body });
  res.status(200).send();
});

/*
 * Run app
 */
const port = 5000;
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
