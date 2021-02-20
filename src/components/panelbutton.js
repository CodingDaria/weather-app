import React from 'react'

const PanelButton = ({ date }) => {
  const getDate = (unixsec) => {
    const date = new Date(unixsec * 1000)
    const dayOfWeek = date.toString().slice(0, 3)
    const dayOfMonth = date.getDate()
    return `${dayOfWeek} ${dayOfMonth}`
  }
  return (
    <button className="flex flex-col items-center w-32 h-28 p-2 bg-blue-200 hover:bg-blue-300">
      <div>{getDate(date.dt)}</div>
      <div className="flex">
        <div className="w-1/2 mr-1">
          <img
            className="bg-gray-400 object-contain"
            src={`http://openweathermap.org/img/wn/${date.weather[0].icon}@2x.png`}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-xl">{Math.round(date.temp.max)} &#8451;</div>
          <div>{Math.round(date.temp.min)} &#8451;</div>
        </div>
      </div>
    </button>
  )
}

export default PanelButton
