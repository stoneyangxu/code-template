/* eslint-env mocha */
import * as boilerplates from './boilerplates';

require('chai').should();
const rimraf = require('rimraf');
const path = require('path');
const fs = require('fs');
const fse = require('fs-extra');
const mkdirp = require('mkdirp');

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

  it('should compile tempalte file and replace variables', () => {
    const templateFile = './test/{{name}}.spec.mustache.js';
    const data = { name: 'replaced_name' };

    const compiled = boilerplates.compile(templateFile, data);

    compiled.includes("'replaced_name'").should.equal(true);
  });

  it('should compile tempalte file to specified file', () => {
    const templateFile = './test/{{name}}.spec.mustache.js';
    const data = { name: 'replaced_name' };
    const destFile = path.resolve(BASEPATH, './temp/test.spec.js');

    boilerplates.compileToFile(templateFile, data, destFile);

    const content = fs.readFileSync(destFile).toString();
    content.includes("'replaced_name'").should.equal(true);

    rimraf.sync(destFile);
  });

  it('should add surfix to each item in data and convert content', () => {
    const data = {
      name: 'test',
      value: 'value',
    };

    const result = boilerplates.addSurfix(data);

    result.name.should.equal('test');
    result.name_upper.should.equal('TEST');
    result.name_camel.should.equal('Test');

    result.value.should.equal('value');
    result.value_upper.should.equal('VALUE');
    result.value_camel.should.equal('Value');
  });

  it('should add surfix to each item in data and return a new function', () => {
    const data = {
      name: 'test',
      value: () => 'value',
      empty: '',
      emptyFunc: () => '',
    };

    const result = boilerplates.addSurfix(data);

    result.name.should.equal('test');
    result.name_upper.should.equal('TEST');
    result.name_camel.should.equal('Test');

    result.value().should.equal('value');
    result.value_upper().should.equal('VALUE');
    result.value_camel().should.equal('Value');

    result.empty.should.equal('');
    result.empty_upper.should.equal('');
    result.empty_camel.should.equal('');

    result.emptyFunc().should.equal('');
    result.emptyFunc_upper().should.equal('');
    result.emptyFunc_camel().should.equal('');
  });

  it('should work through directory without nothing', () => {
    const destDir = path.resolve(BASEPATH, './temp/for/');
    mkdirp.sync(destDir);

    let count = 0;

    boilerplates.walkSync(destDir, () => {
      count += 1;
    });

    count.should.equal(0);

    rimraf.sync(destDir);
  });

  it('should work through directory without nothing', () => {
    const destDir = path.resolve(BASEPATH, './temp/for/');
    mkdirp.sync(destDir);

    mkdirp.sync(path.resolve(destDir, 'contains-file'));
    mkdirp.sync(path.resolve(destDir, 'empty'));

    fse.ensureFileSync(path.resolve(destDir, 'contains-file/someFile'));

    let count = 0;

    boilerplates.walkSync(destDir, () => {
      count += 1;
    });

    count.should.equal(1);

    rimraf.sync(destDir);
  });
});
