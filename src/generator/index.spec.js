/* eslint-env mocha */
import generate from './index';

require('chai').should();
const path = require('path');
const fs = require('fs');
const rimraf = require('rimraf');

const TEST_PATH = path.resolve('./temp/');

describe('index.spec.js', () => {
  it('should generate editorconfig in specified dir', () => {
    generate('editorconfig', 'temp/generator/', {});
    fs.existsSync(path.resolve(TEST_PATH, 'generator/.editorconfig')).should.equal(true);
    rimraf.sync(path.resolve(TEST_PATH, 'generator'));
  });

  it('should print not exist command', () => {
    generate(['not-exist-command']);
  });
});
