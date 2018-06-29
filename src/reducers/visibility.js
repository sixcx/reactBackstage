/**
 * 控制todo list数据显示reducer
 */
const visibilityFilter = (state = {filter: 'SHOW_ALL'}, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter