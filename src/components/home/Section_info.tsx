import React from 'react';
import { ReactComponent as BookLogo } from '../../assets/icons/main-logo.svg';
import { ReactComponent as TextLogo } from '../../assets/icons/text-logo.svg';
import styled from 'styled-components';
const Info = () => {
  return (
    <Container>
      <Logo1 />
      <Logo2 />
      <Text1>
        기억을 잃은 채 별의 파멸이라는 거대한 운명에 맞서는 당신을 위한 도서관
      </Text1>
      <TextContainer>
        <Text2>
          뮤리의 서재는 블루프로토콜 모험가분들을 위한 다양한 정보들이 담겨
          있습니다.
        </Text2>
        <Text2>
          게임에 대한 최신소식부터 공략조가 제공하는 수준높은 가이드, 게임
          데이터베이스를 열람해보세요.
        </Text2>
      </TextContainer>
    </Container>
  );
};

export default Info;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 3rem;
`;

const Logo1 = styled(BookLogo)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  path {
    fill: #000000;
  }
`;

const Logo2 = styled(TextLogo)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  path {
    fill: #000000;
  }
`;

const Text1 = styled.div`
  margin-top: 2rem;
  font-family: '210 OmniGothic';
  font-weight: 400;
  font-size: 1rem;
  line-height: 23px;
  text-align: center;
  color: gray;
  cursor: default;
`;

const TextContainer = styled.div`
  margin-top: 3rem;
`;
const Text2 = styled.div`
  font-family: '210 OmniGothic';
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 23px;
  text-align: center;
  color: #000000;
  cursor: default;
`;
