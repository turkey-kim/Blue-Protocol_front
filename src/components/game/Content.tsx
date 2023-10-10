import {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useParams} from 'react-router';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import ReactMarkdown from 'react-markdown';
import gameContents from '../../assets/textData/game';
import '../../styles/markdown.css';

const Content = () => {
  const {id} = useParams();
  const contents = gameContents;
  const [title, setTitle] = useState(contents[0].id);
  const [text, setText] = useState('');

  useEffect(() => {
    contents.forEach(content => {
      if (id === content.id) {
        setTitle(content.id);
        setText(content.content);
      } else if (!id) {
        setText(contents[0].content);
      }
    });
  }, [id]);
  return (
    <Container>
      <Title>{title}</Title>
      <ReactMarkdown className="markdown-body" remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {text}
      </ReactMarkdown>
    </Container>
  );
};

export default Content;

const Container = styled.div`
  width: 80%;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
  padding: 3rem 1rem 1rem 1rem;
`;

const Text = styled.div``;
