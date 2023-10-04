import axios from 'axios';
import {SERVER_URL} from '../constant';

interface LoginProps {
  id: string;
  pw: string;
}

export const submitLogin = async ({id, pw}: LoginProps) => {
  return axios.post(`${SERVER_URL}/auth/login`, {
    id: id,
    pw: pw,
  });
};

export const checkToken = async () => {
  const token = localStorage.getItem('jwt');
  const result = await axios.post(
    `${SERVER_URL}/auth/checkToken`,
    {
      token: token,
    },
    {withCredentials: true},
  );

  if (result.data === true) {
    return true;
  } else {
    return false;
  }
};
