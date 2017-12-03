import { warkSyncAndCompile, addSurfix } from '../utils/boilerplates';
import { info } from '../utils/log';
import { getCmdConfig, printGeneratorHelper } from './helper';
import { copyTo } from '../utils/copy-utils';

const path = require('path');

export default function (cmd, targetPath, params) {
  const config = getCmdConfig(cmd);

  if (!config) {
    printGeneratorHelper();
    return;
  }

  const pathName = path.resolve(targetPath || '.');
  const data = addSurfix({ name: params.name || 'None' });

  info(`target path: ${pathName}`);
  // copy to target path
  const target = copyTo(config.templatePath, pathName);
  if (!target) {
    return;
  }

  warkSyncAndCompile(target, data);
}
