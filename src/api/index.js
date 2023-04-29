import axios from "axios";
 
const $host = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL
})

export {
    $host
};