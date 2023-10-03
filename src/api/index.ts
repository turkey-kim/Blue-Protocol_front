import axios from 'axios';
import {SERVER_URL} from '../constant';
import {Outlet} from 'react-router';

interface LoginProps {
  id: string;
  pw: string;
}

interface NewsProps {
  title: string | undefined;
  outline: string | undefined;
  category: string | undefined;
  thumbnail: string | undefined;
  content: string | undefined;
}
export const submitLogin = async ({id, pw}: LoginProps) => {
  return axios.post(`${SERVER_URL}/admin/login`, {
    id: id,
    pw: pw,
  });
};

export const uploadImage = async (formData: FormData) => {
  return axios.post(`${SERVER_URL}/api/uploadImage`, formData);
};

export const uploadNews = async ({title, outline, category, thumbnail, content}: NewsProps) => {
  return axios.post(`${SERVER_URL}/api/uploadNews`, {
    title: title,
    outline: outline,
    category: category,
    thumbnail: thumbnail,
    content: content,
  });
};
