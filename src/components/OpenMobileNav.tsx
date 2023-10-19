import {ReactComponent as Arrow} from '../assets/icons/menuArrow.svg';
import styled from 'styled-components';

interface Props {
  isOpen?: boolean;
  onClick?: () => void;
}

const OpenMobileNav = ({isOpen, onClick}: Props) => {
  return (
    <>
      <MenuArrow isOpen={isOpen} onClick={onClick} />
    </>
  );
};

export default OpenMobileNav;

const MenuArrow = styled(Arrow)<Props>`
  display: none;

  @media screen and (max-width: 990px) {
    display: block;
    position: fixed;
    width: 40px;
    height: 40px;
    bottom: 30px;
    fill: #68c3c4;
    left: 5px;
    z-index: 10;
    transform: ${props => (props.isOpen ? 'rotate(180deg)' : null)};
  }
`;
