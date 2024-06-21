import createDataContext from './createDataContext'

// Reducer
const AdvertisementReducer = (state, action) => {
  switch (action.type) {
    case 'SET_BANNER_AD_STRIP_SELECTED':
      return { ...state, bannerAdStripSelected: action.payload }
    case 'SET_BANNER_AD_FULL_SELECTED':
      return { ...state, bannerAdFullSelected: action.payload }
    case 'SET_BANNER_AD_FULL_SHOW':
      return { ...state, bannerAdFullShow: action.payload }
    default:
      return state
  }
}

// Actions
const setBannerAdStripSelected = (dispatch) => (data) => {
  dispatch({ type: 'SET_BANNER_AD_STRIP_SELECTED', payload: data })
}

const setBannerAdFullSelected = (dispatch) => (data) => {
  dispatch({ type: 'SET_BANNER_AD_FULL_SELECTED', payload: data })
}

const setBannerAdFullShow = (dispatch) => (data) => {
  dispatch({ type: 'SET_BANNER_AD_FULL_SHOW', payload: data })
}

export const { Provider, Context } = createDataContext(
  AdvertisementReducer,
  {
    setBannerAdStripSelected,
    setBannerAdFullSelected,
    setBannerAdFullShow,
  },
  {
    bannerAdStripSelected: 'bannerAdStrip1',
    bannerAdFullSelected: 'bannerAdFull1',
    bannerAdFullShow: true,
  }
)
