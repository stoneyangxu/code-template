#!/usr/bin/env node
'use strict';

const program = require('commander');
const chalk = require('chalk');
const genEditorConfig = require('../lib/generator').default;

program
  .usage('<command> [options]')
  .on('--help', printHelp)
  .parse(process.argv);


console.log(chalk.blue(JSON.stringify(program.args)));

const argv = program.args;

if (argv.length < 2) {
  program.help();
  process.exit(0);
}

if (argv[0] === 'g') {
  genEditorConfig(argv.slice(1));
}

function printHelp() {
  console.log('  Commands:');
  console.log();
  console.log('    g       Generates new code base on boilerplates');
  console.log();
  console.log('  All commands can be run with -h (or --help) for more information.')
}

