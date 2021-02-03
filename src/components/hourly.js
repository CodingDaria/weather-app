import React from 'react'
import { useSelector } from 'react-redux'
import HourlyComponent from './hourlycomponent'

const Hourly = () => {
  const { hourlyWeather, currentWeather } = useSelector(({ weather }) => weather)
  return (
    <div className="flex flex-col items-center w-1/2 p-4">
      <div className="text-3xl font-bold">{currentWeather.name}</div>
      {hourlyWeather.length &&
        hourlyWeather.map((hour) => {
          return <HourlyComponent key={hour.dt} hour={hour} />
        })}
    </div>
  )
}

export default Hourly
