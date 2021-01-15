import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import weather from './weather'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  weather
})

export default createRootReducer