import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

const fetch = async (options) => {
  const client = axiosInstance({ ...options });

  await client;
  return client;
};

export default fetch;
