import { ApiPath, HttpMethodEnum } from 'common';

class OAuth {
    constructor({baseURL, http}) {
        this._baseURL = baseURL;
        this._http = http;
        this._basePath = ApiPath.OAUTH;
    }

    authorize(path, payload){
        return this._http.load(this._getUrl(path), {
            method: HttpMethodEnum.POST,
            payload: JSON.stringify(payload),
            contentType: 'application/json',
        })
    }

    _getUrl(path = '') {
        return `${this._baseURL}${this._basePath}${path}`;
    }

    _getQueryString(obj) {
        const keyValuePairs = [];
        for (const key in obj) {
          keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }
        return keyValuePairs.join('&');
    }
}

export { OAuth };