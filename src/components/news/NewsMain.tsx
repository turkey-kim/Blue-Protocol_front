import React, { useEffect, useState } from 'react';
import NewsCarousel from './NewsCarousel';
import styled from 'styled-components';

const NewsMain = () => {
  const [Arr, setArr] = useState<any>([{}]);
  const [curr, setCurr] = useState(0);
  useEffect(() => {
    const news = JSON.parse(localStorage.getItem('news') || '');
    setArr(news);
  }, []);
  useEffect(() => {});
  return (
    <Container>
      <Carousel>
        {Arr.length
          ? Arr.map((element: any, key: number) => (
              <NewsCarousel
                key={element.title}
                imgUrl={element.img}
                category={element.category}
                title={element.title}
                content={element.content}
                time={element.time}
              ></NewsCarousel>
            ))
          : null}
      </Carousel>
    </Container>
  );
};

export default NewsMain;

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 40vh;
  background-color: red;
`;

const Carousel = styled.div`
  display: flex;
  width: 100%;
  height: 40vh;
  justify-content: center;
  align-items: center;
`;
