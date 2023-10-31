import React, {useState} from 'react';
import styled from 'styled-components';
import {postLastNewsIndex} from '../../api';
import {allNewsState} from '../../states/atoms';
import {useRecoilState} from 'recoil';
import {useNavigate} from 'react-router';
const NewsList = () => {
  const [allNews, setAllNews] = useRecoilState(allNewsState) as any[];
  const [len, setLen] = useState(allNews.length);
  const [check, setCheck] = useState(true);
  const navigate = useNavigate();
  async function getMoreNews() {
    let index = allNews[allNews.length - 1].id;
    const arr = await postLastNewsIndex(index);
    const newLen = len + arr.length;
    setAllNews(allNews.concat(arr));
    if (newLen === len) {
      setCheck(false);
    } else {
      setCheck(true);
    }

    setLen(newLen);
  }

  return (
    <>
      <NewsContainer>
        {allNews.length
          ? allNews.map((element: any, key: number) => (
              <Container
                key={element.key}
                onClick={() => {
                  navigate(`/news/${element.id}`);
                }}
              >
                <Img
                  style={{
                    backgroundImage: `url(${element.thumbnail})`,
                  }}
                />
                <TextContainer>
                  <Category>{element.category}</Category>
                  <Title>{element.title}</Title>
                  <Content>{element.outline}</Content>
                  <Time>{element.date}</Time>
                </TextContainer>
              </Container>
            ))
          : null}
      </NewsContainer>
      {check ? (
        <BtnContainer>
          <MoreBtn onClick={getMoreNews}>더보기</MoreBtn>
        </BtnContainer>
      ) : null}
    </>
  );
};

export default NewsList;

const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10vh 20vw 10vh 15vw;
  border-right: 2px solid;
  border-image: linear-gradient(to bottom, #68c3c4 0%, #001fa9 99.49%);
  border-image-slice: 1;

  @media screen and (max-width: 990px) {
    border: none;
    margin: 10vh 15vw 10vh 15vw;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 1rem;
  cursor: pointer;
  margin-bottom: 10vh;

  &:hover {
    transition: all 0.5s ease-in;
    background: linear-gradient(
      to right,
      rgba(106, 194, 195, 0.1) 60%,
      rgba(106, 194, 195, 0.5) 80%,
      rgba(106, 194, 195, 1) 100%
    );
  }

  @media screen and (max-width: 990px) {
    flex-direction: column;
    margin-bottom: 10vh;
    background: rgba(106, 194, 195, 0.2);

    &:hover {
      background: rgba(106, 194, 195, 0.2);
    }
  }
`;

const Img = styled.div`
  border-radius: 1rem;
  width: 510px;
  min-width: 400px;
  height: 200px;
  background-size: cover;
  background-position: center;

  @media screen and (max-width: 990px) {
    margin-bottom: 5vh;
    width: auto;
    min-width: 90%;
    margin-top: 15px;
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
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 800;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: left;

  @media screen and (max-width: 990px) {
    font-size: 1.5rem;
  }
`;

const Content = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
`;

const Time = styled.span`
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
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
    height: 40px;
    font-size: 12px;
  }
`;
