import {useEffect, useState} from 'react';
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
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);

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
    <>
      <ImgContainer>
        <ImgInner src={selectNews?.thumbnail}></ImgInner>
        <ImgPrevContainer>
          <ImgPreview src={selectNews?.thumbnail}></ImgPreview>
          <ImgBorder></ImgBorder>
        </ImgPrevContainer>
      </ImgContainer>
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
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 95vw;
  margin-bottom: 100px;
  & > * {
    background-color: #f8f9fa;
    width: 70%;
    box-sizing: border-box;
  }

  @media screen and (max-width: 990px) {
    & > * {
      width: 100%;
    }
  }
`;

const ImgContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  border: 10px solid transparent;
  border-image-slice: 1;
  @media screen and (max-width: 990px) {
    position: relative;
    width: 100vw;
    height: 50vh;
  }
`;

const ImgInner = styled.img`
  display: flex;
  transition: opacity 0.3s ease;
  width: 100vw;
  height: 80vh;
  filter: blur(10px);
  @media screen and (max-width: 990px) {
    height: auto;
    transition: opacity 0.3s ease;
    filter: blur(5px);
  }
`;

const ImgPrevContainer = styled.div`
  position: absolute;
  top: 30vh;
  width: 70vw;
  height: 80vh;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
`;

const ImgPreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-position: center;
  @media screen and (max-width: 990px) {
    height: 30vh;
  }
`;

const ImgBorder = styled.div`
  position: absolute;
  top: -3vh;
  left: 1vw;
  width: 70vw;
  height: 80vh;
  border: 2px solid #ffffff;
  z-index: 4;
  @media screen and (max-width: 990px) {
    width: 70vw;
    right: 20vw;
    top: -1vh;
    max-height: 30vh;
  }
`;

const Title = styled.div`
  min-height: 20vh;
  font-size: 4rem;
  padding: 10rem 5rem 3rem 5rem;

  @media screen and (max-width: 990px) {
    font-size: 2rem;
    padding: 6rem 3rem 3rem 3rem;
  }
`;

const Date = styled.div`
  padding: 1rem 5rem;
  color: #68c3c4;
  font-size: 1.2rem;

  @media screen and (max-width: 990px) {
    padding-left: 3rem;
  }
`;

const AdminBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
`;

export default NewsDetail;
