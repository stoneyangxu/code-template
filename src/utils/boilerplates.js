import Mustache from 'mustache';
import { info } from '../utils/log';

const path = require('path');
const fs = require('fs');

export function buildPath(relativePath) {
  return path.resolve(__dirname, '../../boilerplates/', relativePath);
}

export function compile(templateFile, data) {
  const content = fs.readFileSync(buildPath(templateFile)).toString();
  info(content);
  return Mustache.render(content, data);
}

export function buildFileName(filePath, name) {
  const fileName = path.basename(filePath).replace('.mustache', '');
  return Mustache.render(fileName, { name });
}

export function compileToFile(templateFile, data, targetFile) {
  fs.writeFileSync(targetFile, compile(templateFile, data));
}
