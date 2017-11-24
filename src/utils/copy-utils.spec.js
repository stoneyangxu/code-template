/* eslint-env mocha */
import copyTo from './copy-utils';

require('chai').should();
const fs = require('fs');

describe('copyTo', () => {

  it('should return false when source not exist', () => {
    const result = copyTo('./not-exist');
    result.should.equal(false);
  });

  it('should return false when target path not exist', () => {
    const result = copyTo('./copy-utils.spec.js', './notexist/');
    result.should.equal(false);
  });

  it('should copy file to dest path', () => {
    const sourceFile = './tempFile';
    fs.closeSync(fs.openSync(sourceFile, 'w'));

    const result = copyTo(sourceFile, './temp/');
    result.should.equal(true);
    fs.existsSync('./temp/tempFile').should.equal(true);

    fs.unlinkSync(sourceFile);
    fs.unlinkSync('./temp/tempFile');
  });
});
