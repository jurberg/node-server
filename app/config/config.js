/*global define, require, process */
define(function() {
  'use strict';

  var env = process.env.OPENSHIFT_APP_NAME || 'localhost';

  return require('./' + env + '.config.js');
});
