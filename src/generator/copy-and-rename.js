import { copyToNewFile } from '../utils/copy-utils';
import { buildPath } from '../utils/boilerplates';

export default function copyAndRename(pathInTemplate, newName, destPath) {
  copyToNewFile(buildPath(pathInTemplate), newName, destPath);
}
