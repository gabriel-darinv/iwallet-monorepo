import React from 'react';
import { Link } from 'react-router-dom';

import { 
  Page, Container, Form, Title, Label, Input, ButtonContainer, Button
 } from './styles';

 interface AuthFormProps {
  title:string;
  login?:boolean;
  action(): void;
 }

const AuthForm: React.FC<AuthFormProps> = ({ children, title, login, action }) => {

  return (
    <Page>
      <Container>
        <Title><h1>iWallet/{ title }</h1></Title>
        <Form>
          { children }
          <ButtonContainer>
            <Link to={login? '/register' : '/'}>
              { login? 'Register' : 'Log In' }
            </Link>
            <Button type="submit" onClick={action}>
              { login? 'Log In' : 'Register' }
            </Button>
            {/* <Link to="#" onClick={action}>
              { login? 'Log In' : 'Register' }
            </Link> */}
          </ButtonContainer>
        </Form>
      </Container>
    </Page>
  );
}

export default AuthForm;

interface FormProps {
  label:string;
  placeholder?:string;
  value?:string;
}

export const FormInput: React.FC<FormProps> = ({ label, placeholder }) => {
  return(
    <>
      <Label>{ label }</Label>
      <Input placeholder={ placeholder? placeholder : label }/>
    </>
  )
}