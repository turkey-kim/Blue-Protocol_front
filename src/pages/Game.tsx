import {useState} from 'react';
import styled from 'styled-components';
import GameSideBar from '../components/game/GameSidebar';
import Content from '../components/game/Content';
import Intro from '../components/Intro';
import TopScrollButton from '../components/TopScrollButton';
import OpenMobileNav from '../components/OpenMobileNav';
import {ReactComponent as DiaBorder} from '../assets/icons/borderIcon.svg';
import {isMobileNavOpen} from '../states/atoms';
import {useRecoilState} from 'recoil';

const Game = () => {
  const [isNavOpen, setIsNavOpen] = useRecoilState(isMobileNavOpen);

  return (
    <Container>
      <Intro />
      <DiaBorderIcons />
      <ContentWrapper>
        <GameSideBar></GameSideBar>
        <Content></Content>
      </ContentWrapper>
      <OpenMobileNav
        onClick={() => {
          setIsNavOpen(!isNavOpen);
        }}
      />
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
  margin-bottom: 200px;
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
