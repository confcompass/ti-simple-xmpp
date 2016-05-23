var tiws = require('net.iamyellow.tiws');

function WebSocket() {
    this.ws = tiws.createWS();
    var url = arguments[0];
    this.ws.open(url);

    var self = this;
    
    this.ws.addEventListener('open', function(ev) {
        self.onopen(ev);
    });
    
    this.ws.addEventListener('close', function() {
        self.onclose();
    });
    
    this.ws.addEventListener('error', function(err) {
        self.onerror(err);
    });
    
    this.ws.addEventListener('message', function(ev) {
        self.onmessage(ev);
    });
}

WebSocket.prototype.send = function(message) {
    return this.ws.send(message);
};

WebSocket.prototype.close = function() {
    return this.ws.close();
};

if(global.window === undefined) {
    global.window = {};
}

global.window.WebSocket = module.exports = WebSocket;
