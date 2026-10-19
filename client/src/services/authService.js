import axios from "axios";

export const API = axios.create({
    baseURL: "http://localhost:5001/api",
    withCredentials: true,
});


export const loginUser = async (email, password) => {

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

export const logoutUser = async () => {
  const response = await API.post("/auth/logout");
  return response.data;
};