// ./server.js
/*
 * Initialise Express
 */
const express = require('express');
var cors = require('cors');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

var corsOptions = {
  origin: 'http://localhost:3001/',
  // 이 설정은 https://sub.example.app 인 origin을 허용합니다.
  // 어플리케이션 구성에 맞게 origin 규칙을 적용해주세요.
  optionsSuccessStatus: 200,
};

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
app.post('/release-alarm', cors(corsOptions), (req, res) => {
  pusher.trigger('my-channel', 'my-event', { alarm: req.body });
  res.status(200).send();
});

/*
 * Run app
 */
const port = 3001;
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
