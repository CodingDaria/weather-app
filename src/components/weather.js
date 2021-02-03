import React, { useEffect } from 'react'
import { Route, Switch, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import CityInput from './cityinput'
import PeriodButton from './periodbutton'
import Current from './current'
import Hourly from './hourly'
import Daily from './daily'
import { getWeather, setPeriod } from '../redux/reducers/weather'

const Weather = () => {
  const city = localStorage.getItem('city')
  const { 0: period } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getWeather(city))
    if (period) {
      dispatch(setPeriod(period))
    } else {
      dispatch(setPeriod('Current'))
    }
  })
  return (
    <div className="flex flex-col items-center w-screen p-4">
      <h1 className="text-lg font-bold">Check the weather in your city!</h1>
      <CityInput />
      <div className="w-2/3 flex justify-center m-2">
        {['Current', 'Hourly', 'Daily'].map((period) => {
          return <PeriodButton key={period} period={period} />
        })}
      </div>
      <Switch>
        <Route exact path="/" component={() => <Current />} />
        <Route exact path="/hourly" component={() => <Hourly />} />
        <Route exact path="/daily" component={() => <Daily />} />
      </Switch>
    </div>
  )
}

export default Weather
