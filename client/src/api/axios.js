import axios from 'axios';

const getBaseUrl = () => {
    let url = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
    if (url.endsWith('/')) url = url.slice(0, -1);
    if (!url.endsWith('/api')) url += '/api';
    return url;
};

const api = axios.create({
    baseURL: getBaseUrl(),
});

console.log("FINAL AXIOS BASE URL:", getBaseUrl());

export default api;
