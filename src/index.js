import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
// import './css/style.css'
import 'tailwindcss/tailwind.css'
import './css/test.scss'

ReactDOM.render(
  <Root />,
  document.getElementById('root') // eslint-disable-line no-undef
)

// Needed for Hot Module Replacement
// eslint-disable-next-line no-undef
if (typeof module.hot !== 'undefined') {
  module.hot.accept() // eslint-disable-line no-undef
}
