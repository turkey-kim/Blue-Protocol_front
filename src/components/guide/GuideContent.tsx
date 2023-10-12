import {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useParams} from 'react-router';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import ReactMarkdown from 'react-markdown';
import {guideData, loginState} from '../../states/atoms';
import {useRecoilValue} from 'recoil';
import AdminButton from '../AdminButton';
import {deleteGuideData} from '../../api';
import {useNavigate} from 'react-router';
import '../../styles/markdown.css';

interface Props {
  isAdmin?: boolean;
}

const GuideContent = () => {
  const {id} = useParams();
  const data = useRecoilValue(guideData);
  const isAdmin = useRecoilValue(loginState);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const deleteOne = (title: string) => {
    deleteGuideData({title});
    navigate('/');
  };

  useEffect(() => {
    data.forEach(element => {
      if (element.title === id) {
        setTitle(element.title);
        setText(element.content);
      }
    });
  }, [id]);

  return (
    <Container>
      <Title>{title}</Title>
      <AdminBar isAdmin={isAdmin}>
        <AdminButton text="수정" onClick={() => {}} />
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
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
  padding: 3rem 1rem 1rem 1rem;
`;

const AdminBar = styled.div<Props>`
  display: ${props => (props.isAdmin ? 'flex' : 'none')};
  justify-content: right;
  align-items: center;
  width: 100%;
  height: auto;
`;
