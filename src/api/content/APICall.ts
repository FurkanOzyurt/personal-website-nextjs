import axios from "axios";
import { GET, ROOT_URL } from "../constants";

export const getAllHomeContent = async () => {
  try {
    const response: any = await axios({
      method: GET,
      url: ROOT_URL + "homeData"
    });
    return response;
  } catch (error: any) {
    console.log(error);
    throw error.data;
  }
};
