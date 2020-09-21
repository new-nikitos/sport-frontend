import axios from 'axios';
import { store } from '../store';

// const url = "http://localhost:8080";
const url = "http://192.168.0.106:8080";

class ApiService {
    error() {
        store.dispatch({ type: true });
    }

    registration(data) {
        return axios.post(`${url}/register`, data).catch(this.error);
    }

    auth(data) {
        return axios.post(`${url}/auth`, data).catch(this.error);
    }

    preference(data) {
        return axios.post(`${url}/account/preferences`, data).catch(this.error);
    }

    getAllCategories() {
        return axios.get(`${url}/category/fetchAll`).catch(this.error);
    }

    getComplex() {
        return axios.get(`${url}/complex/fetchAll`).catch(this.error);
    }

    createEvent1(data) {
        // return axios.post(`${url}/`, data).catch(this.error);
    }

    createEvent2(data) {
        // return axios.post(`${url}/`, data).catch(this.error);
    }

    createEvent3(data) {
        // return axios.post(`${url}/`, data).catch(this.error);
    }
}

export default new ApiService();