/* eslint-env mocha */
import copyAndRename from './copy-and-rename';

require('chai').should();
const fs = require('fs');

describe('copyAndRename', () => {
  it('should copy and rename to a new file', () => {
    copyAndRename('test/mocha.mustache.js', 'newName.spec.js', './temp');

    const resultPath = './temp/newName.spec.js';
    fs.existsSync(resultPath).should.equals(true);
    fs.unlinkSync(resultPath);
  });
});
