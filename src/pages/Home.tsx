import styled from "styled-components";
import React from "react";
import Section_main from "../components/home/Section_main";

const Home = () => {
  return (
    <Container>
      <Section_main></Section_main>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;
