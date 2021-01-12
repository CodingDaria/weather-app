import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './redux'

import Component from './components/component'
import Test from './components/test'

const Root = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={() => <Component />} />
          <Route exact path="/test" component={() => <Test />} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  )
}

export default Root
