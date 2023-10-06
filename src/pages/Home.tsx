import styled from 'styled-components';
import SectionMain from '../components/home/SectionMain';
import SectionNews from '../components/home/SectionNews';
import SectionInfo from '../components/home/SectionInfo';
import {recentNewsState} from '../states/atoms';
import {useRecoilValue} from 'recoil';

const Home = () => {
  return (
    <Container>
      <SectionMain></SectionMain>
      <SectionNews></SectionNews>
      <SectionInfo></SectionInfo>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;
