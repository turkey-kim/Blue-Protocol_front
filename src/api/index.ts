import axios from "axios";
import { serverUrl } from "../constant";

interface Props {
  id: string;
  pw: string;
}
export const submitLogin = async ({ id, pw }: Props) => {
  return axios.post(`${serverUrl}/admin/login`, {
    id: id,
    pw: pw,
  });
};
