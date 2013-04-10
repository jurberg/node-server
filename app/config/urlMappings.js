/*global define */
define(function () {
  'use strict';
  return {
    config: [{
      verb: 'get',
      route: '/',
      controller: 'home',
      action: 'index'
    }]
  };
});