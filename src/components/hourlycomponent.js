import React from 'react'

const HourlyComponent = ({ hour, isOdd }) => {
  const PRESSURE_RATIO = 0.75
  const getDate = (unixsec) => {
    const date = new Date(unixsec * 1000)
    const hours = date.getHours()
    const minutes = (date.getMinutes() + '').padStart(2, '0')
    return `${hours}:${minutes}`
  }
  const capitalize = (str) => `${str.slice(0, 1).toUpperCase()}${str.slice(1)}`
  const isOddClass = isOdd ? 'bg-white' : 'bg-blue-100'
  return (
    <div className={`flex justify-between items-center w-full p-2 ${isOddClass}`}>
      <div className="text-lg m-3">{getDate(hour.dt)}</div>
      <div className="flex flex-col items-center justify-center m-3">
        <div className="text-2xl mb-1">{Math.round(hour.temp)} &#8451;</div>
        <div>{Math.round(hour.feels_like)} &#8451;</div>
        <div className="text-sm">Feels like</div>
      </div>
      <div className="flex flex-col items-center m-3">
        <img
          className="bg-gray-400"
          src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
        />
        <div>{capitalize(hour.weather[0].description)}</div>
      </div>
      <div className="flex flex-col items-center m-3">
        <div className="text-lg m-1">{Math.round(hour.pressure * PRESSURE_RATIO)}</div>
        <div className="text-sm">Pressure (mm Hg)</div>
        <div className="text-lg mt-2 mb-1">{hour.pop * 100} %</div>
        <div className="text-sm">Probability of precipitation</div>
      </div>
      <div className="flex flex-col items-center m-3">
        <div className="text-lg mb-1">{hour.humidity} %</div>
        <div className="text-sm">Humidity</div>
      </div>
      <div className="flex flex-col items-center m-3">
        <div className="text-lg m-1">
          {hour.wind_speed.toFixed(1)} m/s; {hour.wind_deg} &deg;
        </div>
        <div className="text-sm">Wind</div>
      </div>
    </div>
  )
}

export default HourlyComponent
