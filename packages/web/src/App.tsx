import React from 'react'
import { AuthProvider }  from './contexts/auth';
import { ThemeProvider } from 'styled-components';
import { dark, light } from '@iwallet/themes'

import Routes from './routes/index';

import Global from './styles/global'

const App: React.FC = () => {
  
  return (
    <AuthProvider>
      <ThemeProvider theme={light}>
        <Routes />
        <Global /> 
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App;
