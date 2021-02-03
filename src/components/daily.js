import React from 'react'
import { useSelector } from 'react-redux'
import DailyComponent from './dailycomponent'

const Daily = () => {
  const { dailyWeather, currentWeather } = useSelector(({ weather }) => weather)
  return (
    <div className="flex flex-col items-center w-1/2 p-4">
      <div className="text-3xl font-bold">{currentWeather.name}</div>
      {dailyWeather.length &&
        dailyWeather.map((day) => {
          return <DailyComponent key={day.dt} day={day} />
        })}
    </div>
  )
}

export default Daily
