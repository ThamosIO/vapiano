import { Link } from 'react-router-dom';
import styled from 'styled-components';

import study from '../../assets/study.png';
import train from '../../assets/train.png';

const Image = styled.img`
  width: 4rem;
`;

const ButtonLink = styled(Link)`
  width: 8rem;
  height: 8rem;
  background: #fffbf3;
  border-radius: 4rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 1.6rem;
  text-decoration: none;
  margin: 0 1rem;
`;

const Text = styled.div`
  font-weight: 400;
  color: #92cd9a;
`;

const NavButton = ({ path, icon, text }) => (
  <ButtonLink to={path}>
    <Image src={icon === 'study' ? study : train} />
    <Text>{text}</Text>
  </ButtonLink>
);

export default NavButton;
