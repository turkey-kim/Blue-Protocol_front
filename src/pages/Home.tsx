import styled from "styled-components";
import Section_main from "../components/home/Section_main";
import Section_news from "../components/home/Section_news";

const Home = () => {
  return (
    <Container>
      <Section_main></Section_main>
      <Section_news></Section_news>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;
