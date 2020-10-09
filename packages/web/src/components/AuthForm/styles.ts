import styled from 'styled-components';

export const Page = styled.div`
  width:100%;
  height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
`;

export const Container = styled.div`
  width:35rem;
  min-height:50%;
  background: #c3c3cf;
  margin:1rem;
  padding:2rem;
  display:flex;
  flex-direction:column;
  border-radius:0.5rem;
`;

export const Form = styled.form`
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  margin-top:2rem;
`;

export const Title = styled.div`
  width:100%;
  height:5rem;
  display: flex;
  align-items:center;
  justify-content:center;
  margin-bottom:auto;

  >h1 {
    font-size:3rem;
  }
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
  background: #fdfdff;
  border-radius:0.3rem;
  margin-bottom:3rem;
  padding:1rem;
`;

export const ButtonContainer = styled.div`
  height:4.5rem;
  width:100%;
  display: flex;
  align-items:center;
  justify-content:space-around;

  > a {
    width:45%;
    height:4.5rem;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:0.3rem;

    text-decoration:none;
    color:#fefefe;
    background: #83808d;
  }
`;

export const Button = styled.button`
  width:45%;
  height:4.5rem;
  text-decoration:none;
  color:#fefefe;
  border-radius:0.3rem;
  background:#c060df;
`;

