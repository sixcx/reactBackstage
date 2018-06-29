/**
 * reducer
 */
import { combineReducers } from 'redux'
import todos from './todoList'
import visibilityFilter from './visibility'

const reducers = combineReducers({
  todos,
  visibilityFilter
})

export default reducers

