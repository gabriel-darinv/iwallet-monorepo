import styled from 'styled-components';

export const Page = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
`;

export const Container = styled.div`
  position: absolute;
  width: 45rem;
  height: 100%;
  right: 0;
  top: 0;

  background: #FFFFFF;

  border: 2px solid #D3E2E5;
  box-sizing: border-box;

  display:flex;
  align-items:center;
  justify-content:center;
`;

export const LoginContainer = styled.div`
  width:60%;
  /* height:60%; */
  /* border:1px solid red; */
`;

export const Title = styled.div`
  width:100%;
  height:5rem;
  display: flex;
  align-items:center;
  padding: 0 2rem;
  /* justify-content:center; */
  /* margin-bottom:auto; */

  >h1 {
    font-size:2rem;
  }
`;

export const Form = styled.form`
  width:100%;
  /* height:auto; */
  margin-top:2rem;

  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`;

export const Label = styled.label`
  width:100%;
  height:2.5rem;
  padding: 0 1rem;
  font-size:1.5rem;
`;

export const Input = styled.input`
  width:100%;
  height:3rem;
  
  margin-bottom:3rem;
  padding:1rem;

  border-radius:0.3rem;

  background: #dddddf;

  font-size: 1.5rem;
  font-weight: 400;
`;

export const ButtonContainer = styled.div`
  height:4.5rem;
  width:100%;
  display: flex;
  align-items:center;
  justify-content:space-between;

  > :first-child {
    background: #83808d;
  }

  > a {
    width:45%;
    height:4.5rem;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:0.3rem;

    text-decoration:none;
    color:#fefefe;
    background: #c060df;
  }
`;

export const Button = styled.button`
  width:48%;
  height:4.5rem;
  text-decoration:none;
  color:#fefefe;
  border-radius:0.3rem;
  background:#c060df;
`;