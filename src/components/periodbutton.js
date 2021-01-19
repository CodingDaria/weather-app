import React from 'react'
import { useDispatch } from 'react-redux'
import { history } from '../redux'
// import { getPeriodicWeather } from '../redux/reducers/weather'

const PeriodButton = ({ period }) => {
  const dispatch = useDispatch()
  return (
    <button
      type="button"
      className="border border-blue-600 bg-blue-100 hover:bg-blue-300 p-2 m-2"
      onClick={() => {
        // dispatch(getPeriodicWeather())
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

PeriodButton.propTypes = {}

export default PeriodButton
