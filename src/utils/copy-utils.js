import { info, error } from './log';

const path = require('path');
const fs = require('fs');

function copyToNewFile(source, newName, destPath = '.') {
  if (!fs.existsSync(source)) {
    error(`template file not exist: ${source}`);
    return false;
  }

  const absolutePath = path.resolve(destPath);

  if (!fs.existsSync(absolutePath)) {
    error(`target path not exist: ${absolutePath}`);
    return false;
  }

  info(`copy ${source} to ${absolutePath}/${newName}`);

  fs.copyFileSync(source, path.resolve(absolutePath, newName));
  return true;
}

function copyTo(source, destPath = '.') {
  return copyToNewFile(source, path.basename(source), destPath);
}

function writeTo(content, filename, destPath = '.') {
  const absolutePath = path.resolve(destPath, filename);
  info(`write to ${absolutePath}`)
  fs.writeFileSync(absolutePath, content);
}

export { copyTo, copyToNewFile, writeTo };
