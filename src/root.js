import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './redux'

import Weather from './components/weather'

const Root = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={() => <Weather />} />
          <Route exact path="/*" component={() => <Weather />} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  )
}

export default Root
