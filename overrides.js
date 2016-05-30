// Globally override some properties to make the library work

// Fool the XMPP library to believe that it runs in a browser
process.browser = true;

// Set the prototype to an empty object of the result stream instance. When
// prototype is undefined, Object.create() fails
// This fix should only be provided if the runtime provides a 'stream' module,
// which is the reason we wrap in into a try-catch block..

try {
    var stream = require('st' + 'ream');
    stream.prototype = {};
} catch(ex) {
    // Just ignore if it didn't work
}
