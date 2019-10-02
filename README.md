# Events
Inspired by Laravel and Node.js. Events help you to integrate an event and listener mechanism right into the **Javascript** or **Node.js application**. Did we mention it's flexible? **Register and emit events, Your Way!** and *Not to forget, It's Typescript Ready*.

## Installation
Installing Events is just one command.

```
npm install nodepackages/Events
```

## Examples

#### Index.js

```
import { Emitter } from 'Events';
import SendWelcomeMail from './Listeners/SendWelcomeMail';
import UserRegistered from './Events/UserRegistered';

// Emitter allows you to register or bind the listener to an event in multiple ways.
const emitter = new Emitter({
    listen: [
        {
            event: 'UserRegistered', // Class Name passed as a string.
            handlers: [
                new SendWelcomeMail
            ]
        },

        {
            event: 'account-activated', // You can also supply a simple name for the event.
            handlers: [
                function (event, user) {
                    console.log(`Hello, ${ user.name }`);
                }
            ],
        }
    ]
});

// Of course, You're free to register the event at any given time.
emitter.on('account-deactivated', function () {
    // Do Something.
});

const user = ...;

// One way to emit the event is by supplying the class and its data into it.
// Then storing the data in the public of the event so you can use it as
// `event.user.name` in the handle method of your listener.
emitter.emit(new UserRegistered(user));

// The other way is to emit the event and pass the arguments if needed.
emitter.emit('account-activated', user);
```

#### Events/UserRegistered.js

```
export default class UserRegistered {
    constructor(user) {
        this.user = user;
    }
}
```

#### Listeners\SendWelcomeMail.js

```
export default class SendWelcomeMail {
    handle(event) {
        // Accessing public property of the event.
        console.log(`Hello, ${ event.user.name }!`);

        // Do something ...
    }
}
```

## Credits

- [Abhishek Prakash](https://github.com/abhishek6262)

## Contributing
Please feel free to fork this package and contribute by submitting a pull request to enhance the functionality. I will appreciate that a lot. Also please add your name to the credits.

Kindly [follow me on twitter](https://twitter.com/_the_shade)!

## Support
Moreover, To keep this and my other open source projects ongoing You can also support me on Patreon by clicking on the button below.

[<img src="https://c5.patreon.com/external/logo/become_a_patron_button.png">](https://www.patreon.com/bePatron?u=5563585)

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.