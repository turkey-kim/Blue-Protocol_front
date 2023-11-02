import styled from 'styled-components';
import SectionMain from '../components/home/SectionMain';
import SectionNews from '../components/home/SectionNews';
import SectionInfo from '../components/home/SectionInfo';
import TopScrollButton from '../components/TopScrollButton';
import {recentNewsState} from '../states/atoms';
import {useRecoilState} from 'recoil';
import {useEffect} from 'react';
import {getLatestNews} from '../api';

const Home = () => {
  const [recentNews, setRecentNews] = useRecoilState(recentNewsState);
  useEffect(() => {
    async function fetchData() {
      try {
        const recentNewsData = await getLatestNews();
        setRecentNews(recentNewsData);
        console.log('데이터가져옴');
      } catch (error) {
        console.error('데이터 가져오기 오류:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <Container>
      <SectionMain></SectionMain>
      <SectionNews></SectionNews>
      <SectionInfo></SectionInfo>
      <TopScrollButton />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;
