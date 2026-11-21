
import axios from "axios";

const API = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
    headers: {
        "Content-Type": "application/json",
    },
});

export const registerUser = (userData) => {
    return API.post("register/", userData);
};

export const loginUser = (userData) => {
    return API.post("login/", userData);
};
