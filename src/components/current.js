import React from 'react'
import { useSelector } from 'react-redux'

const Current = () => {
  // http://openweathermap.org/img/wn/01d@2x.png
  const { currentWeather } = useSelector(({ weather }) => weather)
  return (
    <div className="flex flex-col items-center w-1/2 p-4">
      {currentWeather.name && (
        <>
          <div className="text-3xl font-bold">{currentWeather.name}</div>
          <div className="text-red-600 text-lg p-2">{currentWeather.main.temp} &#8451;</div>
          <div className="text-red-600 p-2">{currentWeather.main.feels_like} &#8451;</div>
          <div className="text-red-600 font-bold m-2">{currentWeather.weather[0].main}</div>
          <div className="text-red-600 m-2">{currentWeather.weather[0].description}</div>
          <img src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`} />
          <div className="text-red-600 p-2 m-2">{currentWeather.main.pressure} hPa</div>
          <div className="text-red-600 p-2 m-2">{currentWeather.main.humidity} %</div>
          <div className="text-red-600 p-2 m-2">
            {new Date(currentWeather.sys.sunrise * 1000).toString()}
          </div>
          <div className="text-red-600 p-2 m-2">
            {new Date(currentWeather.sys.sunset * 1000).toString()}
          </div>
          <div className="text-red-600 p-2 m-2">{currentWeather.wind.speed} m/s</div>
          <div className="text-red-600 p-2 m-2">{currentWeather.wind.deg} &deg;</div>
          <div className="text-red-600 p-2 m-2">
            {new Date(currentWeather.dt * 1000).toString()}
          </div>
        </>
      )}
    </div>
  )
}

export default Current
