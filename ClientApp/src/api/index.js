import axios from "axios";
const apiBaseURL = "https://localhost:5001";

/* public queries */
export const GET = async (url) => {
  return await axios.get(`${apiBaseURL}/${url}`);
};