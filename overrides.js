// Globally override some properties to make the library work

// Fool the XMPP library to believe that it runs in a browser
process.browser = true;

// Set the prototype to an empty object of the resulting stream instance. When
// the prototype property of a constructor is undefined, Object.create() fails.
// This fix should only be applied if the runtime provides a 'stream' module,
// which is the reason why we wrap it into a try-catch block...

try {
    var stream = require('st' + 'ream');
    stream.prototype = {};
} catch(ex) {
    // Just ignore if it didn't work
}
