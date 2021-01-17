import React from 'react'
import { useSelector } from 'react-redux'
import CityInput from './cityinput'

const Weather = () => {
  // http://openweathermap.org/img/wn/01d@2x.png
  const currentWeather = useSelector(({ weather }) => weather.currentWeather)
  return (
    <div className="flex flex-col items-center w-screen p-4">
      <h1 className="text-lg font-bold">React, Express and Webpack Boilerplate Application</h1>
      <p className="text-lg">Includes React, Express, Webpack, TailwindCSS</p>
      <CityInput />
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

export default Weather
