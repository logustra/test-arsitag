import axios from "axios";

const config = axios.create({
    baseURL: '//iotator.com/api/v1/',
});

export default config;
