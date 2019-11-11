import axios from 'axios';

const apiService = {};

apiService.get = (url, override) => {
    const data = override ? undefined : sessionStorage.getItem(url);

    if (data) {
        return Promise.resolve(JSON.parse(data));
    }

    return axios.get(url)
        .then((response) => {
            sessionStorage.setItem(url, JSON.stringify(response.data));
            return response.data;
        })
        .catch(err => {
            throw err;
        })
};

apiService.post = (url, request, override) => {
    const data = override ? undefined : sessionStorage.getItem(url);

    if (data) {
        return data;
    }

    axios.post(url, request)
        .then((response) => {
            sessionStorage.setItem(url, response.data);
            return response.data;
        })
        .catch(err => {
            throw err;
        })
};

apiService.put = (url, request, override) => {
    const data = override ? undefined : sessionStorage.getItem(url);

    if (data) {
        return data;
    }

    axios.put(url, request)
        .then((response) => {
            sessionStorage.setItem(url, response.data);
            return response.data;
        })
        .catch(err => {
            throw err;
        })
};

apiService.delete = (url, override) => {
    const data = override ? undefined : sessionStorage.getItem(url);

    if (data) {
        return data;
    }

    axios.delete(url)
        .then((response) => {
            sessionStorage.setItem(url, response.data);
            return response.data;
        })
        .catch(err => {
            throw err;
        })
};

if (!window.apiService) {
    window.apiService = apiService;
}