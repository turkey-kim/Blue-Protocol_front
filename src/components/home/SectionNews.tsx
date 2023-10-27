import styled from 'styled-components';
import NewsCard from './NewsCard';
import {ReactComponent as BoundaryIcon} from '../../assets/icons/boundary.svg';
import {ReactComponent as DotIcon} from '../../assets/icons/dot.svg';
import {useNavigate} from 'react-router';
import {useRecoilValue} from 'recoil';
import {recentNewsState} from '../../states/atoms';

const SectionNews = () => {
  let navigate = useNavigate();
  const recentNews = useRecoilValue(recentNewsState);
  const goToNews = () => {
    navigate('/news');
  };

  return (
    <Container>
      <InnerContainer>
        <Header>NEWS</Header>
        {recentNews.length
          ? recentNews.map((element: any, index: number) => (
              <NewsCard
                key={element.title}
                thumbnail={element.thumbnail}
                category={element.category}
                title={element.title}
                outline={element.outline}
                date={element.date}
                id={element.id}
              ></NewsCard>
            ))
          : null}
        <GoToNews>
          <Boundary className="arrow-icon" />
          <Dot className="dot-icon" />
          <Button onClick={goToNews}>더 많은 소식 보러가기</Button>
          <Dot className="dot-icon" />
          <Boundary className="arrow-icon" style={{transform: 'rotate(180deg)'}} />
        </GoToNews>
      </InnerContainer>
    </Container>
  );
};

export default SectionNews;

const Container = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 5rem 0;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  padding-bottom: 7rem;
  border-bottom: 2px solid;
  border-image: linear-gradient(to right, #68c3c4 30%, #001fa9 100%);
  border-image-slice: 1;

  @media screen and (max-width: 990px) {
    width: 85%;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #b2dfe1 25%, #8193d5 100%);
  position: relative;
  color: white;
  font-weight: 500;
  font-size: 2rem;
  margin-bottom: 3rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border-bottom: 30px solid transparent;
    border-left: 40px solid white;
    width: 179px;
    height: 0;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    border-top: 30px solid transparent;
    border-right: 40px solid white;
    width: 42px;
    height: 0;
  }
`;

const GoToNews = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;

  path {
    fill: #68c3c4;
  }

  &:hover .arrow-icon {
    path {
      transition: fill 1s;
      fill: url(#paint0_linear_293_214);
    }
  }

  &:hover .dot-icon {
    path {
      transition: fill 1s;
      fill: #001fa9;
    }
  }
`;

const Button = styled.span`
  min-width: 156px;
  width: auto;
  padding: 1rem;
  font-weight: 700;
  font-size: 1rem;
  text-align: center;
  cursor: pointer;

  @media screen and (max-width: 990px) {
    border-radius: 5px;
    background: linear-gradient(90deg, rgba(104, 195, 196, 0.5) 0%, rgba(0, 31, 169, 0.5) 100%);
    color: #ffffff;
    &:hover {
      background: linear-gradient(90deg, #68c3c4 0%, #001fa9 100%);
    }
  }
`;

const Boundary = styled(BoundaryIcon)`
  width: 450px;
  @media screen and (max-width: 990px) {
    display: none;
  }
`;
const Dot = styled(DotIcon)`
  margin: 0.5rem;
  @media screen and (max-width: 990px) {
    display: none;
  }
`;
