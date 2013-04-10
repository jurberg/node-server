/*global define, process */
define(['mongodb', 'app/server/shutdown', 'app/config/config'], function(MongoDb, Shutdown, Config) {
  'use strict';

  var db;

  return {

    init: function() {
      var self = this,
        server = new MongoDb.Server(Config.mongo.host, Config.mongo.port, Config.mongo.settings);
      db = new MongoDb.Db('vetpims', server, {w: 1});
      db.open(function (error, db) {
        Shutdown.addCallback(self.close);
        db.authenticate(Config.mongo.user, Config.mongo.pwd, function(err, db) {});
      });
    },

    collectionToArray: function(coll, callback) {
      var collection = db.collection(coll);
      collection.find().toArray(callback);
    },

    close: function() {
      db.close();
    }

  };

});
