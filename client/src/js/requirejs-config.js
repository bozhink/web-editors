'use strict';

module.exports = function (requirejs) {
    requirejs.config({
        packages: [{
            name: "cm",
            location: "/nm/codemirror/",
            main: "lib/codemirror"
        }],
        paths: {
            'vs': '/nm/monaco-editor/min/vs'
        }
    });
}