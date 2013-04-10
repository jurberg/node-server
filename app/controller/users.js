/*global define */
define(['app/server/database'], function(Database) {
  'use strict';

  return {

    index: function(req, res) {
      var data = '<html><head><title>Mongo DB Test</title></head><body>Users:<br/>';
      Database.collectionToArray('users', function(err, items) {
        if (items) {
          items.forEach(function(item) {
            data += '-' + item.userid + '<br/>';
          });
        }
        data += '</body></html>';
        res.send(data, {'Content-Type':'html'});
      });
    }

  };

});