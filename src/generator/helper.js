import cmdPaths from './generator-path';
import { error, info } from '../utils/log';

const fs = require('fs');

export function printGeneratorHelper() {
  info('Available generator commands: ');
  cmdPaths.forEach(({ cmd, desc }) => {
    info(`\t${cmd} - ${desc}`);
  });
}

export function getCmdConfig(cmd) {
  return cmdPaths.find(config => config.cmd === cmd);
}

export function isValidConfig(cmdConfig) {
  if (!cmdConfig) {
    error('invalid command config', cmdConfig);
    printGeneratorHelper();
    return false;
  }

  const { path } = cmdConfig;
  if (!path || !fs.existsSync(path)) {
    error('invalid file path', cmdConfig);
    return false;
  }

  return true;
}

export function isMustache(cmdConfig) {
  if (!isValidConfig(cmdConfig)) {
    return false;
  }

  return cmdConfig.path.includes('.mustache.');
}
