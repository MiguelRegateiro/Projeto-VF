import React from 'react';
import { NavbarContainer, Logo, NavItem, NavItemWrapper } from './Header.styles';
import imgLogo from '../../images/logo.png'


const Header: React.FC = () => {


  return (
    <NavbarContainer>
      <Logo src={imgLogo} alt="Logo" />
      <NavItemWrapper>
      <NavItem>Município</NavItem>
      <NavItem>Autarquia360</NavItem>
      <NavItem>Atividade Municipal</NavItem>
      <NavItem>Serviços Online</NavItem>
      <NavItem>Contactos</NavItem>
      </NavItemWrapper>
    </NavbarContainer>
  );
};

export default Header;
