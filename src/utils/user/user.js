import axios from "axios";
import { SERVER_URL } from "../utils";

export const clientLogin = async (username, password) => {
  const response = await axios.post(`${SERVER_URL}/users/login`, {
    username,
    password,
  });
  return response.data;
};

export const clientLogout = async () => {
  const response = await axios.get(`${SERVER_URL}/users/logout`);
  return response.data;
};

export const registerClient = async (newUser) => {
  const response = await axios.post(`${SERVER_URL}/users/register`, {
    username: newUser.username,
    email: newUser.email,
    password: newUser.password,
  });

  return response.data;
};

export const getUserInfoById = async (id) => {
  const response = await axios.get(`${SERVER_URL}/users/${id}`);
  return response.data;
};
