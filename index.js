'use strict';

var requiretextify = require('./lib/requiredetextify.js');
var through = require('through2');

var debug = false;

module.exports = function (file) {
  return through(function (buf, enc, next) {
    var transformed = requiretextify(buf.toString('utf8'));
    if (debug) {
      console.log(file, transformed);
    }
    this.push(transformed);
    next();
  });
};
