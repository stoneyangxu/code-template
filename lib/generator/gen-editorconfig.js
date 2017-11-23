'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (destPath) {
  var absolutePath = '';
  if (destPath) {
    absolutePath = path.resolve(destPath);
  } else {
    absolutePath = __dirname;
  }

  if (!fs.existsSync(absolutePath)) {
    console.log(chalk.red('target path not exist: ' + absolutePath));
    return;
  }

  if (!fs.existsSync(templateFile)) {
    console.log(chalk.red('template file not exist: ' + templateFile));
  }

  fs.copyFileSync(templateFile, path.resolve(absolutePath, '.editorconfig'));
};

var path = require('path');
var fs = require('fs');
var chalk = require('chalk');

var templateFile = path.resolve(__dirname, '../../boilerplates', '.editorconfig');