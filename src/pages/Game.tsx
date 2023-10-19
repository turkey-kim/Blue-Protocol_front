import styled from 'styled-components';
import SideBar from '../components/game/GameSidebar';
import Content from '../components/game/Content';
import Intro from '../components/Intro';
import {ReactComponent as DiaBorder} from '../assets/icons/borderIcon.svg';
import {ReactComponent as Arrow} from '../assets/icons/menuArrow.svg';
import {useState} from 'react';
import TopScrollButton from '../components/TopScrollButton';

interface Props {
  isOpen?: boolean;
}

const Game = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <Container>
      <Intro />
      <DiaBorderIcons />
      <ContentWrapper>
        <MenuArrow
          isOpen={openSidebar}
          onClick={() => {
            setOpenSidebar(!openSidebar);
          }}
        />
        <SideBar isOpen={openSidebar} setIsOpen={setOpenSidebar}></SideBar>
        <Content></Content>
      </ContentWrapper>
      <TopScrollButton />
    </Container>
  );
};

export default Game;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: auto;
`;

const ContentWrapper = styled.div`
  display: flex;
  max-width: 1280px;
  width: 85%;
  height: auto;
  min-height: 70vh;
  @media screen and (max-width: 990px) {
    margin-top: 50px;
  }
`;

const DiaBorderIcons = styled(DiaBorder)`
  padding: 3rem;

  @media screen and (max-width: 990px) {
    display: none;
  }
`;

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
