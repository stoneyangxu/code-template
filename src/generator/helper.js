import cmdPaths from './generator-path';
import { info } from '../utils/log';

export function printGeneratorHelper() {
  info('Available generator commands: ');
  cmdPaths.forEach(({ cmd, desc }) => {
    info(`\t${cmd} - ${desc}`);
  });
}

export function getCmdConfig(cmd) {
  return cmdPaths.find(config => config.cmd === cmd);
}
