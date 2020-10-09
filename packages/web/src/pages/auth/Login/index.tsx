import React, { useContext } from 'react';
import AuthForm, { FormInput } from '../../../components/AuthForm';
import AuthContext from '../../../contexts/auth'
import  {Link} from  'react-router-dom';

const Login: React.FC = () => {
  const { signed, getSignIn } = useContext(AuthContext);

  function handleLogIn() {
    getSignIn()
  }

  return (
    <AuthForm 
      title="Log In" 
      action={handleLogIn} 
      login 
    >
      <FormInput label="email" placeholder="example@iwallet.com"/>
      <FormInput label="password" placeholder="***"/>
    </AuthForm>
  );
}

export default Login;