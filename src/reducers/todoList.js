/**
 * 定义reducer
 */
const todoListInit = [{
  id: -3,
  text: 'coding',
  completed: false,
}, {
  id: -2,
  text: '打篮球',
  completed: false,
}, {
  id: -1,
  text: 'reading',
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
      return state.map((todo) => {
        (todo.id === action.id) ?
          {...todo, completed: !todo.completed} : todo
      })
    case 'DEL_TODO':
      return state.filter(t => t.id !== action.id)
    default:
      return state
  }
}

export default todos