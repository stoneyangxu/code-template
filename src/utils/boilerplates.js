import Mustache from 'mustache';
import { info } from '../utils/log';

const path = require('path');
const fs = require('fs');

export function buildPath(relativePath) {
  return path.resolve(__dirname, '../../boilerplates/', relativePath);
}

export function compilePath(templatePath, data) {
  console.log('--', templatePath, fs.lstatSync(templatePath).isDirectory());
  if (fs.lstatSync(templatePath).isDirectory()) {
    fs.readdirSync(templatePath).forEach(file => console.log(file));
  } else {
    const compiled = compile(templatePath, data);
    const newName = buildFileName(templatePath, data);
    writeTo(compiled, newName, destPath);
  }
}

export function compile(templateFile, data) {
  const content = fs.readFileSync(buildPath(templateFile)).toString();
  info(content);
  return Mustache.render(content, data);
}

export function buildFileName(filePath, data) {
  const fileName = path.basename(filePath).replace('.mustache', '');
  return Mustache.render(fileName, data);
}

export function compileToFile(templateFile, data, targetFile) {
  fs.writeFileSync(targetFile, compile(templateFile, data));
}

export function walkSync(dir, func) {
  var files = fs.readdirSync(dir);
  files.forEach(function(file) {
    if (fs.statSync(dir + '/' + file).isDirectory()) {
      walkSync(dir + '/' + file + '/', func);
    }
    else {
      func(path.resolve(dir, file));
    }
  });
};
