/**
 * reducer
 */
import { combineReducers } from 'redux'
import todos from './todoList'
import visibility from './visibility'

const reducers = combineReducers({
  todos,
  visibility
})

export default reducers

