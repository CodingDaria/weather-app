import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setWeather } from '../redux/reducers/weather'

const CityInput = () => {
  const [city, setCity] = useState('')
  const dispatch = useDispatch()
  return (
    <div className="flex flex-col items-center w-screen p-4">
      <input
        className="text-black p-1 m-1 border border-gray-600"
        type="text"
        placeholder="enter the city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            dispatch(setWeather(city))
          }
        }}
      />
      <button
        className="border border-blue-600 bg-blue-400 hover:bg-blue-600 p-2 m-2"
        onClick={() => {
          dispatch(setWeather(city))
        }}
      >
        Get
      </button>
    </div>
  )
}

export default CityInput
