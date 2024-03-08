import axios from "axios";
import { VITE_API_URL } from "../config/config";

export const login = async (credentials) => {
  const response = await axios.post(`${VITE_API_URL}/user/login`, credentials);
  return response.data;
};

export const getLessons = async (id) => {
  const response = await axios.get(`${VITE_API_URL}/lesson/${id}`);
  return response.data;
};

export const createComment = async (comment) => {
  const response = await axios.post(`${VITE_API_URL}/comment/create`, comment);
  return response.data;
};

export const getComments = async (id) => {
  const response = await axios.get(`${VITE_API_URL}/comment/${id}`);
  return response.data;
};

export const certificateCourse = async (data) => {
  const response = await axios.post(`${VITE_API_URL}/user/certificate/`, data);
  return response.data;
};
