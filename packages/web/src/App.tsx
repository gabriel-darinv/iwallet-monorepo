import React, { useEffect } from 'react';
import light from '@iwallet/themes/light'
import dark from '@iwallet/themes/dark'

// import { Container } from './styles';

const App: React.FC = () => {
return (
  <h1>{dark.title} {light.title}</h1>
  )
}

export default App;