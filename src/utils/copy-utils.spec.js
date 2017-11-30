/* eslint-env mocha */
import { createPathIfNotExist, copyTo, writeTo } from './copy-utils';

require('chai').should();
const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');
const mkdirp = require('mkdirp');
const fse = require('fs-extra');

const BASEPATH = path.resolve('.');

describe('copy-util', () => {
  describe('createPathIfNotExist', () => {
    it('should do nothing if target is exist', () => {
      const target = path.resolve(BASEPATH, './temp/tempFile');
      mkdirp.sync(target);

      createPathIfNotExist(target);

      fs.existsSync(target).should.equal(true);

      rimraf.sync(target);
    });

    it('should create if target not exist', () => {
      const target = path.resolve(BASEPATH, './temp/tempFile');

      createPathIfNotExist(target);

      fs.existsSync(target).should.equal(true);
      rimraf.sync(target);
    });
  });

  describe('copyTo', () => {
    const source = path.resolve(BASEPATH, './temp/sourceFile');

    beforeEach(() => {
      fse.ensureFileSync(source);
    });

    afterEach(() => {
      if (fs.existsSync(source)) {
        fs.unlinkSync(source);
      }
    });

    it('should do nothing if source file not exist', () => {
      const destPath = path.resolve(BASEPATH, './temp/target/');
      const result = copyTo('./not-exist-source-file', destPath);
      result.should.equal('./not-exist-source-file');
    });

    it('should copy file to dest path', () => {
      const destPath = path.resolve(BASEPATH, './temp/target/');

      const result = copyTo(source, destPath);
      result.should.equal(`${destPath}/sourceFile`);
      fs.existsSync(`${destPath}/sourceFile`).should.equal(true);
      rimraf.sync(destPath);
    });

    it('should copy file with specified fileName', () => {
      const destPath = path.resolve(BASEPATH, './temp/target/');

      const result = copyTo(source, destPath, 'newFileName');
      result.should.equal(`${destPath}/newFileName`);
      fs.existsSync(`${destPath}/newFileName`).should.equal(true);
      rimraf.sync(destPath);
    });
  });

  describe('writeTo', () => {
    it('should write content to file', () => {
      const destFile = path.resolve(BASEPATH, './temp/sourceFile');
      fse.ensureFileSync(destFile);

      writeTo(destFile, 'content for test');

      const content = fs.readFileSync(destFile).toString();
      content.should.equal('content for test');

      rimraf.sync(destFile);
    });
  });
});

