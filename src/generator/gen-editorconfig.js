import copyTo from '../utils/copy-utils';
const path = require('path');

const templateFile = path.resolve(__dirname, '../../boilerplates', '.editorconfig');

export default function (destPath = '.') {
  copyTo(templateFile, destPath);
}
