import onlyCopy from './only-copy';
import copyAndRename from './copy-and-rename';
import { compileToFile } from '../utils/boilerplates';

const fs = require('fs');

const cmdList = [
  'test',
];

export default function ([cmd, ...params]) {
  console.log(cmd, params);
  if (cmdList.indexOf(cmd) !== -1) {
    if (cmd === 'test') {
      // copyAndRename('test/mocha.spec.js', `${params[0]}.spec.js`, params[1]);

      compileToFile('test/mocha.mustache.js', { name: params[0] }, `${params[0]}.spec.js`)
    }
  } else {
    onlyCopy(cmd, params[1]);
  }
}
