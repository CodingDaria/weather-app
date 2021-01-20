import axios from 'axios'

const GET_WEATHER = 'GET_WEATHER'

const initialState = {
  currentWeather: {},
  hourlyWeather: {},
  dailyWeather: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        currentWeather: action.currentWeather,
        hourlyWeather: action.hourlyWeather,
        dailyWeather: action.dailyWeather
      }
    default:
      return state
  }
}

export function getWeather(city) {
  return async (dispatch) => {
    const currentWeather = await axios(`/api/v1/current/${city}`)
      .then(({ data }) => data)
      .catch((err) => console.log(err))
    const { lat, lon } = currentWeather.coord
    axios(`/api/v1/period/${lat}&${lon}`)
      .then(({ data }) => {
        dispatch({
          type: GET_WEATHER,
          currentWeather,
          hourlyWeather: data.hourly,
          dailyWeather: data.daily
        })
      })
      .catch(() =>
        dispatch({
          type: GET_WEATHER,
          currentWeather: { error: 'cannot get info from server' },
          hourlyWeather: { error: 'cannot get info from server' },
          dailyWeather: { error: 'cannot get info from server' }
        })
      )
  }
}
