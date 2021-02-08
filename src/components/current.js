import React from 'react'
import { useSelector } from 'react-redux'

const Current = () => {
  // http://openweathermap.org/img/wn/01d@2x.png
  const { currentWeather } = useSelector(({ weather }) => weather)
  const timezone = currentWeather.timezone
  const getTimezoneDate = (unixsec) => new Date((unixsec + timezone) * 1000)
  const getSunDate = (unixsec) =>
    `${getTimezoneDate(unixsec).getUTCHours()}:${getTimezoneDate(unixsec).getUTCMinutes()}`
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
          <div className="text-red-600 p-2 m-2">{getSunDate(currentWeather.sys.sunrise)}</div>
          <div className="text-red-600 p-2 m-2">{getSunDate(currentWeather.sys.sunset)}</div>
          <div className="text-red-600 p-2 m-2">{currentWeather.wind.speed} m/s</div>
          <div className="text-red-600 p-2 m-2">{currentWeather.wind.deg} &deg;</div>
          <div className="text-red-600 p-2 m-2">
            Last update time: {getTimezoneDate(currentWeather.dt).toString().slice(0, 24)}
          </div>
        </>
      )}
    </div>
  )
}

export default Current
