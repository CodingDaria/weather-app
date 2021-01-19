import React from 'react'
import { useSelector } from 'react-redux'

const Current = () => {
  // http://openweathermap.org/img/wn/01d@2x.png
  const currentWeather = useSelector(({ weather }) => weather.currentWeather)
  return (
    <div className="flex flex-col items-center w-1/2 p-4">
      {currentWeather.weather && (
        <>
          <div className="text-red-600 font-bold p-2 m-2">{currentWeather.weather[0].main}</div>
          <div className="text-red-600 font-bold p-2 m-2">
            {currentWeather.weather[0].description}
          </div>
          <img src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`} />
        </>
      )}
    </div>
  )
}

export default Current
