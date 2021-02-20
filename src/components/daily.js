import React from 'react'
import { useSelector } from 'react-redux'
import DailyComponent from './dailycomponent'
import DayPanel from './daypanel'

const Daily = () => {
  const { dailyWeather, currentWeather } = useSelector(({ weather }) => weather)
  return (
    <div className="flex flex-col items-center p-4">
      <div className="text-3xl font-bold">{currentWeather.name}</div>
      <DayPanel />
      {dailyWeather.length &&
        dailyWeather.map((day) => {
          return <DailyComponent key={day.dt} day={day} />
        })}
      <div className="m-2 text-sm">
        Last update: {new Date(currentWeather.dt * 1000).toLocaleString()}
      </div>
    </div>
  )
}

export default Daily
