import { compile, buildFileName } from '../utils/boilerplates';

import { getCmdConfig, isMustache, isValidConfig } from './helper';
import { copyTo, writeTo } from '../utils/copy-utils';

export default function ([cmd, ...params]) {
  console.log(cmd, params);
  const config = getCmdConfig(cmd);
  if (isMustache(config)) {
    const compiled = compile(config.path, { name: params[0] });
    const newName = buildFileName(config.path, params[0]);
    writeTo(compiled, newName, params[1]);
  } else if (isValidConfig(config)) {
    copyTo(config.path, params[0]);
  }
}
