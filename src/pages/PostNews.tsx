import React, {useState} from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import {FileDrop} from 'react-file-drop';
import {uploadImage, uploadNews} from '../api';
import {useNavigate} from 'react-router';
import '../styles/markdown.css';

function PostNews() {
  const [inputs, setInputs] = useState({
    title: '',
    outline: '',
    category: '',
    thumbnail: '',
  });
  const {title, outline, category, thumbnail} = inputs;
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<any>) => {
    const {value, name} = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const getImagePath = async (files: FileList, formData: FormData) => {
    const file = await uploadImage(formData);
    const imagePath = file?.data;
    const result = `<img src="${imagePath}">`;
    setContent(content + result);
  };

  const getThumbnailPath = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const {name} = e.target;
    if (files) {
      const formdata = new FormData();
      formdata.append('image', files[0]);
      const result = await uploadImage(formdata);
      setInputs({
        ...inputs,
        [name]: result?.data,
      });
    } else {
      return;
    }
  };

  const submit = () => {
    uploadNews({title, outline, category, thumbnail, content});
    navigate('/news');
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
        <Label>뉴스 제목 :</Label>
        <Input name="title" onChange={onChange}></Input>
      </InputWrapper>
      <InputWrapper>
        <Label>뉴스 요약 :</Label>
        <Input name="outline" onChange={onChange}></Input>
      </InputWrapper>
      <InputWrapper>
        <Label>카테고리 :</Label>
        <Input name="category" onChange={onChange}></Input>
      </InputWrapper>
      <FileBox>
        <Label>썸네일 이미지 업로드 </Label>
        <FileInput type="file" name="thumbnail" onChange={getThumbnailPath}></FileInput>
      </FileBox>
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
}

export default PostNews;

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
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
`;

const Input = styled.input`
  flex: 10;
`;

const FileBox = styled.div`
  width: 100%;
  padding: 0.5rem 2rem;
`;

const FileInput = styled.input`
  flex: 10;
`;
