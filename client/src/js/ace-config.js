'use strict';

var ace = window.ace,
    JavaScriptMode = ace.require('ace/mode/javascript').Mode,
    XmlScriptMode = ace.require('ace/mode/xml').Mode,
    editor = ace.edit('editor');

editor.setTheme('ace/theme/theme-tomorrow');
// editor.session.setMode(new JavaScriptMode());
editor.session.setMode(new XmlScriptMode());