import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import {useAuth} from '../contexts/auth'
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routes: React.FC = () => {
  const { signed } = useAuth();

  return (
    <Router>
      { signed ? <AppRoutes/> : <AuthRoutes /> }
    </Router>
  );
}

export default Routes;