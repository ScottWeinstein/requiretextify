'use strict';

var rx = /require\([\"|\']text!([\w|\\|\/|\.]+)[\"|\']\)/g;
module.exports = function(src) {
  var replace = src.replace(rx, 'fs.readFileSync(__dirname + "/" + "$1", "utf8")');
  return (replace !== src) ? '(function(){var fs=require("fs");})();' + replace : src;
};
