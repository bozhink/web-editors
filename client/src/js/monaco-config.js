'use strict';

var requirejs = window.require;

require('./requirejs-config')(requirejs);

requirejs(['vs/editor/editor.main'], function () {
    var monaco = window.monaco,
        editor = monaco.editor.create(document.getElementById('editor-container'), {
        value: [
            'function x() {',
            '\tconsole.log("Hello world!");',
            '}'
        ].join('\n'),
        language: 'javascript',
        theme: 'vs'
    });
});