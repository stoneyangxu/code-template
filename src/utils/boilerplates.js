import Mustache from 'mustache';
import { step } from '../utils/log';
import { writeTo } from './copy-utils';

const path = require('path');
const fs = require('fs');

export function buildPath(relativePath) {
  return path.resolve(__dirname, '../../boilerplates/', relativePath);
}

export function replaceMustacheFileName(filePath, data) {
  const newPath = Mustache.render(filePath, data);
  fs.renameSync(filePath, newPath);
  return newPath;
}


function toCamelCase(str) {
  if (!str || str.length === 0) {
    return '';
  }
  return str.substr(0, 1).toUpperCase() + str.substr(1);
}

function upper(func) {
  return () => func().toUpperCase();
}

function camel(func) {
  return () => toCamelCase(func());
}

export function addSurfix(data) {
  const newData = {};

  Object.keys(data).forEach((key) => {
    const prop = data[key];

    newData[key] = data[key];

    if (typeof prop === 'function') {
      newData[`${key}_upper`] = upper(data[key]);
      newData[`${key}_camel`] = camel(data[key]);
    } else {
      newData[`${key}_upper`] = data[key].toUpperCase();
      newData[`${key}_camel`] = toCamelCase(data[key]);
    }
  });

  return newData;
}

export function compile(templateFile, data) {
  const content = fs.readFileSync(buildPath(templateFile)).toString();
  step(`>>> compiling ${templateFile}`);
  return Mustache.render(content, data);
}

export function compileToFile(templateFile, data, targetFile) {
  fs.writeFileSync(targetFile, compile(templateFile, data));
}

function compileFile(file, data) {
  const newFilePath = replaceMustacheFileName(file, data);
  const compiled = compile(newFilePath, data);
  writeTo(newFilePath, compiled);
}

export function walkSync(dir, func) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    if (fs.statSync(`${dir}/${file}`).isDirectory()) {
      walkSync(`${dir}/${file}/`, func);
    } else {
      func(path.resolve(dir, file));
    }
  });
}

export function warkSyncAndCompile(targetPath, data) {
  if (fs.statSync(targetPath).isDirectory()) {
    walkSync(targetPath, templateFile => compileFile(templateFile, data));
  } else {
    compileFile(targetPath, data);
  }
}
