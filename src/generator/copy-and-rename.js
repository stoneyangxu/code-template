import { copyToNewFile } from '../utils/copy-utils';

const path = require('path');

export default function copyAndRename(pathInTemplate, newName, destPath) {
  copyToNewFile(path.resolve(__dirname, '../../boilerplates/', pathInTemplate), newName, destPath);
}
