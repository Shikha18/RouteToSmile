import axios from "axios";

const AxiosURL = axios.create({
    baseURL: 'https://dummyjson.com/'
});

export default AxiosURL;