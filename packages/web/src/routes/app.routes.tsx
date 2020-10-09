import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Graphs from '../pages/app/Graphs'
import Home from '../pages/app/Home'
import Profile from '../pages/app/Profile'
import Wallet from '../pages/app/Wallet'

const AppRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/graphs" component={Graphs}/>
      <Route path="/wallet" component={Wallet}/>
      <Route path="/profile" component={Profile}/>
    </Switch>
  );
}

export default AppRoutes;