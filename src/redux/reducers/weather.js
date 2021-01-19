import axios from 'axios'

const CURRENT_WEATHER = 'CURRENT_WEATHER'
const PERIODIC_WEATHER = 'PERIODIC_WEATHER'

const initialState = {
  coord: {},
  currentWeather: {},
  hourlyWeather: {},
  dailyWeather: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_WEATHER:
      return {
        ...state,
        currentWeather: action.currentWeather,
        coord: action.currentWeather.coord
      }
    case PERIODIC_WEATHER:
      return {
        ...state
      }
    default:
      return state
  }
}

export function getCurrentWeather(city) {
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

export function getPeriodicWeather() {
  return (dispatch, getState) => {
    const { weather } = getState()
    const { lat, lon } = weather
    axios(`/api/v1/period/${lat}&${lon}`)
      .then(({ data }) => {
        dispatch({ type: PERIODIC_WEATHER, hourlyWeather: data.hourly, dailyWeather: data.daily })
      })
      .catch(() =>
        dispatch({
          type: PERIODIC_WEATHER,
          hourlyWeather: { error: 'cannot get info from server' },
          dailyWeather: { error: 'cannot get info from server' }
        })
      )
  }
}
