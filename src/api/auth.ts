import axios from "axios";
import { serverUrl } from "../constant";

export const checkToken = async () => {
  const token = localStorage.getItem("jwt");
  const result = await axios
    .post(
      `${serverUrl}/api/checkToken`,
      {
        token: token,
      },
      { withCredentials: true }
    )
    .then((res) => {
      console.log(res);
    });
};
