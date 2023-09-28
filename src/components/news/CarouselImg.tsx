import React, {useState} from 'react';
import styled from 'styled-components';
import {ReactComponent as RightBtn} from '../../assets/icons/화살표_우.svg';
import {ReactComponent as LeftBtn} from '../../assets/icons/화살표_좌.svg';
interface Props {
  key: string;
  imgUrl: string;
  category: string;
  title: string;
  content: string;
  time: string;
}
const CarouselImg = ({key, imgUrl, category, title, content, time}: Props) => {
  const totalLen = 3;

  const [curr, setCurr] = useState(0);

  setInterval(() => {
    if (curr === totalLen) {
      setCurr(0);
    } else {
      setCurr(curr + 1);
    }
  }, 3500);

  const Right = () => {
    if (curr !== totalLen) {
      setCurr(curr + 1);
    } else {
      setCurr(0);
    }
  };

  const Left = () => {
    if (curr !== 0) {
      setCurr(curr - 1);
    } else {
      setCurr(totalLen);
    }
  };

  return (
    <Container>
      <Img
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      ></Img>
    </Container>
  );
};

export default CarouselImg;

const Container = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const Img = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  filter: blur(0.4vh) grayscale(100);
`;

const Right = styled(RightBtn)`
  display: flex;
`;

const Left = styled(LeftBtn)`
  display: flex;
`;
