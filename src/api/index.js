import axios from "axios";

const BASE_API = `http://localhost:3000`


export const getAllProducts = () => {
    return axios.get(BASE_API + '/data')
}


export const postProductToBasket = (product) => {
    return axios.post(BASE_API + '/basket', {product})
}


export const getBasketProducts = () => {
    return axios.get(BASE_API + '/basket')
}


export const deleteBasketProduct = (id) => {
    return axios.delete(BASE_API + `/basket/${id}`)
}