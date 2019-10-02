class SendWelcomeMail {
  handle(event) {
    console.log(`Hello, ${event.user.username}!`);
  }
}

module.exports = SendWelcomeMail;
