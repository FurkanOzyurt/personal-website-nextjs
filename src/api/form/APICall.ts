import axios from "axios";
import { POST, ROOT_URL } from "../constants";

export const submitContactForm = async (data: any) => {
  try {
    const response: any = await axios({
      method: POST,
      url: ROOT_URL + "contact",
      data
    });

    return response.data;
  } catch (error: any) {
    throw error.data;
  }
};