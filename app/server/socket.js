/*global define, require */
define('app/server/socket', ['app/server/webapp', 'socket.io'], function(WebApp, SocketIO) {

  var io;

  return {

    init: function() {
      io = SocketIO.listen(WebApp.getApp());
      io.sockets.on('connection', function (socket) {
        socket.emit('news', { hello: 'world' });
        socket.on('my other event', function (data) {
          console.log(data);
        });
      });
    }

  };

});
