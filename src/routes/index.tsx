import React from 'react'
import { Route, Switch } from 'react-router'
import Trade from '../routes/Trade'
import Hello from '../components/Hello'
import Counter from '../components/Counter'
import NoMatch from '../components/NoMatch'
import NavBar from '../components/NavBar'

const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route path="/hello" component={Hello} />
      <Route path="/counter" component={Counter} />
      <Route path="/" component={Trade} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default routes
