import axios, { AxiosError, AxiosResponse } from 'axios';

const successResponse = ({ data }: AxiosResponse) => data;

const errorResponse = ({ response }: AxiosError) => {
  throw response;
};

const api = axios.create({
  baseURL: process.env.REACT_APP_OMDB_API,
  params: { apikey: process.env.REACT_APP_OMDB_API_KEY },
});

api.interceptors.request.use(config => config);

api.interceptors.response.use(successResponse, errorResponse);

export default api;
