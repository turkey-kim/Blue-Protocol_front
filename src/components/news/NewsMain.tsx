import React, {useEffect, useState} from 'react';
import {ReactComponent as RightBtn} from '../../assets/icons/rightarrow-logo.svg';
import {ReactComponent as LeftBtn} from '../../assets/icons/leftarrow-logo.svg';
import CreateDots from './CreateDots';
import styled from 'styled-components';
interface Props {
  imgUrl?: string;
  category?: string;
  title?: string;
  content?: string;
  time?: string;
}
const NewsMain = () => {
  const [arr, setarr] = useState<any>([{}]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const news = JSON.parse(localStorage.getItem('news') || '[]');
    setarr(news);
    const interval = setInterval(() => {
      setCurrentIndex(prevCurr => (prevCurr + 1) % totalLen);
    }, 3500);

    return () => {
      clearInterval(interval);
    };
  }, [arr.length]);

  const totalLen = arr.length;

  const RightFunc = () => {
    if (totalLen > 0) {
      setCurrentIndex(prevCurr => (prevCurr + 1) % totalLen);
    }
  };

  const LeftFunc = () => {
    if (totalLen > 0) {
      setCurrentIndex(prevCurr => (prevCurr - 1 + totalLen) % totalLen);
    }
  };

  const TestFunc = () => {
    console.log('clicked');
  };

  return (
    <Container>
      <Carousel style={{transform: `translateX(-${currentIndex * 100}%)`}} onClick={TestFunc}>
        {arr.length
          ? arr.map((element: any, key: number) => (
              <CarouselContainer key={element.title}>
                <CarouselImg key={element.title} src={element.img}></CarouselImg>
                <CarouselTextContainer key={element.title}>
                  <CarouselCategory key={element.title}>{element.category}</CarouselCategory>
                  <CarouselTitle key={element.title}>{element.title}</CarouselTitle>
                  <CarouselContent key={element.title}>{element.content}</CarouselContent>
                  <CarouselTime key={element.title}>{element.time}</CarouselTime>
                  <CarouselDotContainer key={element.title}>
                    <CreateDots
                      length={totalLen}
                      curr={currentIndex}
                      onDotClick={(currentIndex: number) => setCurrentIndex(currentIndex)}
                    ></CreateDots>
                  </CarouselDotContainer>
                </CarouselTextContainer>
                <CarouselImageContainer key={element.title}>
                  <CarouselPreview key={element.title} src={element.img}></CarouselPreview>
                  <CarouselImageBorder key={element.title}></CarouselImageBorder>
                </CarouselImageContainer>
              </CarouselContainer>
            ))
          : null}
      </Carousel>
      <LeftContainer onClick={LeftFunc}>
        <Left />
      </LeftContainer>
      <RightContainer onClick={RightFunc}>
        <Right />
      </RightContainer>
    </Container>
  );
};

export default NewsMain;

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 60vh;
  overflow: hidden;
`;

const Carousel = styled.div`
  display: flex;
  height: 95%;
  transition: transform 0.5s ease;
  cursor: pointer;
`;

const CarouselContainer = styled.div<Props>`
  position: relative;
  flex: 0 0 100vw;
`;

const CarouselImg = styled.img<Props>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(0.4vh) brightness(40%) grayscale(100%);
`;

const CarouselTextContainer = styled.div<Props>`
  position: absolute;
  top: 55%;
  left: 16vw;
  z-index: 1;
`;

const CarouselCategory = styled.div<Props>`
  font-size: 14px;
  color: #ffffff80;
  line-height: 16.41px;
  font-weight: 600;
  font-family: 'Roboto';
`;

const CarouselTitle = styled.div<Props>`
  font-size: 32px;
  color: #ffffff;
  line-height: 37.5px;
  font-weight: 600;
  font-family: 'Roboto';
`;

const CarouselContent = styled.p<Props>`
  font-size: 16px;
  color: #ffffff99;
  line-height: 18.75px;
  font-weight: 500;
  font-family: 'Roboto';
`;

const CarouselTime = styled.span<Props>`
  font-size: 12px;
  color: #ffffffcc;
  line-height: 14.06px;
  font-weight: 600;
  font-family: 'Roboto';
`;

const CarouselDotContainer = styled.div<Props>`
  position: absolute;
  margin-top: 2vh;
`;

const CarouselImageContainer = styled.div<Props>`
  position: absolute;
  top: 20%;
  right: 15rem;
  width: 40vw;
  z-index: 1;
`;

const CarouselPreview = styled.img<Props>`
  width: inherit;
  height: auto;
  object-fit: cover;
  background-position: center;
`;

const CarouselImageBorder = styled.div`
  position: absolute;
  top: -3%;
  right: -0.5rem;
  width: 40vw;
  height: 100%;
  border: 2px solid #ffffff;
  z-index: 2;
`;

const LeftContainer = styled.button`
  position: absolute;
  top: 50%;
  left: 5vw;
  background: none;
  border: none;
  cursor: pointer;
`;

const RightContainer = styled.button`
  position: absolute;
  top: 50%;
  right: 5vw;
  background: none;
  border: none;
  cursor: pointer;
`;

const Left = styled(LeftBtn)``;

const Right = styled(RightBtn)``;
