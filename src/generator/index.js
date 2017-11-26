import { compileToFile, compile, buildFileName} from '../utils/boilerplates';

import { getCmdConfig, isMustache, isValidConfig } from './helper'
import { copyTo, writeTo } from '../utils/copy-utils';


const fs = require('fs');


export default function ([cmd, ...params]) {
  console.log(cmd, params);
  const config = getCmdConfig(cmd);
  console.log(config)
  if (isMustache(config)) {
    const compiled = compile(config.path, { name: params[0] })
    const newName = buildFileName(config.path, params[0])
    writeTo(compiled, newName, params[1])
  } else if (isValidConfig(cmd)) {
    copyTo(config.path, params[0]);
  }
}
