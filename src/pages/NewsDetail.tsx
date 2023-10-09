import {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import {useRecoilValue} from 'recoil';
import {allNewsState, loginState} from '../states/atoms';
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

  useEffect(() => {
    allNews.forEach(element => {
      console.log(element);
      if (Number(id) === element.id) {
        setSelectNews(element);
        console.log('실행');
      }
    });
  }, [allNews]);

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
          <AdminButton text="삭제" onClick={() => {}} />
        </AdminBar>
      ) : null}
      <Date>{selectNews?.date}</Date>
      <Content>
        <ReactMarkdown className="markdown-body" remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {selectNews?.content}
        </ReactMarkdown>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  padding: 3rem;

  & > * {
    background-color: #f8f9fa;
    width: 70%;
    box-sizing: border-box;
    padding: 3rem;
  }
`;

const Title = styled.div`
  min-height: 20vh;
  font-size: 5rem;
  padding-top: 5rem;
`;
const Date = styled.div`
  color: skyblue;
  font-size: 1.2rem;
`;
const Content = styled.div`
  min-height: 100vh;
`;
const AdminBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
`;

export default NewsDetail;
