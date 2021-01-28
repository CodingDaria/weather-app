import React from 'react'

const DailyComponent = ({ day }) => {
  return (
    <div className="flex flex-col items-center w-1/2 p-4">
      <div>{new Date(day.dt * 1000).toISOString()}</div>
      {/* <div className="text-red-600 text-lg p-2">{day.temp} &#8451;</div>
      <div className="text-red-600 p-2">{day.feels_like} &#8451;</div> */}
      <div>{day.weather[0].description}</div>
      <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} />
      <div>{day.pressure} hPa</div>
      <div>{day.humidity} %</div>
      <div>{day.pop * 100} %</div>
      <div className="p-2">{day.wind_speed} m/s</div>
      <div className="p-2">{day.wind_deg} &deg;</div>
    </div>
  )
}

export default DailyComponent
