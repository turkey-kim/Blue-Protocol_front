import {SetStateAction, useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import {useRecoilValue} from 'recoil';
import {allNewsState, loginState, recentNewsState} from '../states/atoms';
import {deleteNews, getNews} from '../api';
import AdminButton from '../components/AdminButton';
import '../styles/markdown.css';

interface NewsProps {
  _id: string;
  id: number;
  title: string;
  category: string;
  outline: string;
  date: string;
  content: string;
  thumbnail: string;
}
function NewsDetail() {
  const {id} = useParams();
  const navigate = useNavigate();
  const [selectNews, setSelectNews] = useState<NewsProps>();
  const allNews = useRecoilValue(allNewsState);
  const isAdmin = useRecoilValue(loginState);
  const recentNews = useRecoilValue(recentNewsState);
  async function fetchData() {
    try {
      const allNewsData = await getNews();
      allNewsData.forEach((element: NewsProps | undefined) => {
        if (element && Number(id) === element.id) {
          setSelectNews(element);
          console.log('실행');
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (allNews.length === 0 && recentNews.length === 0) {
      fetchData();
    } else if (allNews.length > 0) {
      allNews.forEach(element => {
        if (Number(id) === element.id) {
          setSelectNews(element);
        }
      });
    } else {
      recentNews.forEach(element => {
        if (Number(id) === element.id) {
          setSelectNews(element);
        }
      });
    }
  }, [id, allNews, recentNews]);

  return (
    <Container>
      <Title>{selectNews?.title}</Title>
      {isAdmin ? (
        <AdminBar>
          <AdminButton
            text="수정"
            onClick={() => {
              navigate(`/news/edit/${id}`);
            }}
          />
          <AdminButton
            text="삭제"
            onClick={() => {
              deleteNews({id});
              navigate('/');
            }}
          />
        </AdminBar>
      ) : null}
      <Date>{selectNews?.date}</Date>

      <ReactMarkdown className="markdown-body" remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {selectNews?.content}
      </ReactMarkdown>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;

  & > * {
    background-color: #f8f9fa;
    width: 70%;
    box-sizing: border-box;
  }

  @media screen and (max-width: 990px) {
    width: auto;
    & > * {
      width: 100%;
    }
  }
`;

const Title = styled.div`
  min-height: 20vh;
  font-size: 4rem;
  padding: 5rem 5rem 3rem 5rem;

  @media screen and (max-width: 990px) {
    font-size: 2rem;
    padding-top: 6rem;
  }
`;

const Date = styled.div`
  padding: 1rem 5rem;
  color: #68c3c4;
  font-size: 1.2rem;
`;

const AdminBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
`;

export default NewsDetail;
