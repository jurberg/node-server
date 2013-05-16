/*global define, require, console, process, __dirname */
define(['express', 'fs', 'app/config/urlMappings', 'app/config/config'], function(Express, Fs, UrlMappings, Config) {
  'use strict';

  var app;

  return {

    init: function() {

      app = Express.createServer();

      app.use(Express.favicon('./public/favicon.ico', { maxAge: 2592000000 }));

      UrlMappings.config.forEach(function(mapping) {
        app[mapping.verb](mapping.route, function(req, res) {
          require(['app/controller/' + mapping.controller], function(Controller) {
            Controller[mapping.action](req, res);
          });
        });
      });

      app.all('/:controller/:action/:id?', function(req, res) {
        require(['app/controller/' + req.params.controller], function(Controller) {
          Controller[req.params.action](req, res);
        });
      });

      app.all('/:controller', function(req, res) {
        require(['app/controller/' + req.params.controller], function(Controller) {
          Controller.index(req, res);
        });
      });

    },

    getApp: function() {
      return app;
    },

    listen: function() {

      //  And start the app on that interface (and port).
      app.listen(Config.web.port, Config.web.ip, function() {
        console.log('%s: Node (version: %s) %s started on %s:%d ...',
          Date(Date.now()), process.version, process.argv[1], Config.web.ip, Config.web.port);
      });

    }

  };

});