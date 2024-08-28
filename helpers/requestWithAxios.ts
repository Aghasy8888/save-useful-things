import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { getJWT } from './auth';
import {
  VIDEOS,
} from '@/data/stepConstants';
import { redirect } from 'next/navigation';
import axios, { AxiosRequestConfig, Method } from 'axios';

const defaultError = { message: 'Something went wrong!' };

async function request(
  navigate: AppRouterInstance,
  url: string,
  method: Method = 'GET',
  body?: { file_type?: string } | {}
) {  
  const jwt = await getJWT(navigate);
  const splittedUrl = url.split('/');
  const splittedUrlLength = splittedUrl.length;
  const isVideoRequest = splittedUrl[splittedUrlLength - 2] === VIDEOS;

  if (!jwt) {
    return Promise.reject(defaultError);
  }

  const config: AxiosRequestConfig = {
    url,
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
  };

  if (body) {
    config.data = body;
  }

  const downloadStr = url.split('companies')[1]?.split('/')[3];
  const isReportDownloadRequest = downloadStr === 'download';

  // console.log('body', body);
  // console.log('url in fetch', url);

  try {
    const response = await axios(config);

    if (!response.ok) {
      if (response.status === 503) {
        console.error('Service is unavailable. Please try again later.');
      }

      redirect('/siteIsInTechSupport');        
    }

    if (isReportDownloadRequest) {
      return response.blob();
    }

    if (response.data.detail) {
      throw new Error(response.data.detail);
    }

    if (isVideoRequest) {
      return {
        videos: response.data,
        jwt,
      };
    }

    return response.data;

  } catch (error) {
    throw error;
  }
}

export default request;
