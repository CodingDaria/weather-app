import React from 'react'

const DailyComponent = ({ day }) => {
  const dayPeriods = ['morn', 'day', 'eve', 'night']
  const getDate = (unixsec) => {
    const date = new Date(unixsec * 1000)
    const dayOfWeek = date.toString().slice(0, 3)
    const dayOfMonth = date.getDate()
    return `${dayOfWeek} ${dayOfMonth}`
  }
  return (
    <div className="flex flex-col items-center p-3">
      <div>{getDate(day.dt)}</div>
      <div className="flex m-1">
        {dayPeriods.map((period) => {
          return <div className="text-red-600 text-lg p-2">{day.temp[period]} &#8451;</div>
        })}
      </div>
      <div className="flex m-1">
        {dayPeriods.map((period) => {
          return <div className="text-red-600 p-2">{day.feels_like[period]} &#8451;</div>
        })}
      </div>
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
