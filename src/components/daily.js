import React from 'react'
import { useSelector } from 'react-redux'
import DailyComponent from './dailycomponent'

const Daily = () => {
  const { dailyWeather } = useSelector(({ weather }) => weather)
  return (
    <div className="flex flex-col items-center w-1/2 p-4">
      {dailyWeather.length && dailyWeather.map((day) => {
        return <DailyComponent key={day.dt} day={day} />
      })}
    </div>
  )
}

export default Daily
