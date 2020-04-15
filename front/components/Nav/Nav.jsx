import styled from 'styled-components';

import Logo from './Logo.jsx';
import NavButton from './NavButton.jsx';

const NavContainer = styled.div`
  width: 100%;
  max-width: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #e9dfcb;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Nav = () => (
  <NavContainer>
    <Logo />
    <Buttons>
      <NavButton path="/study" icon="study" text="Study" />
      <NavButton path="/train" icon="train" text="Train" />
    </Buttons>
  </NavContainer>
);

export default Nav;
