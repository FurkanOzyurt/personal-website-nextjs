import axios from "axios";
import { GET, ROOT_URL } from "../constants";

export const getMyUserRequest = async () => {
  try {
    const response: any = await axios({
      method: GET,
      url: ROOT_URL + "users/1",
    });
    return response.data;
  } catch (error: any) {
    throw error.data;
  }
};
