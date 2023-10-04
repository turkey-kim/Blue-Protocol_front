import React from 'react';
import styled from 'styled-components';

const NewsList = ({arr}: any) => {
  return (
    <>
      <NewsContainer>
        {arr.length
          ? arr.map((element: any, key: number) => (
              <Container key={element.key}>
                <Img src={element.newscard} />
                <Border />
                <TextContainer>
                  <Category>{element.category}</Category>
                  <Title>{element.title}</Title>
                  <Content>{element.content}</Content>
                  <Time>{element.time}</Time>
                </TextContainer>
              </Container>
            ))
          : null}
      </NewsContainer>
    </>
  );
};

export default NewsList;

const Border = styled.div`
  position: absolute;
  border: 2px solid #000000;
  width: 11vw;
  height: 35vh;
  box-sizing: border-box;
  border-radius: 10px;
  top: -1vh;
  left: 0.5vw;
  transition: all 0.2s;
  @media screen and (max-width: 990px) {
    display: none;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  border-radius: 1rem;
  cursor: pointer;
  height: 35vh;
  margin-bottom: 10vh;
  &:hover ${Border} {
    width: 99%;
  }
  

  
  @media screen and (max-width: 990px) {
    flex-direction: column;
    height: 100%;
    margin-bottom: 10vh;
    &:hover {
      background: linear-gradient(
        to bottom,
        rgba(106, 194, 195, 0.1) 60%,
        rgba(106, 194, 195, 0.5) 80%,
        rgba(106, 194, 195, 1) 100%
      );
  }
`;

const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10vh 30vw 10vh 15vw;
  border-right: 2px solid;
  border-image: linear-gradient(to bottom, #68c3c4 0%, #001fa9 99.49%);
  border-image-slice: 1;

  @media screen and (max-width: 990px) {
    border: none;
    margin: 10vh 15vw 10vh 15vw;
  }
`;

const Img = styled.img`
  width: 11vw;
  height: 35vh;
  border-radius: 20px;
  object-fit: cover;
  background-position: center;
  @media screen and (max-width: 990px) {
    margin-bottom: 5vh;
    width: 100%;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  margin-left: 10vw;
  width: 100%;
  @media screen and (max-width: 990px) {
    margin: 0;
    padding-bottom: 1rem;
    & > * {
      padding: 0 1rem;
    }
  }
`;

const Category = styled.span`
  color: #68c3c4e5;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
`;

const Title = styled.h1`
  font-family: Roboto;
  font-size: 32px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: left;
`;

const Content = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
`;

const Time = styled.span`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
`;
