
const chalk = require('chalk');

function log(...args) {
  // eslint-disable-next-line no-console
  console.log(chalk.gray(args));
}

function info(...args) {
  // eslint-disable-next-line no-console
  console.log(chalk.green(args));
}

function step(...args) {
  // eslint-disable-next-line no-console
  console.log(chalk.bgYellow(args));
}


function error(...args) {
  // eslint-disable-next-line no-console
  console.log(chalk.red(args));
}

export { log, info, error, step };
