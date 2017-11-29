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
  if (!pathAndName.endsWith(path.sep)) {
    return {
      pathName: path.dirname(pathAndName),
      fileName: path.basename(pathAndName),
    };
  } else {
    return {
      pathName: path.resolve(pathAndName),
    };
  }
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
