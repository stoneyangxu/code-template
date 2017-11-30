/* eslint-env mocha */
import * as helper from './helper';
import * as cmdTypes from './cmd-types';

require('chai').should();
const path = require('path');

describe('helper', () => {
  it('should print available commands', () => {
    helper.printGeneratorHelper();
  });

  it('should parse path and name from param', () => {
    const { pathName, fileName } = helper.parsePathAndName('path/to/name');

    pathName.should.equal('path/to');
    fileName.should.equal('name');
  });

  it('should return only name', () => {
    const { pathName, fileName } = helper.parsePathAndName('name');

    pathName.should.equal('.');
    fileName.should.equal('name');
  });

  it('should return only path', () => {
    const { pathName, fileName } = helper.parsePathAndName('name/');

    pathName.should.equal(path.resolve('name'));
    (fileName === undefined).should.equal(true);
  });

  it('should should get command config by name', () => {
    const config = helper.getCmdConfig(cmdTypes.EDITORCONFIG);

    config.cmd.should.equal('editorconfig');
    config.desc.should.equal('Basic .editorconfig file');
    config.templatePath.endsWith('basic/.editorconfig').should.equal(true);
  });

  it('should build a path in current dir and template name', () => {
    const config = helper.getCmdConfig(cmdTypes.EDITORCONFIG);

    const { pathName, fileName } = helper.buildPathAndName(config);

    pathName.should.equal(path.resolve('.'));
    fileName.should.equal('.editorconfig');
  });

  it('should build path and name if only specified path', () => {
    const config = helper.getCmdConfig(cmdTypes.EDITORCONFIG);
    const { pathName, fileName } = helper.buildPathAndName(config, 'name/');

    pathName.should.equal(path.resolve('name'));
    fileName.should.equal('.editorconfig');
  });
});
