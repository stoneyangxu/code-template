import * as ActionTypes from './actionTypes'

let nextId = 0

export const add{{name_camel}} = (text) => ({
  type: ActionTypes.ADD_{{name_upper}},
  id: nextId++,
  text,
})

export const remove{{name_camel}} = (id) => ({
  type: ActionTypes.REMOVE_{{name_upper}},
  id
})
