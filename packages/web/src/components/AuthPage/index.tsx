import React from 'react';
import { Link } from 'react-router-dom';

import { Page, LoginContainer,
  Container, Title, ButtonContainer, Form, Button, Label, Input } from './styles';

interface AuthPageProps {
  // title:string;
  // login?:boolean;
  // action(): void;
 }

const AuthPage: React.FC<AuthPageProps> = ({ children }) => {
  return (
    <Page>
      <Container>
        { children }
      </Container>
    </Page>
  );
}

export default AuthPage;