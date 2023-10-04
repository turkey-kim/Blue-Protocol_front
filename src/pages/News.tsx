import styled from 'styled-components';
import NewsMain from '../components/news/NewsMain';
import NewsList from '../components/news/NewsList';
import React, {useEffect, useState} from 'react';

const News = () => {
  const [arr, setarr] = useState<any>([{}]);
  useEffect(() => {
    const news = JSON.parse(localStorage.getItem('news') || '[]');
    setarr(news);
  }, []);
  return (
    <Container>
      <NewsMain arr={arr}></NewsMain>
      <NewsList arr={arr}></NewsList>
      <BtnContainer>
        <MoreBtn>더보기</MoreBtn>
      </BtnContainer>
    </Container>
  );
};

export default News;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15vh;
`;

const MoreBtn = styled.button`
  width: 300px;
  height: 60px;
  font-family: Roboto;
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;
  background: linear-gradient(90deg, rgba(104, 195, 196, 0.5) 0%, rgba(0, 31, 169, 0.5) 100%);
  border: none;
  cursor: pointer;
  &:hover {
    background: linear-gradient(90deg, #68c3c4 0%, #001fa9 100%);
  }
  @media screen and (max-width: 990px) {
    width: 150px;
    heightL 40px;
    font-size: 12px;
  }
`;
