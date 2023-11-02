import {ReactComponent as BookLogo} from '../../assets/icons/main-logo.svg';
import {ReactComponent as TextLogo} from '../../assets/icons/text-logo.svg';
import styled from 'styled-components';

const SectionInfo = () => {
  return (
    <Container>
      <Logo1 />
      <Logo2 />
      <Text1>
        기억을 잃은 채 별의 파멸이라는
        <Br /> 거대한 운명에 맞서는 당신을 위한 도서관
      </Text1>
      <TextContainer>
        <Text2>
          뮤리의 서재는 블루프로토콜 모험가분들을
          <Br /> 위한 다양한 정보들이 담겨 있습니다.
        </Text2>
        <Br />
        <Text2>
          게임에 대한 최신소식부터
          <Br /> 공략조가 제공하는 수준높은 가이드,
          <Br /> 게임 데이터베이스를 열람해보세요.
        </Text2>
      </TextContainer>
    </Container>
  );
};

export default SectionInfo;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1rem 0 7rem 0;
`;

const Logo1 = styled(BookLogo)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  path {
    fill: #4d4d4d;
  }

  @media screen and (max-width: 990px) {
    width: 150px;
  }
`;

const Logo2 = styled(TextLogo)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  path {
    fill: #4d4d4d;
  }

  @media screen and (max-width: 990px) {
    width: 200px;
    margin-top: 0;
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
  @media screen and (max-width: 990px) {
    padding: 1rem;
    margin-top: 1rem;
  }
`;

const TextContainer = styled.div`
  margin-top: 3rem;
  @media screen and (max-width: 990px) {
    padding: 1rem;
    margin-top: 0;
  }
`;

const Text2 = styled.div`
  font-family: '210 OmniGothic';
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.8rem;
  text-align: center;
  color: #000000;
  cursor: default;
`;

const Br = styled.br`
  display: none;
  @media screen and (max-width: 990px) {
    display: block;
  }
`;
