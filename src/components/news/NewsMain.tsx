import React, {useEffect, useState} from 'react';
import {ReactComponent as RightBtn} from '../../assets/icons/rightarrow-logo.svg';
import {ReactComponent as LeftBtn} from '../../assets/icons/leftarrow-logo.svg';
import CreateDots from './CreateDots';
import styled from 'styled-components';
import {recentNewsState} from '../../states/atoms';
import {useRecoilValue} from 'recoil';
import {useNavigate} from 'react-router';
import {sliceString, changeDateFormat} from '../../utils/string';

interface Props {
  thumbnail?: string;
  category?: string;
  title?: string;
  outline?: string;
  date?: string;
}
const NewsMain = () => {
  const recentNews = useRecoilValue(recentNewsState) as Array<Props>;
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalCheck, setIntervalCheck] = useState(0);

  const [touchX, setTouchX] = useState(0);

  const touchStart = (e: React.TouchEvent) => {
    setTouchX(e.changedTouches[0].pageX);
  };

  const touchEnd = (e: React.TouchEvent) => {
    const disX = touchX - e.changedTouches[0].pageX;
    if (disX > 50) {
      RightFunc();
    } else if (disX < -50) {
      LeftFunc();
    }
  };

  let intervals: NodeJS.Timeout[] = [];

  useEffect(() => {
    if (intervalCheck === 0) {
      const interval = setInterval(() => {
        setCurrentIndex(prevCurr => (prevCurr + 1) % totalLen);
      }, 3500);
      intervals.push(interval);
    } else {
      intervals.forEach(interval => clearInterval(interval));
      const newInterval = setInterval(() => {
        setCurrentIndex(prevCurr => (prevCurr + 1) % totalLen);
      }, 3500);
      intervals.push(newInterval);
    }

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, [intervals]);

  const totalLen = recentNews.length;

  const RightFunc = () => {
    if (totalLen > 0) {
      setCurrentIndex(prevCurr => (prevCurr + 1) % totalLen);
      setIntervalCheck(intervalCheck + 1);
    }
  };

  const LeftFunc = () => {
    if (totalLen > 0) {
      setCurrentIndex(prevCurr => (prevCurr - 1 + totalLen) % totalLen);
      setIntervalCheck(intervalCheck + 1);
    }
  };

  const HandleDotClick = (index: number, intervalcheck: number) => {
    setCurrentIndex(index);
    setIntervalCheck(intervalCheck);
  };

  return (
    <>
      <Container>
        <Carousel
          style={{transform: `translateX(-${currentIndex * 100}%)`}}
          onTouchStart={touchStart}
          onTouchEnd={touchEnd}
        >
          {recentNews.length
            ? recentNews.map((element: any, key: number) => (
                <CarouselContainer key={element.key}>
                  <CarouselImg src={element.thumbnail} />
                  <CarouselImgBottom />
                  <CarouselTextContainer>
                    <CarouselCategory>{element.category}</CarouselCategory>
                    <CarouselTitle
                      onClick={() => {
                        navigate(`/news/${element.id}`);
                      }}
                    >
                      {sliceString(element.title, 40)}
                    </CarouselTitle>
                    <CarouselContent>{sliceString(element.outline, 50)}</CarouselContent>
                    <CarouselTime>{changeDateFormat(element.date)}</CarouselTime>
                    <CarouselDotContainer>
                      <CreateDots
                        length={totalLen}
                        curr={currentIndex}
                        onDotClick={HandleDotClick}
                        intervalCheck={intervalCheck}
                      ></CreateDots>
                    </CarouselDotContainer>
                  </CarouselTextContainer>
                  <CarouselImageContainer
                    onClick={() => {
                      navigate(`/news/${element.id}`);
                    }}
                  >
                    <CarouselPreview src={element.thumbnail}></CarouselPreview>
                    <CarouselImageBorder></CarouselImageBorder>
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
    </>
  );
};

export default NewsMain;

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 60vh;
  overflow: hidden;
  @media screen and (max-width: 990px) {
    height: 80vh;
  }
`;

const Carousel = styled.div`
  display: flex;
  height: 95%;
  transition: opacity 0.3s ease;
  cursor: pointer;

  @media screen and (max-width: 990px) {
  }
`;

const CarouselContainer = styled.div<Props>`
  position: relative;
  flex: 0 0 100vw;

  @media screen and (max-width: 990px) {
    display: flex;
    flex-direction: column;
  }
`;

const CarouselImg = styled.img<Props>`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(0.3vh) brightness(40%) grayscale(100%);
`;

const CarouselImgBottom = styled.div`
  position: absolute;
  bottom: -10px;
  background-color: white;
  width: 100%;
  height: 10px;
`;

const CarouselTextContainer = styled.div<Props>`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: 420px;
  height: 150px;
  top: 50%;
  left: 16vw;
  z-index: 1;
  @media screen and (max-width: 990px) {
    max-width: 300px;
    margin-top: 4vh;
    top: 55%;
    left: 50%;
    gap: 2px;
    transform: translateX(-50%);
    text-align: left;
    align-items: flex-start;
  }
`;

const CarouselCategory = styled.div<Props>`
  font-size: 14px;
  color: #ffffff80;
  line-height: 16.41px;
  font-weight: 600;
  font-family: 'Roboto';
  @media screen and (max-width: 990px) {
    margin-bottom: 3vh;
  }
`;

const CarouselTitle = styled.div<Props>`
  font-size: 30px;
  color: #ffffff;
  line-height: 1.4;
  font-weight: 600;
  font-family: 'Roboto';
  @media screen and (max-width: 990px) {
    font-size: 20px;
    line-height: 30px;
  }
`;

const CarouselContent = styled.p<Props>`
  font-size: 16px;
  color: #ffffff99;
  line-height: 18.75px;
  font-weight: 500;
  font-family: 'Roboto';
  @media screen and (max-width: 990px) {
    font-size: 11px;
    line-height: 11px;
    width: 65vw;
  }
`;

const CarouselTime = styled.span<Props>`
  font-size: 12px;
  color: #ffffffcc;
  line-height: 14.06px;
  font-weight: 600;
  font-family: 'Roboto';
  @media screen and (max-width: 990px) {
    line-height: 11px;
    font-size: 11px;
  }
`;

const CarouselDotContainer = styled.div<Props>`
  position: bottom;
  margin-top: 2vh;
  @media screen and (max-width: 990px) {
    margin-top: 3vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CarouselImageContainer = styled.div<Props>`
  position: absolute;
  top: 20%;
  right: 15vw;
  width: 40vw;
  z-index: 1;
  @media screen and (max-width: 990px) {
    right: 50%;
    transform: translateX(50%);
    min-width: 300px;
    max-width: 65%;
    margin-top: -2%;
  }
`;

const CarouselPreview = styled.img<Props>`
  width: 40vw;
  height: 50vh;
  object-fit: cover;
  background-position: center;
  @media screen and (max-width: 990px) {
    width: 100%;
    height: 30vh;
  }
`;

const CarouselImageBorder = styled.div`
  position: absolute;
  top: -1.5vh;
  right: -0.8vw;
  width: 40vw;
  height: 97%;
  border: 2px solid #ffffff;
  z-index: 2;
  @media screen and (max-width: 990px) {
    width: 100%;
    right: -2vw;
    top: -1vh;
    max-height: 80vh;
  }
`;

const LeftContainer = styled.button`
  position: absolute;
  top: 50%;
  left: 5vw;
  background: none;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 990px) {
    display: none;
  }
`;

const RightContainer = styled.button`
  position: absolute;
  top: 50%;
  right: 5vw;
  background: none;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 990px) {
    display: none;
  }
`;

const Left = styled(LeftBtn)``;

const Right = styled(RightBtn)``;
