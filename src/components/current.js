import React from 'react'
import { useSelector } from 'react-redux'

const Current = () => {
  const PRESSURE_RATIO = 0.75
  const { currentWeather } = useSelector(({ weather }) => weather)
  const timezone = currentWeather.timezone
  const getTimezoneDate = (unixsec) => new Date((unixsec + timezone) * 1000)
  const getSunDate = (unixsec) => {
    const hours = getTimezoneDate(unixsec).getUTCHours()
    const minutes = (getTimezoneDate(unixsec).getUTCMinutes() + '').padStart(2, '0')
    return `${hours}:${minutes}`
  }
  const capitalize = (str) => `${str.slice(0, 1).toUpperCase()}${str.slice(1)}`
  return (
    <div className="flex flex-col items-center w-2/3 p-4">
      {currentWeather.name && (
        <>
          <div className="text-3xl font-bold">{currentWeather.name}</div>
          <div className="flex">
            <div className="flex flex-col items-center m-3 mr-8">
              <img
                src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
              />
              <div className="text-2xl">{capitalize(currentWeather.weather[0].description)}</div>
            </div>
            <div className="flex flex-col items-center m-3">
              <div className="text-5xl mt-5">{Math.round(currentWeather.main.temp)} &#8451;</div>
              <div className="mt-4 text-lg">
                {Math.round(currentWeather.main.feels_like)} &#8451;
              </div>
              <div className="text-sm">Feels like</div>
            </div>
          </div>
          <div className="flex mt-2">
            <div className="flex flex-col items-center mx-8">
              <div className="m-1 text-lg">
                {Math.round(currentWeather.main.pressure * PRESSURE_RATIO)} mm Hg
              </div>
              <div className="text-sm">Pressure</div>
            </div>
            <div className="flex flex-col items-center mx-8">
              <div className="m-1 text-lg">{currentWeather.main.humidity} %</div>
              <div className="text-sm">Humidity</div>
            </div>
            <div className="flex flex-col items-center mx-8">
              <div className="m-1 text-lg">
                {currentWeather.wind.speed} m/s; {currentWeather.wind.deg} &deg;
              </div>
              <div className="text-sm">Wind</div>
            </div>
          </div>
          <div></div>
          <div className="flex items-center m-3">
            <div className="mx-2 text-sm">Sunrise</div>
            <div className="mx-2 text-lg">{getSunDate(currentWeather.sys.sunrise)}</div>
            <div className="ml-5 text-sm">Sunset</div>
            <div className="mx-2 text-lg">{getSunDate(currentWeather.sys.sunset)}</div>
          </div>
          <div className="m-2 text-sm">
            Last update: {new Date(currentWeather.dt * 1000).toString()}
          </div>
        </>
      )}
    </div>
  )
}

export default Current
