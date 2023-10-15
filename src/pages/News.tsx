import styled from 'styled-components';
import NewsMain from '../components/news/NewsMain';
import NewsList from '../components/news/NewsList';
import AdminBtn from '../components/AdminButton';
import {useNavigate} from 'react-router';
import {loginState} from '../states/atoms';
import {useRecoilValue} from 'recoil';

const News = () => {
  const navigate = useNavigate();
  const isAdmin = useRecoilValue(loginState);
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
