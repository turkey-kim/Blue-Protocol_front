import styled from 'styled-components';
import NewsMain from '../components/news/NewsMain';
import NewsList from '../components/news/NewsList';
import AdminBtn from '../components/AdminButton';
import {useNavigate} from 'react-router';
import {allNewsState, loginState, recentNewsState} from '../states/atoms';
import {useRecoilState, useRecoilValue} from 'recoil';
import {useEffect} from 'react';
import {getNews, getLatestNews} from '../api';
import TopScrollButton from '../components/TopScrollButton';

const News = () => {
  const navigate = useNavigate();
  const isAdmin = useRecoilValue(loginState);
  const [allNews, setAllNews] = useRecoilState(allNewsState);
  const [recentNews, setRecentNews] = useRecoilState(recentNewsState);
  useEffect(() => {
    async function fetchData() {
      try {
        const allNewsData = await getNews();
        setAllNews(allNewsData);
        const recentNewsData = await getLatestNews();
        setRecentNews(recentNewsData);
      } catch (error) {
        console.error('데이터 가져오기 오류:', error);
      }
    }

    fetchData();
  }, []);
  return (
    <Container>
      {isAdmin ? (
        <AdminButton
          text="뉴스작성"
          position="fixed"
          onClick={() => {
            navigate('/news/post');
          }}
        />
      ) : null}
      <NewsMain></NewsMain>
      <NewsList></NewsList>
      <TopScrollButton />
    </Container>
  );
};

export default News;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

const AdminButton = styled(AdminBtn)`
  position: fixed;
  z-index: 1000;
`;
