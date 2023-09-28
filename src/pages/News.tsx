import styled from 'styled-components';
import NewsMain from '../components/news/NewsMain';
import NewsList from '../components/news/NewsList';
import React from 'react';

const News = () => {
  return (
    <Container>
      <NewsMain></NewsMain>
      <NewsList></NewsList>
    </Container>
  );
};

export default News;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;
