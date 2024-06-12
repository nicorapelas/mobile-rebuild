import createDataContext from './createDataContext'

// Reducer
const NavReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SCREEN_SELECTED':
      return { ...state, screenSelected: action.payload }
    default:
      return state
  }
}

// Actions
const setScreenSelected = (dispatch) => (data) => {
  dispatch({ type: 'SET_SCREEN_SELECTED', payload: data })
}

export const { Provider, Context } = createDataContext(
  NavReducer,
  {
    setScreenSelected,
  },
  {
    screenSelected: 'registerOrLogin',
  }
)
