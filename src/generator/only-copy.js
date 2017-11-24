import { copyTo } from '../utils/copy-utils';

const path = require('path');
const fs = require('fs');

const templatePath = path.resolve(__dirname, '../../boilerplates/copy/');

function buildPath(name) {
  return path.resolve(templatePath, name);
}

function templateFileExist(name) {
  return fs.existsSync(buildPath(name));
}

export default function onlyCopy(name, destPath) {
  if (templateFileExist(name)) {
    copyTo(buildPath(name), destPath);
  } else if (templateFileExist(`.${name}`)) {
    copyTo(buildPath(`.${name}`), destPath);
  }
}
