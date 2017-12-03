/* eslint-env mocha */
import * as helper from './helper';
import * as cmdTypes from './cmd-types';

require('chai').should();

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
});
