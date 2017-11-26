import * as types from './cmd-types';
import { buildPath } from '../utils/boilerplates';

export default [
  {
    cmd: types.EDITORCONFIG,
    path: buildPath('basic/.editorconfig'),
    desc: 'Basic .editorconfig file',
  },
  {
    cmd: types.TEST,
    path: buildPath('test/{{name}}.spec.mustache.js'),
    desc: 'Test template with chai',
  },
  {
    cmd: types.REDUX_THUNK_STORE,
    path: buildPath('redux/store.js'),
    desc: 'Basic store.js base on redux and redux-thunk',
  },
];
