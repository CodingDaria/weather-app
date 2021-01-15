import React from 'react'
import CityInput from './cityinput'

const Weather = () => {
  return (
    <div className="flex flex-col items-center w-screen p-4">
      <h1 className="text-lg font-bold">React, Express and Webpack Boilerplate Application</h1>
      <p className="text-lg">Includes React, Express, Webpack, TailwindCSS</p>
      <CityInput />
      {/* <div className="text-red-600 font-bold p-2 m-2">{JSON.stringify(responce)}</div> */}
    </div>
  )
}

export default Weather
