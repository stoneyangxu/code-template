/* eslint-env mocha */
import generate from './index';
require('chai').should();
const path = require('path');
const fs = require('fs');

const TEST_PATH = path.resolve('./temp/')

describe('index.spec.js', () => {
  it('should generate editorconfig in current dir', () => {
    generate(['editorconfig']);
    fs.existsSync(path.resolve(TEST_PATH, '.editorconfig'));
  });

  it('should generate editorconfig in specified dir', () => {
    generate(['editorconfig', 'temp/dir']);
    fs.existsSync(path.resolve(TEST_PATH, '/dir/.editorconfig'));
  });

  it('should print not exist command', () => {
    generate(['not-exist-command']);
  });


});
