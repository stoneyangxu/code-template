import Mustache from 'mustache';
import { info } from '../utils/log';

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

export function compilePath(templatePath, data) {
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
  info(`compiling ${templateFile}`);
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

function upper(func) {
  return () => {
    return func().toUpperCase();
  }
}

function camel(func) {
  return () => {
    return toCamelCase(func());
  }
}


function toCamelCase(str) {
  if (!str || str.length === 0) {
    return "";
  } else {
    return str.substr(0, 1).toUpperCase() + str.substr(1);
  }
}

export function addSurfix(data) {
  const newData = {};

  for (let key in data) {

    const prop = data[key];

    newData[key] = data[key]

    if (typeof prop === 'function') {
      newData[key + '_upper'] = upper(data[key])
      newData[key + '_camel'] = camel(data[key])
    } else {
      newData[key + '_upper'] = data[key].toUpperCase();
      newData[key + '_camel'] = toCamelCase(data[key])
    }

    return newData;
  }
}
