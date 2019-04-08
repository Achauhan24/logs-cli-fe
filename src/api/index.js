import axios from 'axios';
import store from '../store'

const getAxiosInstance = () => {
    const instance = axios.create({
        baseURL: process.env.REACT_APP_BASEURL,
        headers: { 'X-Access-Token': localStorage.getItem("token") },
    })

    instance.interceptors.response.use((response) => {
        if(response.status === 401) {
            localStorage.removeItem("token")
            localStorage.removeItem("userId")
            store.dispatch({type: "LOGOUT"})
        } else {
            return response
        }
    }, error => {
        throw error
    })

    return instance;
};

export default getAxiosInstance;
