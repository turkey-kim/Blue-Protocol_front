import styled from 'styled-components';
import NewsMain from '../components/news/NewsMain';
import React from 'react';

const News = () => {
  return (
    <Container>
      <NewsMain></NewsMain>
    </Container>
  );
};

export default News;

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 50vh;
`;
