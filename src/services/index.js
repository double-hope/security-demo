import { Http } from './http';
import { Auth } from './auth';

const http = new Http();
const baseURL = 'http://localhost:8080';

const auth = new Auth({
    baseURL,
    http,
});

export { http, auth };