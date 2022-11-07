import axios from "axios";
import { apiURL } from "../data/url";

const api = axios.create({
    baseURL: apiURL,
    withCredentials: true
});

export default api;