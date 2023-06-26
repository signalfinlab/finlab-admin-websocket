import * as Pusher from 'pusher';

const pusher = new Pusher({
  appId: '1624709',
  key: 'a6ef665a2ac6b4aaf716',
  secret: 'e329e25488bc234a1c0c',
  cluster: 'ap3',
  useTLS: true,
});

pusher.trigger('my-channel', 'my-event', {
  message: 'hello world',
});
