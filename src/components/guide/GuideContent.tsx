import {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useParams, useNavigate} from 'react-router';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import ReactMarkdown from 'react-markdown';
import {loginState} from '../../states/atoms';
import {useRecoilValue} from 'recoil';
import AdminButton from '../AdminButton';
import {deleteGuideData, getGuideData} from '../../api';
import {useQuery} from '@tanstack/react-query';
import '../../styles/markdown.css';

interface Props {
  isAdmin?: boolean;
}

const GuideContent = () => {
  const {id} = useParams();
  const [key, setKey] = useState<any>();
  const {data} = useQuery({
    queryKey: [`${key}/guide`],
    queryFn: async () => {
      return await getGuideData(key);
    },
    staleTime: Infinity,
  });
  const isAdmin = useRecoilValue(loginState);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const deleteOne = (title: string) => {
    deleteGuideData({title});
    navigate('/');
  };

  useEffect(() => {
    if (!id) {
      setKey('1-1. 기억을 찾아서');
    } else {
      setKey(id);
    }
  }, [id]);

  useEffect(() => {
    if (data) {
      setTitle(data?.title);
      setText(data?.content);
    }
  }, [data]);

  return (
    <Container>
      <Title>{title}</Title>
      <AdminBar isAdmin={isAdmin}>
        <AdminButton
          text="수정"
          onClick={() => {
            navigate(`/guide/edit/${title}`);
          }}
        />
        <AdminButton
          text="삭제"
          onClick={() => {
            deleteOne(title);
          }}
        />
      </AdminBar>
      <ReactMarkdown className="markdown-body" remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {text}
      </ReactMarkdown>
    </Container>
  );
};

export default GuideContent;

const Container = styled.div`
  width: 80%;
  @media screen and (max-width: 990px) {
    width: 100%;
    align-items: center;
  }
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
  padding: 3rem 1rem 1rem 1rem;

  @media screen and (max-width: 990px) {
    font-size: 1.5rem;
  }
`;

const AdminBar = styled.div<Props>`
  display: ${props => (props.isAdmin ? 'flex' : 'none')};
  justify-content: right;
  align-items: center;
  width: 100%;
  height: auto;
`;
