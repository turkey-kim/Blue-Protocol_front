import {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useParams, useNavigate} from 'react-router';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import ReactMarkdown from 'react-markdown';
import {loginState} from '../../states/atoms';
import {useRecoilValue} from 'recoil';
import AdminButton from '../AdminButton';
import {deleteDatabaseData, getDatabaseContent} from '../../api';
import '../../styles/markdown.css';
import {useQuery} from '@tanstack/react-query';

interface Props {
  isAdmin?: boolean;
}

const DatabaseContent = () => {
  const {id} = useParams();
  const isAdmin = useRecoilValue(loginState);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const {data} = useQuery({
    queryKey: [`${id}/database`],
    queryFn: async () => {
      return await getDatabaseContent(id);
    },
    staleTime: Infinity,
  });

  const deleteOne = (title: string) => {
    deleteDatabaseData({title});
    navigate('/');
  };

  useEffect(() => {
    if (id === undefined) {
      setTitle(data?.title);
      setText(data?.content);
    }
  }, []);

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
            navigate(`/database/edit/${title}`);
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

export default DatabaseContent;

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
