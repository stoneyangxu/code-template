#!/usr/bin/env node
'use strict';

const program = require('commander');
const chalk = require('chalk');
const genEditorConfig = require('../lib/generator/gen-editorconfig').default

program
  .usage('<command> [options]')
  .on('--help', printHelp)
  .parse(process.argv);


console.log(chalk.blue(JSON.stringify(program.args)))

const argv = program.args

if (argv.length < 2) {
  program.help()
  process.exit(0)
}

if (argv[0] === 'g' && argv[1] === 'editorconfig') {
  genEditorConfig(argv[2])
}

function printHelp() {
  console.log('  Commands:');
  console.log();
  console.log('    init           Init a new dva application in the current folder');
  console.log('    new            Creates a new application');
  console.log('    generate       Generates new code (short-cut alias: "g")');
  console.log();
  console.log('  All commands can be run with -h (or --help) for more information.')
}

