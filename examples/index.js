// Example in Node.js
const Emitter         = require('./../lib').Emitter;
const SendWelcomeMail = require('./Listeners/SendWelcomeMail');
const UserRegistered  = require('./Events/UserRegistered');

const emitter = new Emitter({
  listen: [
    {
      event: 'UserRegistered',
      handlers: [
        new SendWelcomeMail,
      ]
    }
  ]
});

const user = {
  username: 'Abhishek Prakash',
};

emitter.emit(new UserRegistered(user));
