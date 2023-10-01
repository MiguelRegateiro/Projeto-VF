import styled from 'styled-components';

export const NavbarContainer = styled.div`
  background-color: white; 
  color: #246970;
  display: flex;
  align-items: center;
  height: 78px;
`;

export const Logo = styled.img`
  width: 192px; 
  height: 40px; 
  margin-right: 20px;
  margin-left: 138px;
`;

export const NavItem = styled.div`
  font-size: 14px;
  margin-left: 40px;
  cursor: pointer;
  text-transform: uppercase;
`;

export const MenuIcon = styled.div`
  font-size: 24px;
  cursor: pointer;
  display: none; 
    
  @media (max-width: 768px) {
    display: block; /* Mostra o ícone do menu em telas menores */
  }
`;

export const MobileNav = styled.div`
  display: none; 
  flex-direction: column;
  
  
  
  @media (max-width: 768px) {
    display: flex; 
  }
`;

export const MobileNavItem = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const NavItemWrapper = styled.div`
display: flex;
width: 100%;
float: right;
justify-content: flex-end;
margin-right: 140px;
}
`;