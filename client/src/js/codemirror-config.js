'use strict';

var requirejs = window.require;

require('./requirejs-config')(requirejs);

requirejs([
    'cm/lib/codemirror',
    'cm/mode/xml/xml'
], function (CodeMirror) {
    CodeMirror.fromTextArea(window.document.getElementById('editor'), {
        lineNumbers: true,
        mode: 'xml'
    });
});