import axios from 'axios';
import {SERVER_URL} from '../constant';

interface Props {
  title?: string | undefined;
  outline?: string | undefined;
  category?: string | undefined;
  thumbnail?: string | undefined;
  content?: string | undefined;
  id?: string | undefined;
}

export const uploadImage = async (formData: FormData) => {
  return axios.post(`${SERVER_URL}/api/uploadImage`, formData);
};

export const uploadNews = async ({title, outline, category, thumbnail, content}: Props) => {
  return axios.post(`${SERVER_URL}/api/uploadNews`, {
    title: title,
    outline: outline,
    category: category,
    thumbnail: thumbnail,
    content: content,
  });
};

export const updateNews = async ({title, outline, category, thumbnail, content, id}: Props) => {
  return axios.post(`${SERVER_URL}/api/updateNews`, {
    title: title,
    outline: outline,
    category: category,
    thumbnail: thumbnail,
    content: content,
    id: id,
  });
};

export const deleteNews = async ({id}: Props) => {
  return axios.post(`${SERVER_URL}/api/deleteNews`, {
    id: id,
  });
};

export const getNews = async () => {
  const response = await axios.get(`${SERVER_URL}/api/getNews`);
  return response.data;
};

export const getLatestNews = async () => {
  const response = await axios.get(`${SERVER_URL}/api/getLatestNews`);
  return response.data;
};

export const postLastNewsIndex = async (index: number) => {
  const response = await axios.post(`${SERVER_URL}/api/postLastNewsIndex`, {
    index: index,
  });
  return response.data;
};

export const uploadGuide = async ({category, title, content}: Props) => {
  return axios.post(`${SERVER_URL}/api/uploadGuide`, {
    category: category,
    title: title,
    content: content,
  });
};

export const getGuideData = async () => {
  const response = await axios.get(`${SERVER_URL}/api/getGuideData`);
  return response.data;
};

export const deleteGuideData = async ({title}: Props) => {
  await axios.post(`${SERVER_URL}/api/deleteGuideData`, {
    title: title,
  });
};

export const updateGuideData = async ({category, title, content}: Props) => {
  await axios.post(`${SERVER_URL}/api/updateGuideData`, {
    category: category,
    title: title,
    content: content,
  });
};
