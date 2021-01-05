import axios from 'axios';

const instance = axios.create({
    baseURL:
        'https://us-central1-e-commerce-project-e3a9c.cloudfunctions.net/api',
    // baseURL: 'http://localhost:5001/e-commerce-project-e3a9c/us-central1/api',
});

export default instance;
