import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5001/api",
    withCredentials: true,
});


export const loginUser = async (email, password) => {

    console.log("LOGIN EMAIL:", email);
    console.log("LOGIN PASSWORD:", password);

    const response = await API.post("auth/login", {
        email,
        password,
    });

    return response.data;
};

export const loginAdmin = async (email, password) => {
    const response = await API.post("auth/admin/login", {
        email,
        password,
    });

    return response.data;
};