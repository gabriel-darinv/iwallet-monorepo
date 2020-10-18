import React from 'react';
import { Link } from 'react-router-dom';

import AuthPage from '../../../components/AuthPage';
import { Button, ButtonContainer, Form, Input, Label, LoginContainer, Title } from '../../../components/AuthPage/styles';

import { useAuth } from '../../../contexts/auth';

const Login: React.FC = () => {
  const { signed, user, getSignIn } = useAuth();

  console.log(signed)
  console.log(user)
  
  function handleRegistration() {
    alert('registro ok')
    // getSignIn()
  }

  return (
    <AuthPage>
        <LoginContainer>
          <Title><h1>Registre-se</h1></Title>
          <Form>
            <Label>e-mail</Label>
            <Input />
            <Label>nome</Label>
            <Input />
            <Label>sobrenome</Label>
            <Input />
            <Label>senha</Label>
            <Input />
            <Label>repita a senha</Label>
            <Input />
            <ButtonContainer>
              <Link to="/">Login</Link>
              {/* <Link to="/">Login</Link> */}
              <Button onClick={handleRegistration}>Login</Button>
            </ButtonContainer>
          </Form>
        </LoginContainer>
    </AuthPage>
  );
}

export default Login;