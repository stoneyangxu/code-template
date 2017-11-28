/* eslint-env mocha */
import * as helper from './helper';

require('chai').should();

describe('helper', () => {
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
});
