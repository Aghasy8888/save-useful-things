import axios, { AxiosRequestConfig, Method } from 'axios';

async function minRequest(
  url: string,
  method: Method = 'GET',
  body?: {}
) {
  const config: AxiosRequestConfig = {
    url,
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (body) {
    config.data = body; // In Axios, use 'data' for the request body
  }

  try {
    const response = await axios(config);
    console.log('response 4444444', response);

    if (response.data.detail) {
      throw new Error(response.data.detail);
    }

    return response.data;
  } catch (error) {
    throw error;
  }
}

export default minRequest;
