import { info, error } from './log';

const path = require('path');
const fs = require('fs');
const fse = require('fs-extra');
const mkdirp = require('mkdirp');
const rimraf = require('rimraf');

export function createPathIfNotExist(dir) {
  if (!fs.existsSync(dir)) {
    info(`creating ${dir}`);
    mkdirp.sync(dir);
  }
}

export function copyTo(source, destPath, fileName) {
  createPathIfNotExist(destPath);

  if (!fs.existsSync(source)) {
    error(`template file not exist: ${source}`);
  }

  const absolutePath = path.resolve(destPath, fileName || path.basename(source));

  rimraf.sync(absolutePath);

  info(`copy ${source} to ${absolutePath}`);

  fse.copySync(source, absolutePath);
  return absolutePath;
}

export function writeTo(content, destFile) {
  fs.writeFileSync(destFile, content);
}
