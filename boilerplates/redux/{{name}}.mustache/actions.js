import * as ActionTypes from './actionTypes'

let nextId = 0

export const addTodo = (text) => ({
  type: ActionTypes.ADD_{{name_upper}},
  id: nextId++,
  text,
})

export const removeTodo = (id) => ({
  type: ActionTypes.REMOVE_{{name_upper}},
  id
})
