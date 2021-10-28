import axios from "axios";

const BASE_API = `http://localhost:3000/data`


export const getAllProducts = () => {
    return axios.get(BASE_API)
}