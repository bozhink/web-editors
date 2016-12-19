'use strict';

var require = window.require;

require.config({
    paths: {
        'vs': '/nm/monaco-editor/min/vs'
    }
});

require(['vs/editor/editor.main'], function () {
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