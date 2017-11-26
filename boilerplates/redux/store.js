import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
// import { reducer as todoReducer } from './todos'
import thunkMiddleware from 'redux-thunk'

const reducer = combineReducers({
  // todos: todoReducer,
})

const middlewires = [thunkMiddleware]
if (process.env.NODE_ENV !== 'production') {
  middlewires.push(require('redux-immutable-state-invariant').default())
}

const win = window

const storeEnhancers = compose(
  applyMiddleware(...middlewires),
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
)

export default createStore(reducer, {}, storeEnhancers)
