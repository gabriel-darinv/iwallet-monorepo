import React from 'react'
import AuthForm, { FormInput } from '../../../components/AuthForm'
// import {  } from 'react-router-dom';

const Register: React.FC = () => {

  function handleRegister(){
    alert("Register")
  }

  return (
    <AuthForm 
      title="Register"
      action={handleRegister} 
    >
      <FormInput label="Name" placeholder="" />
      <FormInput label="Surname" placeholder="" />
      <FormInput label="Email" placeholder="example@iwallet.com" />
      <FormInput label="Password" placeholder="***" />
      <FormInput label="Repeat password" placeholder="***" />
    </AuthForm>
  )
}

export default Register