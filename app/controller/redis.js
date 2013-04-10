/*global define */
define(['app/server/cache'], function(Cache) {
  'use strict';

  return {

    index: function(req, res) {
      Cache.getKey("hash key", function (err, replies) {
        var data = '<html><head><title>Redis Test</title></head><body>' + replies.length + " replies:<br/>";
        replies.forEach(function (reply, i) {
          data += '-' + i + ': ' + reply + '<br/>';
        });
        data += '</body></html>';
        res.send(data, {'Content-Type': 'html'});
      });
    }

  };

});