import { warkSyncAndCompile, addSurfix } from '../utils/boilerplates';
import { info } from '../utils/log';
import { getCmdConfig, buildPathAndName, printGeneratorHelper } from './helper';
import { copyTo } from '../utils/copy-utils';

export default function ([cmd, ...params]) {
  const config = getCmdConfig(cmd);

  if (!config) {
    printGeneratorHelper();
    return;
  }

  const { pathName, fileName } = buildPathAndName(config, params[0]);

  info(`name: ${fileName}, target path: ${pathName}, template: ${config.templatePath}`);
  // copy to target path
  const target = copyTo(config.templatePath, pathName, fileName);
  if (!target) {
    return;
  }

  const data = addSurfix({ name: fileName });
  warkSyncAndCompile(target, data);
}
