import {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import {useRecoilValue} from 'recoil';
import {allNewsState, loginState, recentNewsState} from '../states/atoms';
import {deleteNews, getNews} from '../api';
import {changeDateFormat} from '../utils/string';
import AdminButton from '../components/AdminButton';
import TopScrollButton from '../components/TopScrollButton';
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
        <ImgInner img={selectNews?.thumbnail}></ImgInner>
        <ImgPrevContainer>
          <ImgPreview src={selectNews?.thumbnail}></ImgPreview>
          <ImgBorder></ImgBorder>
        </ImgPrevContainer>
        <WhiteSpace />
      </ImgContainer>
      <ContentContainer>
        <Title>{selectNews?.title}</Title>
        <Date>{selectNews?.date ? changeDateFormat(selectNews.date) : null}</Date>
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
        <TextContainer>
          <ReactMarkdown className="markdown-body" remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {selectNews?.content}
          </ReactMarkdown>
        </TextContainer>
      </ContentContainer>
      <TopScrollButton />
    </>
  );
}

const ImgContainer = styled.div`
  position: relative;
  width: 100vw;
  border-image-slice: 1;

  @media screen and (max-width: 990px) {
    display: none;
  }
`;

const ImgInner = styled.div<{img?: string}>`
  display: flex;
  width: 100vw;
  height: 70vh;
  background: linear-gradient(
      to bottom,
      rgba(20, 20, 20, 0.7) 0.5%,
      rgba(20, 20, 20, 0.7) 25%,
      rgba(20, 20, 20, 0.7) 50%,
      rgba(20, 20, 20, 0.7) 95%,
      rgba(20, 20, 20, 0.7) 100%
    ),
    url(${props => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 990px) {
    height: 60vh;
  }
`;

const ImgPrevContainer = styled.div`
  position: absolute;
  top: 20vh;
  width: 65vw;
  height: 70vh;
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
  top: -1.4rem;
  left: 1.4rem;
  width: 65vw;
  height: 70vh;
  border: 2px solid #ffffff;
  z-index: 4;
  @media screen and (max-width: 990px) {
    width: 70vw;
    right: 20vw;
    top: -1vh;
    max-height: 30vh;
  }
`;

const WhiteSpace = styled.div`
  height: 20vh;

  @media screen and (max-width: 990px) {
    height: 0;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 100px;
  align-self: center;

  & > * {
    width: 65%;
  }

  @media screen and (max-width: 990px) {
    & > * {
      width: 90%;
    }
  }
`;

const Title = styled.div`
  font-size: 3.5rem;
  padding: 3rem 0rem;
  text-align: center;
  font-weight: 700;

  @media screen and (max-width: 990px) {
    font-size: 2rem;
  }
`;

const Date = styled.div`
  padding-bottom: 2rem;
  color: #68c3c4;
  font-size: 1.4rem;
  font-weight: 600;

  @media screen and (max-width: 990px) {
    font-size: 1.2rem;
  }
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 20px;
  background-color: #fafafa;
  padding: 3rem 0rem;

  & > * {
    width: 80%;
  }

  @media screen and (max-width: 990px) {
    & > * {
      padding: 0rem;
      width: 90%;
      line-height: 2;
    }
  }
`;

const AdminBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
`;

export default NewsDetail;
