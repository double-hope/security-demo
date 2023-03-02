import { Http } from './http';
import { Auth } from './auth';
import { OAuth } from './oAuth';

const http = new Http();
const baseURL = 'http://localhost:8080';

const auth = new Auth({
    baseURL,
    http,
});

const oAuth = new OAuth({
    baseURL,
    http,
})

export { http, auth, oAuth };