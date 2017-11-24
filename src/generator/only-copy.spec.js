/* eslint-env mocha */
import onlyCopy from './only-copy';

require('chai').should();
const fs = require('fs');

describe('onlyCopy', () => {

  const tempFile = './boilerplates/copy/tempFile';
  const tempFileWithDot = './boilerplates/copy/.tempFileWithDot';

  beforeEach(() => {
    fs.closeSync(fs.openSync(tempFile, 'w'));
    fs.closeSync(fs.openSync(tempFileWithDot, 'w'));
  });

  afterEach(() => {
    fs.unlink(tempFile);
    fs.unlink(tempFileWithDot);
  });

  it('should copy .editorconfig file to ./temp path', () => {

    const resultPath = './temp/tempFile';

    onlyCopy('tempFile', './temp');

    fs.existsSync(resultPath).should.equal(true);
    fs.unlinkSync(resultPath);
  });

  it('should copy .tempFileWithDot file to ./temp path with `.`', () => {

    const resultPath = './temp/.tempFileWithDot';

    onlyCopy('tempFileWithDot', './temp');

    fs.existsSync(resultPath).should.equal(true);
    fs.unlinkSync(resultPath);
  });

});
