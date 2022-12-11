import axios from "axios";
import { GET, ROOT_URL } from "../constants";

export const getAllHomeContent = async () => {
  try {
    const response: any = await axios({
      method: GET,
      url: ROOT_URL + "homeData"
    });

    return response.data;
  } catch (error: any) {
    throw error.data;
  }
};
export const getBlogs = async (data: { page: number, category?: string }) => {
  try {
    const response: any = await axios({
      method: GET,
      url: ROOT_URL + "blog/",
      params: {
        ...data,
        page: data.page - 1
      }
    });
    return response.data;
  } catch (error: any) {
    throw error.data;
  }
};
export const getBlogDetail = async (url: string) => {
  try {
    const response: any = await axios({
      method: GET,
      url: ROOT_URL + "blog/" + url
    });

    return response.data;
  } catch (error: any) {
    throw error.data;
  }
};
export const getBlogCategories = async () => {
  try {
    const response: any = await axios({
      method: GET,
      url: ROOT_URL + "blogCategories/",
    });
    return response.data;
  } catch (error: any) {
    throw error.data;
  }
};
export const getBlogCategory = async (data: { url: string }) => {
  try {
    const response: any = await axios({
      method: GET,
      url: ROOT_URL + "blogCategory/",
      params: data
    });

    return response.data;
  } catch (error: any) {
    throw error.data;
  }
};