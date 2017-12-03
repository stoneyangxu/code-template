#!/usr/bin/env node
'use strict';

const program = require('commander');
const chalk = require('chalk');
const genEditorConfig = require('../lib/generator').default;

program
  .usage('<command> [options]')
  .option('-n, --name <n>', 'name')
  .option('-v, --variable <key1=value1,key2=value2,key3=value3...>', 'custom variables')
  .on('--help', printHelp)
  .parse(process.argv);


const argv = program.args;

if (argv.length < 2) {
  program.help();
  process.exit(0);
}

if (argv[0] === 'g') {
  genEditorConfig(argv[1], argv[2], program);
}

function printHelp() {
  console.log('  Commands:');
  console.log();
  console.log('    g       Generates new code base on boilerplates');
  console.log();
  console.log('  All commands can be run with -h (or --help) for more information.')
}

