import * as types from './cmd-types';
import { buildPath } from '../utils/boilerplates';

export default [
  {
    cmd: types.EDITORCONFIG,
    templatePath: buildPath('basic/.editorconfig'),
    desc: 'Basic .editorconfig file',
  },
  {
    cmd: types.TEST,
    templatePath: buildPath('test/{{name}}.spec.mustache.js'),
    desc: 'Test template with chai',
  },
  {
    cmd: types.REDUX_THUNK_STORE,
    templatePath: buildPath('redux/store.js'),
    desc: 'Basic store.js base on redux and redux-thunk',
  },
  {
    cmd: types.REDUX_INDEX,
    templatePath: buildPath('redux/index.js'),
    desc: 'Basic index.js base on existing store and create-react-app',
  },
  {
    cmd: types.REDUX_VIEW,
    templatePath: buildPath('redux/{{name}}.mustache'),
    desc: 'Redux views with action example',
  },
];
