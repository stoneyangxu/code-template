/* eslint-env mocha */
import * as boilerplates from './boilerplates';

require('chai').should();
const rimraf = require('rimraf');
const path = require('path');
const fs = require('fs');
const fse = require('fs-extra');

const BASEPATH = path.resolve('.');

describe('boilerplates', () => {
  it('should build abstract path relative to boilerplactes/', () => {
    const targetPath = boilerplates.buildPath('test/relative');
    targetPath.endsWith('/boilerplates/test/relative').should.equal(true);
  });

  it('should rename mustache path to new one', () => {
    const destFile = path.resolve(BASEPATH, './temp/{{name}}.spec.js');
    fse.ensureFileSync(destFile);

    const newPath = boilerplates.replaceMustacheFileName(destFile, { name: 'test' });

    newPath.endsWith('/temp/test.spec.js').should.equal(true);
    fs.existsSync(newPath).should.equal(true);

    rimraf.sync(newPath);
  });
});
