import React from 'react'
import { history } from '../redux'

const PeriodButton = ({ period }) => {
  return (
    <button
      type="button"
      className="border border-blue-600 bg-blue-100 hover:bg-blue-300 p-2 m-2"
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
