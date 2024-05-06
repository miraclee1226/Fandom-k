import axios from "axios";

const defaultInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 10000,
});

const fetch = async (options) => {
  const client = defaultInstance({ ...options });
  await client;
  return client;
};

export default fetch;
