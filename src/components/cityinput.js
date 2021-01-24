import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { history } from '../redux'
import { getWeather, setPeriod } from '../redux/reducers/weather'

const CityInput = () => {
  const [city, setCity] = useState('')
  const dispatch = useDispatch()
  const pathname = history.location.pathname
  const searchFunc = () => {
    dispatch(getWeather(city))
    dispatch(setPeriod('Current'))
    if (pathname !== '/') {
      history.push('/')
    }
  }
  return (
    <div className="flex flex-col items-center w-1/2 p-4">
      <input
        className="text-black w-2/3 p-1 m-1 border border-gray-600"
        type="text"
        placeholder="enter the city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') return searchFunc()
        }}
      />
      <button
        type="button"
        className="border-2 rounded border-blue-500 bg-blue-300 hover:bg-blue-500 p-2 m-2"
        onClick={searchFunc}
      >
        Get
      </button>
    </div>
  )
}

export default CityInput
