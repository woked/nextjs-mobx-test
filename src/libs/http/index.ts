import axios, {AxiosInstance} from 'axios';
import {HOST} from 'constants/index';

export type HttpType = AxiosInstance;

export const http: HttpType = axios.create({
  baseURL: process.browser ? '' : HOST,
});
