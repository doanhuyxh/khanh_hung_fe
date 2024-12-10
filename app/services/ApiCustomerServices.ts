import axios from "axios";
import { NextRequest } from "next/server";


const baseUrl = "https://localhost:44387/api/v1"

const axiosCustomer = axios.create({
    baseURL: baseUrl,
    withCredentials: true
});

// // Add response interceptor
// axiosCustomer.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//         if (error.response?.status === 401) {
//             // Thử refresh token trước khi logout
//             const refreshToken = localStorage.getItem('refreshToken');
//             if (refreshToken) {
//                 try {
//                     const response = await axiosCustomer.post('/Auth/RefreshToken', {
//                         refreshToken: refreshToken
//                     });
//                     if (response.data.code === 200) {
//                         localStorage.setItem('token', response.data.accessToken);
//                         return;
//                     }
//                 } catch (err) {
//                     // Nếu refresh token thất bại, xóa token và chuyển về trang login
//                     localStorage.clear();
//                     window.location.href = '/learn/login';
//                 }
//             } else {
//                 // Nếu không có refresh token, xóa token và chuyển về trang login
//                 localStorage.clear();
//                 window.location.href = '/learn/login';
//             }
//         }
//         return Promise.reject(error);
//     }
// );


axiosCustomer.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
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

