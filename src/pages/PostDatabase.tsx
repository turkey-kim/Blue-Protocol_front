import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import {FileDrop} from 'react-file-drop';
import {uploadImage, uploadDatabaseData, getDatabaseList, isValidTitle} from '../api';
import {useNavigate} from 'react-router';
import '../styles/markdown.css';
import {databaseList} from '../states/atoms';
import {useRecoilState} from 'recoil';
import HtmlPrinter from '../components/textEditor/HtmlPrinter';

const PostDatabase = () => {
  const [inputs, setInputs] = useState({
    category: '클래스',
    title: '',
  });
  const {category, title} = inputs;
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const [list, setList] = useRecoilState(databaseList);
  useEffect(() => {
    const fetchData = async () => {
      if (list.length === 0) {
        const res = await getDatabaseList();
        setList(res);
      }
    };
    fetchData();
  }, []);
  const onChange = (e: React.ChangeEvent<any>) => {
    const {value, name} = e.target;
    console.log(value, name);
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const getImagePath = async (files: FileList, formData: FormData) => {
    const file = await uploadImage(formData);
    const imagePath = file?.data;
    const result = `<img src="${imagePath}">`;
    setContent(content + result);
  };

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const submit = async () => {
    const isTitlevalid = await isValidTitle('database', title);
    if (isTitlevalid) {
      uploadDatabaseData({category, title, content});
      navigate('/database');
    } else {
      alert('중복된 제목이니 다른 제목을 쓰라우.');
    }
  };

  return (
    <FileDrop
      onDrop={files => {
        if (files) {
          const formData = new FormData();
          formData.append('image', files[0]);
          getImagePath(files, formData);
        }
      }}
    >
      <InputWrapper>
        <Label>카테고리 :</Label>
        <Toggle name="category" onChange={onChange}>
          <option value="클래스">클래스</option>
          <option value="무기">무기</option>
          <option value="이매진">이매진</option>
          <option value="적">적</option>
          <option value="아이템">아이템</option>
        </Toggle>
      </InputWrapper>
      <InputWrapper>
        <Label>컨텐츠 제목 :</Label>
        <Input name="title" onChange={onChange}></Input>
      </InputWrapper>
      <InputWrapper>
        <HtmlPrinter />
      </InputWrapper>
      <Container>
        <Editor onChange={onChangeContent} value={content}></Editor>
        <Button onClick={submit}>SUBMIT</Button>
        <Preview>
          <ReactMarkdown className="markdown-body" remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {content}
          </ReactMarkdown>
        </Preview>
      </Container>
    </FileDrop>
  );
};

const Container = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  margin: 0 1rem;
`;

const Editor = styled.textarea`
  flex: 1;
  box-sizing: border-box;
  min-height: 100%;
  padding: 2rem;
  font-size: 1.2rem;
  overflow: scroll;
`;

const Preview = styled.div`
  flex: 1;
  min-height: 100%;
`;

const Button = styled.button`
  position: fixed;
  z-index: 100;
  width: 100px;
  height: 50px;
  margin: 1rem;
  right: 10px;
  background-color: aqua;
  cursor: pointer;
`;

const InputWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  margin: none;
  padding: 0.5rem 2rem;
`;

const Label = styled.span`
  flex: 1;
  font-size: 1.3rem;
  font-weight: 700;
  text-align: center;
`;

const Toggle = styled.select`
  flex: 10;
`;
const Input = styled.input`
  flex: 10;
`;

export default PostDatabase;
