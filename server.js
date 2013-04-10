#!/bin/env node
var requirejs = require('requirejs');

requirejs.config({
  nodeRequire: require
});

requirejs([
  'app/server/cache',
  'app/server/database',
  'app/server/webapp'
], function(Cache, Database, WebApp) {
  'use strict';

  [Cache, Database, WebApp].forEach(function(mod) {
    mod.init();
  });

  WebApp.listen();

});
