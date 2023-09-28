import React, {useEffect, useState} from 'react';
import {ReactComponent as RightBtn} from '../../assets/icons/화살표_우.svg';
import {ReactComponent as LeftBtn} from '../../assets/icons/화살표_좌.svg';
import styled from 'styled-components';
interface Props {
  imgUrl?: string;
  category?: string;
  title?: string;
  content?: string;
  time?: string;
}
const NewsMain = () => {
  const [Arr, setArr] = useState<any>([{}]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const news = JSON.parse(localStorage.getItem('news') || '[]');
    setArr(news);
    const interval = setInterval(() => {
      setCurrentIndex(prevCurr => (prevCurr + 1) % totalLen);
    }, 3500);

    return () => {
      clearInterval(interval);
    };
  }, [Arr.length]);

  const totalLen = Arr.length;

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

  return (
    <Container>
      <Carousel style={{transform: `translateX(-${currentIndex * 100}%)`}}>
        {Arr.length
          ? Arr.map((element: any, key: number) => (
              <CarouselContainer key={element.title}>
                <CarouselImg key={element.title} src={element.img}></CarouselImg>
                <CarouselTextContainer key={element.title}>
                  <CarouselCategory key={element.title} category={element.category}></CarouselCategory>
                  <CarouselTitle key={element.title} title={element.title}></CarouselTitle>
                  <CarouselContent key={element.title} content={element.content}></CarouselContent>
                  <CarouselTime key={element.title} time={element.time}></CarouselTime>
                </CarouselTextContainer>
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
  height: 100%;
  transition: transform 0.5s ease;
`;

const CarouselContainer = styled.div<Props>`
  position: relative;
  flex: 0 0 100vw;
`;

const CarouselImg = styled.img<Props>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(0.4vh) grayscale(100);
`;

const CarouselTextContainer = styled.div<Props>`
  position: absolute;
  top: 55%;
  left: 20rem;
  width: 100px;
  height: 100px;
  background-color: red;
  z-index: 1;
`;

const CarouselCategory = styled.span<Props>`
  font-size: 10px;
  color: white;
  margin-bottom: 40px;
`;

const CarouselTitle = styled.span<Props>`
  font-size: 10px;
  color: white;
`;

const CarouselContent = styled.span<Props>`
  font-size: 10px;
  color: white;
`;

const CarouselTime = styled.span<Props>`
  font-size: 10px;
  color: white;
`;

const LeftContainer = styled.button`
  position: absolute;
  top: 60%;
  left: 10rem;
  background: none;
  border: none;
  cursor: pointer;
`;

const RightContainer = styled.button`
  position: absolute;
  top: 60%;
  right: 10rem;
  background: none;
  border: none;
  cursor: pointer;
`;

const Left = styled(LeftBtn)``;

const Right = styled(RightBtn)``;
