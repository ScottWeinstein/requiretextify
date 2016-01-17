# requiredetextify [![Build Status](https://secure.travis-ci.org/ScottWeinstein/requiredetextify.png?branch=master)](http://travis-ci.org/ScottWeinstein/requiredetextify) [![npm version](https://badge.fury.io/js/requiredetextify.svg)](http://badge.fury.io/js/requiredetextify) [![Dependency Status](https://david-dm.org/scottweinstein/requiredetextify.svg)](https://david-dm.org/)


This is a browserify transform which converts [RequireJS](http://requirejs.org/) `require('text!...)` calls. Use with [brfs](https://github.com/substack/brfs). The use case for this module are codebases which need to simultaneously support RequireJS and browserify.

## Usage

1. [npm install requiredetextify](https://www.npmjs.com/package/requiredetextify)
2. Run browserify transforms `requiredetextify` and `brfs`

        "browserify": {
            "transform": [
                "requiredetextify",
                "brfs"
            ]
        }
