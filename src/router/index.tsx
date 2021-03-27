import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/home/'
import Student from '../pages/student'

const Router: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/student" component={Student} />
    </Switch>
  )
}

export default Router
