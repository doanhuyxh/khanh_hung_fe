'use client'

import Pagination from "@/app/components/Pagination";
import Sidebar from "@/app/components/Sidebar/Customer";
import axiosCustomerConfig from "@/app/configs/axiosCustomerConfig";
import ModalViewHtml from "@/app/components/Modal/ModalViewHtml";
import { unixToDatetime } from "@/app/utils";
import { NotificationItem } from "@/app/types";
import { useState, useEffect } from "react";

export default function Notification() {


    const [status, setStatus] = useState("");
    const [page, setPage] = useState(1);
    const [data, setData] = useState<NotificationItem[]>([]);
    const [totalPage, setTotalPage] = useState(0);
    const [totalResult, setTotalResult] = useState(0);

    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handlePageChange = (page: number) => {
        setPage(page);
    }

    const handleStatusChange = (status: string) => {
        setStatus(status);
    }

    const GetNotification = async () => {
        const res_data = await axiosCustomerConfig.get(`/notification/get-notify?page=${page}&status=${status}`);
        setData(res_data.data.data);
        setTotalPage(res_data.data.totalPage);
        setTotalResult(res_data.data.totalResult);
    }

    const handleViewDetail = (item: NotificationItem) => {
        setTitle(item.title);
        setContent(item.content);
        setIsOpen(true);
    }

    useEffect(() => {
        GetNotification();
    }, [page, status]);

    return <div className="lg:flex  w-full">
        <div className="hidden lg:block">
            <Sidebar />
        </div>
        <div className="lg:container mt-20 ">
            <div className="w-full flex justify-center items-center mb-10">
                <h1 className="text-3xl lg:text-6xl font-bold transform scale-150 text-color-secondary" >Thông báo của bạn</h1>
            </div>

            <div className="w-11/12 lg:w-full shadow-[0_0_20px_rgba(0,0,0,0.2)] shadow-gray-500/50 m-auto p-6 lg:p-12 lg:m-12 rounded-lg">
                <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-10 lg:gap-0 py-8 mb-10">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-bold opacity-80">Lịch sử các thông báo của bạn</h2>
                    </div>
                    <div className="flex gap-4">
                        <button className={`text-gray-600 px-5 py-3 rounded-md lg:text-3xl border border-gray-600 border-opacity-40 hover:bg-color-primary hover:text-white transition-all duration-300 ${status === "all" ? "bg-color-primary text-white" : ""}`} onClick={() => handleStatusChange("")}>Tất cả</button>
                        <button className={`text-gray-600 px-5 py-3 rounded-md lg:text-3xl border border-gray-600 border-opacity-40 hover:bg-color-primary hover:text-white transition-all duration-300 ${status === "read" ? "bg-color-primary text-white" : ""}`} onClick={() => handleStatusChange("read")}>Đã xem</button>
                        <button className={`text-gray-600 px-5 py-3 rounded-md lg:text-3xl border border-gray-600 border-opacity-40 hover:bg-color-primary hover:text-white transition-all duration-300 ${status === "unread" ? "bg-color-primary text-white" : ""}`} onClick={() => handleStatusChange("un_read")}>Chưa xem</button>
                    </div>
                </div>
                <div className="lg:block hidden w-full overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300 rounded-xl">
                        <thead>
                            <tr className="bg-gray-100 text-black text-xl leading-normal text-nowrap">
                                <th className="py-3 px-6 text-left">STT</th>
                                <th className="py-3 px-6 text-left min-w-[40%]">Tiêu đề</th>
                                <th className="py-3 px-6 text-left">Nội dung</th>
                                <th className="py-3 px-6 text-left">Thời gian gửi</th>
                                <th className="py-3 px-6 text-left">Thời gian xem</th>
                                <th className="py-3 px-6 text-left">Trạng thái</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-xl">
                            {data.map((item: NotificationItem, index: number) => (
                                <tr className="border-b border-gray-200 hover:bg-gray-50" key={index}>
                                    <td className="py-4 px-6">{index + 1}</td>

                                    {/* Cột item.title chiếm ít nhất 50% bảng */}
                                    <td className="py-4 px-6 font-semibold text-2xl min-w-[40%]">{item.title}</td>

                                    <td className="py-4 px-6">
                                        <span
                                            onClick={() => handleViewDetail(item)}
                                            className={`cursor-pointer text-decoration-line: underline ${item.status === "read" ? "text-gray-600" : "text-blue-600"}`}
                                        >
                                            Xem chi tiết
                                        </span>
                                    </td>

                                    <td className="py-4 px-6">{unixToDatetime(item.sendAt)}</td>

                                    <td className="py-4 px-6">{item.readAt ? unixToDatetime(item.readAt) : "-"}</td>

                                    <td className="py-4 px-6">
                                        {item.status === "read" ? (
                                            <span className="bg-green-600 text-white py-2 px-4 rounded-md">Đã xem</span>
                                        ) : (
                                            <span className="bg-red-600 text-white py-2 px-4 rounded-md">Chưa xem</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
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
                <Pagination length={data.length} pageSize={30} totalResult={totalResult} page={page} totalPage={totalPage} onPageChange={setPage} />
            </div>

        </div>
        <ModalViewHtml isOpen={isOpen} onClose={() => setIsOpen(false)}  title={title} content={content}/>
    </div>
}