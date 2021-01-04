import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/e-commerce-project-e3a9c/us-central1/api',
});

export default instance;
