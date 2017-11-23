#!/usr/bin/env node
'use strict';

const program = require('commander');
const chalk = require('chalk');

program
  .usage('<command> [options]')
  .on('--help', printHelp)
  .parse(process.argv);

console.log(chalk.blue(JSON.stringify(program.args)))

function printHelp() {
  console.log('  Commands:');
  console.log();
  console.log('    init           Init a new dva application in the current folder');
  console.log('    new            Creates a new application');
  console.log('    generate       Generates new code (short-cut alias: "g")');
  console.log();
  console.log('  All commands can be run with -h (or --help) for more information.')
}

