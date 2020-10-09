import React from 'react'
import { ThemeProvider } from 'styled-components';
import { AuthProvider }  from './contexts/auth';

import Routes from './routes/index';

import Global from './styles/global'

import { Dark, Light } from '@iwallet/themes';


const App: React.FC = () => {
  return (
    <AuthProvider>
      <Routes />
      <Global /> 
    </AuthProvider>
  )
}

export default App
