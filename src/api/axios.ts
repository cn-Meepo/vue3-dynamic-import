import axios from 'axios';

let instance = axios.create({
    baseURL: '/api/'
});
export default instance;
