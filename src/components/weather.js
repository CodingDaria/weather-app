import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CityInput from './cityinput'
import PeriodButton from './periodbutton'
import Current from './current'
import Hourly from './hourly'
import Daily from './daily'

const Weather = () => {
  return (
    <div className="flex flex-col items-center w-screen p-4">
      <h1 className="text-lg font-bold">Check the weather in your city!</h1>
      <CityInput />
      <div>
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
