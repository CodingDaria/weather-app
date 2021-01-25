import React from 'react'
import { useSelector } from 'react-redux'
import { history } from '../redux'

const PeriodButton = ({ period }) => {
  const { currentWeather, selectedPeriod } = useSelector(({ weather }) => weather)
  const isDisabled = !currentWeather.name
  const selectedStyle = period.toLowerCase() === selectedPeriod.toLowerCase() ? 'bg-blue-400' : 'bg-blue-200 hover:bg-blue-300'
  const buttonStyle = isDisabled ? 'bg-blue-100 cursor-default text-gray-600' : selectedStyle
  return (
    <button
      type="button"
      className={`p-2 m-1 w-1/5 ${buttonStyle}`}
      disabled={isDisabled}
      onClick={() => {
        if (period === 'Current') {
          history.push('/')
        } else {
          history.push(`/${period.toLowerCase()}`)
        }
      }}
    >
      {period}
    </button>
  )
}

export default PeriodButton
