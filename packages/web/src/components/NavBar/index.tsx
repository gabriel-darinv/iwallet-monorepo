import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Button,
  Logo,
  LogoIcon,
  WalletIcon,
  GraphIcon,
  UserIcon,
} from "./styles";

const NavBar: React.FC = (props) => {
  return (
    <Container>
      <Logo>
        <Link to="/">
          <LogoIcon /> <h1>iWallet</h1>
        </Link>
      </Logo>
      <NavButton>{props.children}</NavButton>
      <NavButton>
        <Link to="/wallet">
          <WalletIcon />
        </Link>
      </NavButton>
      <NavButton alert={true}>
        <Link to="/graphs">
          <GraphIcon />
        </Link>
      </NavButton>
      <NavButton>
        <Link to="/profile">
          <UserIcon />
        </Link>
      </NavButton>
    </Container>
  );
};

export default NavBar;

interface NavButtonProps {
  alert?: boolean;
  notifications?: number;
}

const NavButton: React.FC<NavButtonProps> = (props) => {
  return <Button>{props.children}</Button>;
};
