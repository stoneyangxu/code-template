#!/usr/bin/env node
'use strict';

const program = require('commander');
const generator = require('../lib/generator').generator;
const printCommands = require('../lib/generator').printCommands;

function printHelp() {
  console.log();
  console.log('    g       Generates new code base on boilerplates');
  console.log();
  printCommands();
}

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
  generator(argv[1], argv[2], program);
}

