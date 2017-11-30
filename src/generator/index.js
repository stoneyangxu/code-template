import { compile, walkSync, replaceMustacheFileName, addSurfix } from '../utils/boilerplates';
import { info } from '../utils/log';
import { getCmdConfig, buildPathAndName, printGeneratorHelper } from './helper';
import { copyTo, writeTo } from '../utils/copy-utils';

const fs = require('fs');

function compileFile(file, data) {
  const newFilePath = replaceMustacheFileName(file, data);
  const compiled = compile(newFilePath, data);
  writeTo(newFilePath, compiled);
}

export default function ([cmd, ...params]) {
  const config = getCmdConfig(cmd);

  if (!config) {
    printGeneratorHelper();
    return;
  }

  const { pathName, fileName } = buildPathAndName(config, params);

  info(`name: ${fileName}, target path: ${pathName}, template: ${config.templatePath}`);
  // copy to target path
  const target = copyTo(config.templatePath, pathName, fileName);

  if (!target) {
    return;
  }

  const data = addSurfix({ name: fileName });

  if (fs.statSync(target).isDirectory()) {
    walkSync(target, file => compileFile(file, data));
  } else {
    compileFile(target, data);
  }
}
