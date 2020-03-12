import Axios from 'axios';

export const http = {
    get: async function (url) {
        return await Axios.get('http://localhost:5000/api' +url)
    },

    post: async function (url, data) {
        return await Axios.post('http://localhost:5000/api' +url, data);
    }
};
