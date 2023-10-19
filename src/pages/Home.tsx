import styled from 'styled-components';
import SectionMain from '../components/home/SectionMain';
import SectionNews from '../components/home/SectionNews';
import SectionInfo from '../components/home/SectionInfo';
import TopScrollButton from '../components/TopScrollButton';

const Home = () => {
  return (
    <Container>
      <SectionMain></SectionMain>
      <SectionNews></SectionNews>
      <SectionInfo></SectionInfo>
      <TopScrollButton />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;
