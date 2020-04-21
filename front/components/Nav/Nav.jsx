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
  margin-bottom: 5rem;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: -4rem;
  z-index: 1;
`;

const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 0;
  margin-top: -40px;
`;

const Arrow = styled.div`
  width: 0;
  height: 0;
  border-left: 2500px solid transparent;
  border-right: 2500px solid transparent;
  border-top: 70px solid #e9dfcb;
`;

const Nav = () => (
  <NavContainer>
    <Logo />
    <Buttons>
      <NavButton path="/study" icon="study" text="Study" />
      <NavButton path="/train" icon="train" text="Train" />
    </Buttons>
    <ArrowContainer>
      <Arrow />
    </ArrowContainer>
  </NavContainer>
);

export default Nav;
