# requiredetextify [![Build Status](https://secure.travis-ci.org/ScottWeinstein/requiredetextify.png?branch=master)](http://travis-ci.org/ScottWeinstein/requiredetextify)

This is a browserify transform which converts [RequireJS](http://requirejs.org/) `require('text!...)` calls. Use with [brfs](https://github.com/substack/brfs). The use case for this module are codebases which need to simultaneously support RequireJS and browserify.

## Usage

1. Install the module with: `npm install requiredetextify`
2. Run browserify transforms `requiredetextify` and `brfs`

        "browserify": {
            "transform": [
                "requiretextify",
                "brfs"
            ]
        }
