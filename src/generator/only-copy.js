import { copyTo } from '../utils/copy-utils';
import { buildPath } from '../utils/boilerplates';

const fs = require('fs');

function templateFileExist(name) {
  return fs.existsSync(buildPath(`copy/${name}`));
}

export default function onlyCopy(name, destPath) {
  if (templateFileExist(name)) {
    copyTo(buildPath(`copy/${name}`), destPath);
  } else if (templateFileExist(`.${name}`)) {
    copyTo(buildPath(`copy/.${name}`), destPath);
  }
}
