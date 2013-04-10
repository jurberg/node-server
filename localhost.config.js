/*global define */
define(function() {
  'use strict';
  return {

    redis: {
      host: 'localhost',
      port: 6379
    },

    mongo: {
      host: 'localhost',
      port: 27017,
      user: 'admin',
      pwd: 'dqTVqsvPsFss',
      settings: {
        'auto_reconnect': true,
        'poolSize': 5
      }
    },

    web: {
      ip: 'localhost',
      port: 8080
    }

  };
});