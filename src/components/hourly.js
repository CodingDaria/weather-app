import React from 'react'
import { useSelector } from 'react-redux'
import HourlyComponent from './hourlycomponent'

const Hourly = () => {
  const { hourlyWeather, currentWeather } = useSelector(({ weather }) => weather)
  return (
    <div className="flex flex-col items-center p-4">
      <div className="text-3xl font-bold">{currentWeather.name}</div>
      {hourlyWeather.length &&
        hourlyWeather.slice(0, 12).map((hour, index) => {
          return <HourlyComponent key={hour.dt} hour={hour} isOdd={index % 2} />
        })}
    </div>
  )
}

export default Hourly
