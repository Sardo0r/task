import axios from "axios";
import { loadState } from "../utils/storage";

const request = {
    public: axios.create({
        baseURL: 'https://profitmodel-server.herokuapp.com/api/'
    }),
    private: axios.create({
        baseURL: 'https://profitmodel-server.herokuapp.com/api/',
        headers: {
            Authorization: `Bearer ${loadState('user')?.token}`
        }
    })
}

export default request