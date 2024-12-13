import axios from "axios";
import axiosCustomerConfig from "../configs/axiosCustomerConfig";



const baseUrl = "http://localhost:5035/api/v1"

const axiosCustomer = axios.create({
    baseURL: baseUrl,
    withCredentials: true
});

// Add response interceptor
axiosCustomer.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401) {
            await axiosCustomer.post('/Auth/RefreshToken')
            return axiosCustomerConfig
        }
        if (error.response?.status === 403){
            return Promise.resolve(error.response)
        }
        return Promise.reject(error);
    }
);



const login = async (email: string, password: string) => {
    const res = await axiosCustomer.post(`/Auth/Login`, {
        email,
        password
    }, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    console.log(res);
    return res.data;
}


const postJsonData = async (url: string, data: any) => {
    const res = await axiosCustomer.post(url, data, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    });
    return res.data;
}

// api với user
const GetInfo = async () => {
    const res = await axiosCustomer.get(`/Customer/GetInfo`);
    return res.data;
}

const GetLessonById = async (id: number) => {
    
}


export { login, GetLessonById, GetInfo };

