import axios from "axios";
const apiBaseURL = "https://localhost:5001";

/* public queries */
export const GET = async (url) => {
  return await axios.get(`${apiBaseURL}/${url}`);
};

export const POST = async (url, payload) => {
  return await axios.post(`${apiBaseURL}/${url}`, payload);
};

const config = {
  headers: { Authorization: "Bearer " + localStorage.getItem("access_token") },
};
export const GET_AUTH = async (url) => {
  return await axios.get(`${apiBaseURL}/${url}`, config);
};

export const POST_AUTH = async (url, payload) => {
  return await axios.post(`${apiBaseURL}/${url}`, payload, config);
};
