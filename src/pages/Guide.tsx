import styled from 'styled-components';
import Intro from '../components/Intro';
import {ReactComponent as DiaIcon} from '../assets/icons/borderIcon.svg';
import GuideSideBar from '../components/guide/GuideSidebar';

const Guide = () => {
  return (
    <Container>
      <Intro />
      <DiaBorderIcon />
      <GuideSideBar />
    </Container>
  );
};

export default Guide;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: auto;
`;

const DiaBorderIcon = styled(DiaIcon)`
  padding: 3rem;
`;
