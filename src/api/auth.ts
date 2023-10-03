import axios from 'axios';
import {SERVER_URL} from '../constant';

export const checkToken = async () => {
  const token = localStorage.getItem('jwt');
  const result = await axios.post(
    `${SERVER_URL}/api/checkToken`,
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
