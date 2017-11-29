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

export function parsePathAndName(pathAndName) {
  if (!pathAndName.endsWith(path.sep)) { // 结尾为新文件名或新目录名
    return {
      pathName: path.dirname(pathAndName),
      fileName: path.basename(pathAndName),
    };
  } // 结尾为目标目录
  return {
    pathName: path.resolve(pathAndName),
  };
}

export function buildPathAndName(config, params) {
  if (params[0]) {
    const { pathName, fileName } = parsePathAndName(params[0]);
    return {
      pathName,
      fileName: fileName || path.basename(config.templatePath),
    };
  }
  return {
    pathName: path.resolve('.'),
    fileName: path.basename(config.templatePath),
  };
}
