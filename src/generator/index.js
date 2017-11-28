import { compile, buildFileName, compilePath } from '../utils/boilerplates';
import { info } from '../utils/log';
import { getCmdConfig, buildPathAndName } from './helper';
import { copyTo, writeTo } from '../utils/copy-utils';

const path = require('path');

export default function ([cmd, ...params]) {
  console.log(cmd, params);

  const config = getCmdConfig(cmd);
  const { pathName, fileName } = buildPathAndName(config, params);

  info(`name: ${fileName}, target path: ${pathName}, template: ${config.templatePath}`);
  // copy to target path
  copyTo(config.templatePath, pathName, fileName);

  // if (isMustache(config)) {

  //   compilePath(config.templatePath, {fileName})

  //   // const compiled = compile(config.path, { name: fileName });
  //   // const newName = buildFileName(config.path, fileName);
  //   // writeTo(compiled, newName, pathName);
  // } else if (isValidConfig(config)) {
  //   copyTo(config.path, fileName, pathName);
  // }
}
