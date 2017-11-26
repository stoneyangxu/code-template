/* eslint-env mocha */
import * as boilerplates from './boilerplates';

require('chai').should();

describe('boilerplates', () => {
  it('should build abstract path relative to boilerplactes/', () => {
    const path = boilerplates.buildPath('test/relative');
    path.endsWith('/boilerplates/test/relative').should.equal(true);
  });

  it('should replace template string in file name', () => {
    const filePath = 'test/{{name}}.spec.mustache.js';
    const name = 'realName';

    const replaced = boilerplates.buildFileName(filePath, name);

    replaced.should.equal('realName.spec.js');
  });
});
