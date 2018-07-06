/**
 * 定义reducer
 */
const todoListInit = [{
  id: -3,
  text: '写代码',
  completed: false,
}, {
  id: -2,
  text: '打篮球',
  completed: false,
}, {
  id: -1,
  text: '读书',
  completed: true,
}];

const todos = (state = todoListInit, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(t => {
        if (t.id !== action.id) {
          return t
        }
        return Object.assign({}, t, {
          completed: !t.completed
        })
      })
    case 'DEL_TODO':
      return state.filter(t => t.id !== action.id)
    default:
      return state
  }
}

export default todos