import React from 'react';
import { Link } from 'react-router-dom';

import AuthPage from '../../../components/AuthPage';
import { Button, ButtonContainer, Form, Input, Label, LoginContainer, Title } from '../../../components/AuthPage/styles';

import { useAuth } from '../../../contexts/auth';

const Login: React.FC = () => {
  const { signed, user, getSignIn } = useAuth();

  console.log(signed)
  console.log(user)
  
  function handleLogIn() {
    getSignIn()
  }

  return (
    <AuthPage>
        <LoginContainer>
          <Title><h1>Faça o Login</h1></Title>
          <Form>
            <Label>e-mail</Label>
            <Input />
            <Label>senha</Label>
            <Input />
            <ButtonContainer>
              <Link to="/register">Registre-se</Link>
              <Link to="/" onClick={handleLogIn}>Login</Link>
              {/* <Button onClick={handleLogIn}>Login</Button> */}
            </ButtonContainer>
          </Form>
        </LoginContainer>
    </AuthPage>
  );
}

export default Login;