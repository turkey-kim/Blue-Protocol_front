import axios from 'axios';
import {SERVER_URL} from '../constant';

interface LoginProps {
  id: string;
  pw: string;
}
export const submitLogin = async ({id, pw}: LoginProps) => {
  return axios.post(`${SERVER_URL}/admin/login`, {
    id: id,
    pw: pw,
  });
};

export const uploadImage = async (formData: FormData) => {
  return axios.post(`${SERVER_URL}/api/uploadImage`, formData).catch(err => {
    console.error(err);
  });
};
