import axios from 'axios';

const http = axios.create({
    baseURL:'http://api.github.com/'
})

export default http;