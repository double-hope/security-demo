import { HttpMethodEnum, HttpHeaderEnum } from 'common';

export let statusCode;

class Http {
    load(url, options){ 
        const { method = HttpMethodEnum.GET, payload = null, contentType } = options;
        const headers = this._getHeaders({
            contentType,
        });

        return fetch(url, {
            method,
            headers,
            body: payload,
        })
            .then(this._checkStatus)
            .then(this._parseJSON)
            .catch(this._throwError);
    }

    _getHeaders({ contentType }) {
        const headers = new Headers();
        
        if (contentType) {
            headers.append(HttpHeaderEnum.CONTENT_TYPE, contentType);
        }

        if(sessionStorage.getItem('accessToken')) {
            headers.append(HttpHeaderEnum.AUTHORIZATION, `Bearer ${sessionStorage.getItem('accessToken')}`);
        }

        return headers;
    }

    _checkStatus(response) {
        const { ok: isOk, status, statusText } = response;

        statusCode = status;

        if( status === 401){
            console.log('log-out');
        }

        if (!isOk) {
            throw new Error(`${status}: ${statusText}`);
        }

        return response;
    }

    _parseJSON(response) {
        return response.json();
    }

    _throwError(err) {
        throw err;
    }
}

export { Http };