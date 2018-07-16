//认证reducer
const fakeAuth = {
  isAuthenticated: false,
  // cb: setTimeout(cb, 100)
}

const auth = (state = fakeAuth, action) => {
  switch(action.type) {
    case 'AUTH_IN':
      return [
        ...state,
        {
          isAuthenticated: action.isAuth,
          // cb: setTimeout(action.cb, 100)
        }
      ]
    case 'SIGN_OUT':
      return [
        ...state,
        {
          isAuthenticated: action.isAuth,
          // cb: setTimeout(action.cb, 100)
        }
      ]
    default:
      return state
  }
}

export default auth