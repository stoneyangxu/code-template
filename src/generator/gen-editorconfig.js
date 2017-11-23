import { error, info } from '../utils/log';

const path = require('path');
const fs = require('fs');

const templateFile = path.resolve(__dirname, '../../boilerplates', '.editorconfig');

export default function (destPath = '.') {
  const absolutePath = path.resolve(destPath);

  if (!fs.existsSync(absolutePath)) {
    error(`target path not exist: ${absolutePath}`);
    return;
  }

  if (!fs.existsSync(templateFile)) {
    error(`template file not exist: ${templateFile}`);
  }

  info(`generate .editorconfig at ${absolutePath}`);

  fs.copyFileSync(templateFile, path.resolve(absolutePath, '.editorconfig'));
}
