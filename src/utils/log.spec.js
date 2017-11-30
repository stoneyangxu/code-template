/* eslint-env mocha */
import * as log from './log';

require('chai').should();

describe('log', () => {
  it('should run', () => {
    log.log('test');
    log.info('test');
    log.step('test');
    log.error('test');
  });
});
