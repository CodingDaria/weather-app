import React from 'react'

const HourlyComponent = ({ hour }) => {
  return (
    <div className="flex flex-col items-center w-1/2 p-4">
      {new Date(hour.dt * 1000).toISOString()}
    </div>
  )
}

export default HourlyComponent
