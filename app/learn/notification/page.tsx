'use client'

import Pagination from "@/app/components/Pagination";
import Sidebar from "@/app/components/Sidebar/Customer";
import axiosCustomerConfig from "@/app/configs/axiosCustomerConfig";
import { useState, useEffect } from "react";

export default function Notification() {


    const [status, setStatus] = useState("all");

    const [page, setPage] = useState(1);

    const handlePageChange = (page: number) => {
        setPage(page);
    }

    const handleStatusChange = (status: string) => {
        setStatus(status);
    }

    const GetNotification = async () => {
        const res_data = await axiosCustomerConfig.get(`/notification/get-notify?page=${page}&status=${status}`);
        console.log(res_data);

    }

    useEffect(() => {
        GetNotification();
    }, [page, status]);

    return <div className="lg:flex w-full">
        <div className="hidden lg:block">
            <Sidebar />
        </div>
        <div className="lg:container mt-20">
            <div className="w-full flex justify-center items-center mb-10">
                <h1 className="text-3xl lg:text-5xl font-bold transform scale-150  text-color-secondary">Thông báo</h1>
            </div>

            <div className="w-11/12 lg:w-full shadow-[0_0_20px_rgba(0,0,0,0.2)] shadow-gray-500/50 m-auto p-6 lg:p-12 lg:m-12 rounded-lg">
                <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-10 lg:gap-0 py-8 mb-10">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-bold opacity-80">Lịch sử các thông báo của bạn</h2>
                    </div>
                    <div className="flex gap-4">
                        <button className={`text-gray-600 px-5 py-3 rounded-md lg:text-3xl border border-gray-600 border-opacity-40 hover:bg-color-primary hover:text-white transition-all duration-300 ${status === "all" ? "bg-color-primary text-white" : ""}`} onClick={() => handleStatusChange("all")}>Tất cả</button>
                        <button className={`text-gray-600 px-5 py-3 rounded-md lg:text-3xl border border-gray-600 border-opacity-40 hover:bg-color-primary hover:text-white transition-all duration-300 ${status === "read" ? "bg-color-primary text-white" : ""}`} onClick={() => handleStatusChange("read")}>Đã xem</button>
                        <button className={`text-gray-600 px-5 py-3 rounded-md lg:text-3xl border border-gray-600 border-opacity-40 hover:bg-color-primary hover:text-white transition-all duration-300 ${status === "unread" ? "bg-color-primary text-white" : ""}`} onClick={() => handleStatusChange("unread")}>Chưa xem</button>
                    </div>
                </div>
                <div className="lg:block hidden w-full overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr className="bg-gray-100 text-black text-xl leading-normal">
                                <th className="py-3 px-6 text-left">STT</th>
                                <th className="py-3 px-6 text-left w-1/3">Tiêu đề</th>
                                <th className="py-3 px-6 text-left">Nội dung</th>
                                <th className="py-3 px-6 text-left">Thời gian gửi</th>
                                <th className="py-3 px-6 text-left">Thời gian xem</th>
                                <th className="py-3 px-6 text-left">Trạng thái</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-xl">
                            <tr className="border-b border-gray-200 hover:bg-gray-50">
                                <td className="py-4 px-6">1</td>
                                <td className="py-4 px-6">Thông báo mới</td>
                                <td className="py-4 px-6">Nội dung thông báo...</td>
                                <td className="py-4 px-6">20/03/2024 10:30</td>
                                <td className="py-4 px-6">20/03/2024 11:45</td>
                                <td className="py-4 px-6">
                                    <span className="bg-green-600 text-white py-2 px-4 rounded-md">Đã xem</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="lg:hidden w-full max-h-[60vh] overflow-y-auto">
                    <div className="bg-white p-4 border border-gray-300 rounded-md">
                        <div className="flex justify-between">
                            <span className="font-semibold text-gray-400">STT :</span>
                            <span className="text-gray-400">1</span>
                        </div>
                        <div className="flex justify-between mt-2">
                            <span className="font-semibold text-gray-400">Tiêu đề:</span>
                            <span className="text-gray-700">Thông báo mới</span>
                        </div>
                        <div className="flex justify-between mt-2">
                            <span className="font-semibold text-gray-400">Nội dung:</span>
                            <span className="text-gray-600">Nội dung thông báo...</span>
                        </div>
                        <div className="flex justify-between mt-2">
                            <span className="font-semibold text-gray-400">Thời gian gửi:</span>
                            <span className="text-gray-600">20/03/2024 10:30</span>
                        </div>
                        <div className="flex justify-between mt-2">
                            <span className="font-semibold text-gray-400">Thời gian xem:</span>
                            <span className="text-gray-600">20/03/2024 11:45</span>
                        </div>
                        <div className="flex justify-between mt-2">
                            <span className="font-semibold text-gray-400">Trạng thái:</span>
                            <span className="text-white bg-green-600 py-1 px-3 rounded-md">Đã xem</span>
                        </div>
                    </div>
                </div>
                <Pagination length={100} pageSize={10} totalResult={100} page={1} totalPage={10} onPageChange={() => { }} />
            </div>

        </div>
    </div>
}