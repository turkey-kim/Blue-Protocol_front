import styled from 'styled-components';
import NewsMain from '../components/news/NewsMain';
import NewsList from '../components/news/NewsList';
import {useRecoilValue} from 'recoil';
import {allNewsState, recentNewsState} from '../states/atoms';

const News = () => {
  const allNews = useRecoilValue(allNewsState);
  const recentNews = useRecoilValue(recentNewsState);
  return (
    <Container>
      <NewsMain arr={recentNews}></NewsMain>
      <NewsList arr={allNews}></NewsList>
    </Container>
  );
};

export default News;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;
