import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import {FileDrop} from 'react-file-drop';
import {uploadImage, updateNews} from '../api';
import {useNavigate, useParams} from 'react-router';
import '../styles/markdown.css';
import {allNewsState} from '../states/atoms';
import {useRecoilValue} from 'recoil';

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

function EditNews() {
  const {id} = useParams();
  const allNews = useRecoilValue(allNewsState);
  const [newsObj, setNewsObj] = useState<NewsProps>();

  const [inputs, setInputs] = useState<any>({
    title: '',
    outline: '',
    category: '',
    thumbnail: '',
  });
  let {title, outline, category, thumbnail} = inputs;
  const [content, setContent] = useState<string | any>('');
  const navigate = useNavigate();

  useEffect(() => {
    allNews.forEach(element => {
      if (Number(id) === element.id) {
        console.log(element);
        setInputs({
          title: element.title,
          outline: element.outline,
          category: element.category,
          thumbnail: '',
        });
        setContent(element.content);
        setNewsObj(element);
      }
    });
  }, [allNews]);

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
    const result = `<image src="${imagePath}">`;
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
    if (!thumbnail) {
      thumbnail = newsObj?.thumbnail;
    }
    updateNews({title, outline, category, thumbnail, content, id});
    navigate('/');
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
        <Input name="title" onChange={onChange} value={inputs.title}></Input>
      </InputWrapper>
      <InputWrapper>
        <Label>뉴스 요약 :</Label>
        <Input name="outline" onChange={onChange} value={inputs.outline}></Input>
      </InputWrapper>
      <InputWrapper>
        <Label>카테고리 :</Label>
        <Input name="category" onChange={onChange} value={inputs.category}></Input>
      </InputWrapper>
      <FileBox>
        <Label>썸네일 이미지 업로드 </Label>
        <FileInput type="file" name="thumbnail" onChange={getThumbnailPath}></FileInput>
      </FileBox>
      <Container>
        <Editor onChange={onChangeContent} value={content}></Editor>
        <Button
          onClick={() => {
            submit();
          }}
        >
          SUBMIT
        </Button>
        <Preview>
          <ReactMarkdown className="markdown-body" remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {content}
          </ReactMarkdown>
        </Preview>
      </Container>
    </FileDrop>
  );
}

export default EditNews;

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
