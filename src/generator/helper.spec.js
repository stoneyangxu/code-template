/* eslint-env mocha */
import * as helper from './helper';
import * as cmdTypes from './cmd-types';

require('chai').should();
const path = require('path');

describe('helper', () => {
  it('should print available commands', () => {
    helper.printGeneratorHelper();
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
    fileName.should.equal('none');
  });

  it('should build path and name if only specified path', () => {
    const config = helper.getCmdConfig(cmdTypes.EDITORCONFIG);
    const { pathName, fileName } = helper.buildPathAndName(config, 'path/');

    pathName.should.equal(path.resolve('path/'));
    fileName.should.equal('.editorconfig');
  });

  it('should build path and name if specified path with name', () => {
    const config = helper.getCmdConfig(cmdTypes.EDITORCONFIG);
    const { pathName, fileName } = helper.buildPathAndName(config, 'path/name');

    pathName.should.equal(path.resolve('path/'));
    fileName.should.equal('name');
  });
});
