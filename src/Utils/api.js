import axios from 'axios';
import { DOMAIN } from './Constants';

const api = axios.create({
    baseURL: DOMAIN,
    headers: {
        'Content-Type': 'application/json',
    },
});



export const getRequest = async (endpoint, params ={}) =>{
    try {
        const response = await api.get(endpoint, {params});
        return response.data;
    } catch (error) {
      console.error('Error with GET request', error);
      throw error;   
    }
}

export const postRequest = async (endpoint, data = {}) => {
    try {
        const response = await api.post(endpoint, data);
        return response.data;
    } catch (error) {
        console.error('Error with POST request', error);
        throw error;
    }
}