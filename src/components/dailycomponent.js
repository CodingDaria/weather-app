import React from 'react'

const DailyComponent = ({ day }) => {
  return <div className="flex flex-col items-center w-1/2 p-4">{new Date(day.dt * 1000).toISOString()}</div>
}

export default DailyComponent
