import createDataContext from './createDataContext'

// Reducer
const AdvertisementReducer = (state, action) => {
  switch (action.type) {
    case 'SET_BANNER_ADD_SELECTED':
      return { ...state, bannerAddSelected: action.payload }
    default:
      return state
  }
}

// Actions
const setBannerAddSelected = (dispatch) => (data) => {
  dispatch({ type: 'SET_BANNER_ADD_SELECTED', payload: data })
}

export const { Provider, Context } = createDataContext(
  AdvertisementReducer,
  {
    setBannerAddSelected,
  },
  {
    bannerAddSelected: 'bannerAdd1',
  }
)
