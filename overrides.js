// Globally override some properties to make the library work

// Fool the XMPP library to believe that it runs in a browser
process.browser = true;

// Set the prototype to an empty object of the result stream instance. When prototype is undefined, Object.create() fails
require('st' + 'ream').prototype = {};
