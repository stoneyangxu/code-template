import { info, error } from './log';

const path = require('path');
const fs = require('fs');

function copyTo(source, destPath = '.') {
  if (!fs.existsSync(source)) {
    error(`template file not exist: ${source}`);
    return false;
  }

  const absolutePath = path.resolve(destPath);

  if (!fs.existsSync(absolutePath)) {
    error(`target path not exist: ${absolutePath}`);
    return false;
  }

  info(`copy ${source} to ${absolutePath}`);

  fs.copyFileSync(source, path.resolve(absolutePath, path.basename(source)));
  return true;
}

export default copyTo;
