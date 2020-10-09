import styled from 'styled-components';
import  { BadgeDollar } from '@styled-icons/boxicons-solid/BadgeDollar';
import  { AccountBalanceWallet } from '@styled-icons/material/AccountBalanceWallet';
import  { GraphBar } from '@styled-icons/foundation/GraphBar';
import  { User } from '@styled-icons/boxicons-solid/User';
import  { Sun } from '@styled-icons/evaicons-solid/Sun';
import  { Moon } from '@styled-icons/evaicons-solid/Moon';

export const Container = styled.div`
  height:3.75rem;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content:flex-end;
  padding: 0 1rem;
`;

export const  Logo = styled.div`
  height:100%;
  max-width:10rem;
  margin-right:auto;
  padding: 0 1rem;
  /* background: ${props => props.theme.colors.quaternary}; */

  display: flex;
  align-items: center;
  justify-content: space-around;

  > a {
    width:100%;
    height:100%;

    display: flex;
    align-items:center;
    justify-content:center;

    text-decoration: none;
    color: ${props => props.theme.colors.white};

    > h1 {
      font-size:1.5rem;
      margin-left:0.5rem;

    }
  }


  @media (max-width: 500px) {
    > a {  
      justify-content:left;
      padding-left:0.1rem;

      > h1 {
        display:none;
      }
    }
  }
`;

export const Button = styled.div`
  width: 2.5rem;
  height:2.5rem;
  background: ${props => props.theme.colors.secondary};
  border-radius:50%;
  margin-left:1rem;
  display: flex;
  align-items:center;
  justify-content:center;

  appearance: none;
  border-style: none;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colors.tertiary};
  }

  > a {
    width:100%;
    height:100%;

    display: flex;
    align-items:center;
    justify-content:center;

    text-decoration: none;
    color: ${props => props.theme.colors.white};
  }
`;

// ====================== ICONS ======================

  export const LogoIcon = styled(BadgeDollar)`
    width: 2.5rem;
    height:2.5rem;
  `;

  export const WalletIcon = styled(AccountBalanceWallet)`
    width: 1rem;
    height:1rem;
  `;

  export const GraphIcon = styled(GraphBar)`
    width: 1rem;
    height:1rem;
  `;

  export const UserIcon = styled(User)`
    width: 1rem;
    height:1rem;
  `;

  export const SunIcon = styled(Sun)`
    width: 1rem;
    height:1rem;
  `;

export const MoonIcon = styled(Moon)`
    width: 1rem;
    height:1rem;
  `;