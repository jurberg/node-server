/*global define, console, process */
define(function() {
  'use strict';

  var callbacks = [];

  // terminator === the termination handler.
  function terminator(sig) {
    callbacks.forEach(function(callback) { callback(); });
    if (typeof sig === "string") {
      console.log('%s: Received %s - terminating Node server ...', Date(Date.now()), sig);
      process.exit(1);
    }
    console.log('%s: Node server stopped.', Date(Date.now()));
  }

  // Process on exit and signals.
  process.on('exit', function() { terminator(); });

  ['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT', 'SIGBUS',
    'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGPIPE', 'SIGTERM'].forEach(function(element, index, array) {
    process.on(element, function() { terminator(element); });
  });

  return {
    addCallback: function(callback) {
      callbacks.push(callback);
    }
  };

});