import React from 'react'

const HourlyComponent = ({ hour }) => {
  return (
    <div className="flex flex-col items-center w-1/2 p-4">
      {/* {hour.dt && (
        <>

        </>
      )} */}
      <div>{new Date(hour.dt * 1000).toISOString()}</div>
      <div className="text-red-600 text-lg p-2">{hour.temp} &#8451;</div>
      <div className="text-red-600 p-2">{hour.feels_like} &#8451;</div>
      <div>{hour.weather[0].description}</div>
      <img src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`} />
      <div>{hour.pressure} hPa</div>
      <div>{hour.humidity} %</div>
      <div>{hour.pop * 100} %</div>
      <div className="p-2">{hour.wind_speed} m/s</div>
      <div className="p-2">{hour.wind_deg} &deg;</div>
    </div>
  )
}

export default HourlyComponent
