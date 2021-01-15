import axios from 'axios'

const CURRENT_WEATHER = 'CURRENT_WEATHER'

const initialState = {
  weather: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_WEATHER:
      return {
        ...state,
        weather: action.weather
      }
    default:
      return state
  }
}

export function setWeather(city) {
  return (dispatch) => {
    axios(`/api/v1/current/${city}`)
      .then(({ data: weather }) => {
        dispatch({ type: CURRENT_WEATHER, weather })
      })
      .catch(() =>
        dispatch({
          type: CURRENT_WEATHER,
          weather: { error: `cannot get info from server ${city}` }
        })
      )
  }
}
