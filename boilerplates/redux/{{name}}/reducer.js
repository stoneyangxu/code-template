import * as ActionTypes from './actionTypes'

export default (state = [], action) => {
  switch (action.type) {
    case ActionTypes.ADD_{{name_upper}}:
      return [
        {
          id: action.id,
          text: action.text,
          completed: false
        },
        ...state
      ]
    case ActionTypes.REMOVE_{{name_upper}}:
      return state.filter({{name}} => {{name}}.id !== action.id)
    default:
      return state
  }
}
