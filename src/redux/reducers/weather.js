import axios from 'axios'

const CURRENT_WEATHER = 'CURRENT_WEATHER'

const initialState = {
  currentWeather: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_WEATHER:
      return {
        ...state,
        currentWeather: action.currentWeather
      }
    default:
      return state
  }
}

export function setWeather(city) {
  return (dispatch) => {
    axios(`/api/v1/current/${city}`)
      .then(({ data: currentWeather }) => {
        dispatch({ type: CURRENT_WEATHER, currentWeather })
      })
      .catch(() =>
        dispatch({
          type: CURRENT_WEATHER,
          currentWeather: { error: `cannot get info from server ${city}` }
        })
      )
  }
}
