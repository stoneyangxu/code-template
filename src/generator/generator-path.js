import * as types from './cmd-types';

const path = require('path')
const boilerplates = path.resolve(__dirname, '../../boilerplates')

export default [
  {
    cmd: types.EDITORCONFIG,
    path: path.resolve(boilerplates, 'copy/.editorconfig')
  },
  {
    cmd: types.TEST,
    path: path.resolve(boilerplates, 'test/{{name}}.spec.mustache.js')
  }
]
