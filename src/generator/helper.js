import cmdPaths from './generator-path';
import { info } from '../utils/log';

const path = require('path');

export function printGeneratorHelper() {
  info('Available generator commands: ');
  cmdPaths.forEach(({ cmd, desc }) => {
    info(`\t${cmd} - ${desc}`);
  });
}

export function getCmdConfig(cmd) {
  return cmdPaths.find(config => config.cmd === cmd);
}

export function buildPathAndName(config, targetPath) {
  let pathName = path.resolve('.');
  let fileName = 'none';
  if (targetPath && !targetPath.endsWith(path.sep)) {
    pathName = path.dirname(targetPath);
    fileName = path.basename(targetPath);
  } else if (targetPath && targetPath.endsWith(path.sep)) {
    pathName = targetPath;
    fileName = path.basename(config.templatePath);
  }
  return {
    pathName: path.resolve(pathName),
    fileName,
  };
}
