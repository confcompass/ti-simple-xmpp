Titanium Simple XMPP
====================
Simple High Level Titanium XMPP Library (ported from
[node-simple-xmpp](https://github.com/simple-xmpp/node-simple-xmpp)).

Install
-------
Copy the `ti-simple-xmpp-commonjs-0.0.1.zip` file into the root folder of your
Titanium project.

Then modify `tiapp.xml` to include the following module requirement:

```xml
<module platform="commonjs">ti-simple-xmpp</module>
```

Additionally, the library requires the presence of the 
[Websockets for Titanium library](https://github.com/omorandi/tiws).
The module must be added to `tiapp.xml` as well:

```xml
<module platform="iphone">net.iamyellow.tiws</module>
```

Building
--------
If any source code file or dependency has changed, the Zip file must be rebuilt.

First, obtain all required NPM package dependencies, by running:

    $ npm install
    
Then obtain [Titaniumifier](https://github.com/smclab/titaniumifier) and run the
following command-line instruction to compose a Titanium module package:

    $ titaniumifier

The above command yields a newly built `ti-simple-xmpp-commonjs-*.zip` file.

Example
-------

```javascript
var xmpp = require('ti-simple-xmpp').SimpleXMPP;

xmpp.on('online', function(data) {
    console.log('Connected with JID: ' + data.jid.user);
    console.log('Yes, I\'m connected!');
});

xmpp.on('chat', function(from, message) {
    xmpp.send(from, 'echo: ' + message);
});

xmpp.on('error', function(err) {
    console.error(err);
});

xmpp.on('subscribe', function(from) {
if (from === 'a.friend@gmail.com') {
    xmpp.acceptSubscription(from);
    }
});

xmpp.connect({
	jid					: username@gmail.com,
	password		: password,
	host				: 'talk.google.com',
	port				: 5222
});

xmpp.subscribe('your.friend@gmail.com');
// check for incoming subscription requests
xmpp.getRoster();
```

Documentation
-------------
The API of this library is identical to
[Node Simple XMPP](https://github.com/simple-xmpp/node-simple-xmpp)

License
-------
Like the Simple XMPP package, this library is
[MIT](http://www.opensource.org/licenses/mit-license.php) licensed.

Acknowledgements
----------------
This package embeds a replacement `XmlHttpRequest` implementation (`xhr.js`)
that is taken from [XHR](https://github.com/raulriera/XHR). The `xhr.js` file is
MIT licensed.
