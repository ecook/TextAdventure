/**
 * Created by Ed on 8/5/2015.
 */
var Hapi = require('hapi');

// Create a server with a host and port
var server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8398
});

// Add the route
server.route({
    method: 'GET',
    path:'/',
    handler: function (request, reply) {
            reply.file('index.html');
    }
});

server.route({
    method: 'GET',
    path:'/src/{scriptname}.js',
    handler: function (request, reply) {
        reply.file('src/' + request.params.scriptname + '.js');
    }
});

server.route({
    method: 'GET',
    path:'/{scriptname}.css',
    handler: function (request, reply) {
        reply.file(request.params.scriptname + '.css');
    }
});

// Start the server
server.start();