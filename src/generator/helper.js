import cmdPaths from './generator-path';
import { error, info } from '../utils/log';

const fs = require('fs');
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

export function isValidConfig(cmdConfig) {
  if (!cmdConfig) {
    error('invalid command config', cmdConfig);
    printGeneratorHelper();
    return false;
  }

  const { templatePath } = cmdConfig;
  if (!templatePath || !fs.existsSync(templatePath)) {
    error('invalid file path', templatePath, JSON.stringify(cmdConfig));
    return false;
  }

  return true;
}

export function isMustache(cmdConfig) {
  if (!isValidConfig(cmdConfig)) {
    return false;
  }

  return cmdConfig.templatePath.includes('.mustache.') || cmdConfig.templatePath.endsWith('.mustache');
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
  let pathName = path.resolve('.');
  let fileName = path.basename(config.templatePath);

  // parse target path and new filename(name)
  if (params[0]) {
    const pathAndName = parsePathAndName(params[0]);
    pathName = pathAndName.pathName;
    fileName = pathAndName.fileName || fileName;
  }

  return { pathName, fileName };
}
