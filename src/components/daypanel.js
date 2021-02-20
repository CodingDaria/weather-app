import React from 'react'
import { useSelector } from 'react-redux'
import PanelButton from './panelbutton'

const DayPanel = () => {
  const { dailyWeather } = useSelector(({ weather }) => weather)
  return (
    <div className="flex justify-center w-2/3">
      <div className="flex flex-wrap items-center p-2">
        {dailyWeather.length &&
          dailyWeather.map((day) => {
            return <PanelButton key={day.dt} date={day} />
          })}
      </div>
    </div>
  )
}

export default DayPanel
