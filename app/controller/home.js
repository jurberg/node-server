/*global define */
define(['fs'], function (Fs) {
  'use strict';

  var page = Fs.readFileSync('./index.html');

  return {
    index: function(req, res) {
      res.send(page, {'Content-Type': 'text/html'});
    }
  };

});