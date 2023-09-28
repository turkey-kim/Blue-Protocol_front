import styled from 'styled-components';
import SectionMain from '../components/home/Section_main';
import SectionNews from '../components/home/Section_news';
import SectionInfo from '../components/home/Section_info';

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
