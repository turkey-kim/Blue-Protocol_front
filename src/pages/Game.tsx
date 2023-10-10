import styled from 'styled-components';
import SideBar from '../components/game/Sidebar';
import Content from '../components/game/Content';
import Intro from '../components/Intro';
import {ReactComponent as DiaBorder} from '../assets/icons/borderIcon.svg';

const Game = () => {
  return (
    <Container>
      <Intro />
      <DiaBorderIcons />
      <ContentWrapper>
        <SideBar></SideBar>
        <Content></Content>
      </ContentWrapper>
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
`;

const DiaBorderIcons = styled(DiaBorder)`
  padding: 3rem;
`;
