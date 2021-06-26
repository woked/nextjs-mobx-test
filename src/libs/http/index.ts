import axios, {AxiosInstance} from 'axios';

export type HttpType = AxiosInstance;

export const http: HttpType = axios.create();
