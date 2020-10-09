import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'

const AuthRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route exact path="/register" component={Register}/>
    </Switch>
  );
}

export default AuthRoutes;