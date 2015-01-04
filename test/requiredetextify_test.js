'use strict';

var requiredetextify = require('../lib/requiredetextify.js');

var assert = require('assert');

suite('requiredetextify', function() {

  test('index exposes function', function() {
    assert.equal(typeof(require('..')), 'function');
  });

  test('converts single require("text!...") calls to brfs', function() {
    var input = "var foo;\nvar html = require('text!foo.html');\nvar bar = 1;";
    var expected = '(function(){var fs=require("fs");})();var foo;\nvar html = fs.readFileSync(__dirname + "/" + "foo.html", "utf8");\nvar bar = 1;';
    assert.equal(requiredetextify(input), expected);
  });

  test('converts multiple require("text!...") calls to brfs', function() {
    var input = "var a=require('text!a.html'), b=require('text!b.html')";
    var expected = '(function(){var fs=require("fs");})();var a=fs.readFileSync(__dirname + "/" + "a.html", "utf8"), b=fs.readFileSync(__dirname + "/" + "b.html", "utf8")';
    assert.equal(requiredetextify(input), expected);
  });

  test('does not convert regular require calls', function() {
    var input = "var a=require('a.html')";
    assert.equal(requiredetextify(input), input);
  });


});
