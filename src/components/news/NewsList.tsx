import React from 'react';
import styled from 'styled-components';

interface Props {
  newscard?: any;
  category?: any;
  title?: any;
  content?: any;
  time?: any;
}

const NewsList = ({newscard, category, title, content, time}: Props) => {
  return (
    <Container>
      <ImgContainer>
        <Img src={newscard} />
        <Border />
      </ImgContainer>
      <TextContainer>
        <Category>{category}</Category>
        <Title>{title}</Title>
        <Content>{content}</Content>
        <Time>{time}</Time>
      </TextContainer>
    </Container>
  );
};

export default NewsList;

const Container = styled.div`
  display: flex;
`;

const ImgContainer = styled.div`
  position: relative;
  margin: 10vh 0 10vh 0;
`;

const Img = styled.img`
  width: 11vw;
  height: 35vh;
  border-radius: 20px;
  object-fit: cover;
  background-position: center;
`;

const Border = styled.div`
  position: absolute;
  border: 2px solid #000000;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 10px;
  top: -2vh;
  left: 1vw;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  margin-left: 10vw;
  width: 100%;
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
