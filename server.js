#!/bin/env node
var requirejs = require('requirejs');

requirejs.config({
  nodeRequire: require
});


requirejs([
  'app/server/cache',
  'app/server/database',
  'app/server/webapp',
  'app/server/socket'
], function(Cache, Database, WebApp, Socket) {
  'use strict';

  [Cache, Database, WebApp, Socket].forEach(function(mod) {
    mod.init();
  });

  WebApp.listen();

});
