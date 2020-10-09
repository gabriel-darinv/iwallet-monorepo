import React, { useState } from 'react';

import { Container } from './styles';

function initialState() {
  return { user:'', password:''}
}

interface EventProps {
  target: {
    value:string;
    name:string
  }
}

const Login: React.FC = () => {
  const [ values, setValues ] = useState(initialState);

  function onChange(event:EventProps) {
    const { value, name } = event.target; 
    setValues({
      ...values,
      [name]:value,
    })
  } 

  function onSubmit(event) {
    event.preventDefault();
  }

  return (
    <Container>
      <h1>Login</h1>
    </Container>
  );
}

export default Login;