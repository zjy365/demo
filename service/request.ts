import axios, { AxiosRequestConfig } from "axios";

const request = axios.create({
  baseURL: "/",
  withCredentials: true,
  timeout: 20 * 1000,
});

// Request interceptor
request.interceptors.request.use(
  (config) => {
    // Modify the request config here (add headers, authentication tokens)
    // const accessToken = JSON.parse(localStorage.getItem("token"));

    // If token is present add it to request's Authorization Header
    // if (accessToken) {
    //   if (config.headers) config.headers.token = accessToken;
    // }
    return config;
  },
  (error) => {
    // Handle request errors here

    return Promise.reject(error);
  },
);
// End of Request interceptor

// Response interceptor
request.interceptors.response.use(
  (response) => {
    // Modify the response data here
    return response;
  },
  (error) => {
    // Handle response errors here
    return Promise.reject(error);
  },
);

export function GET<T = any>(
  url: string,
  data?: { [key: string]: any },
  config?: AxiosRequestConfig,
): Promise<T> {
  return request.get(url, {
    params: data,
    ...config,
  });
}

export function POST<T = any>(
  url: string,
  data?: { [key: string]: any },
  config?: AxiosRequestConfig,
): Promise<T> {
  return request.post(url, data, config);
}

export function DELETE<T = any>(
  url: string,
  data?: { [key: string]: any },
  config?: AxiosRequestConfig,
): Promise<T> {
  return request.get(url, {
    params: data,
    ...config,
  });
}
