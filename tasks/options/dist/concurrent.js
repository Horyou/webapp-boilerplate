/* global module */
'use strict';

module.exports = {
  serve: {
    tasks: [
      'handlebars',
      'style',
      'imagemin',
      'htmlmin'
    ]
  },
  build: {
    tasks: [
      'handlebars',
      'style',
      'buildit'
    ]
  },
  lib: {
    tasks: [
      'handlebars',
      'style',
      'requirejs:lib'
    ]
  }
};
