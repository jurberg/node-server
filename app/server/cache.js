/*global define, process, console */
define(['redis', 'app/server/shutdown', 'app/config/config'], function(Redis, Shutdown, Config) {
  'use strict';

  var client;

  return {

    init: function() {

      client = Redis.createClient(Config.redis.port, Config.redis.host);

      Shutdown.addCallback(this.close);

      client.on("error", function (err) {
        console.error("REDIS Error " + err);
      });

      client.set("string key", "string val", Redis.print);
      client.hset("hash key", "hashtest 1", "some value", Redis.print);
      client.hset(["hash key", "hashtest 2", "some other value"], Redis.print);

    },

    getKey: function(key, callback) {
      client.hkeys(key, callback);
    },

    close: function() {
      client.quit();
    }

  };

});