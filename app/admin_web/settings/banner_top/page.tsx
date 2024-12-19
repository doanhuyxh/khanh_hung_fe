'use client'

import { useState, useEffect } from "react";
import { BannerTop } from "../../../libs/types"
import axiosInstance from "@/app/libs/configs/axiosConfig";

export default function BannerTop() {

    const [banners, setBanners] = useState<BannerTop[]>([
        { id: "", content: "Banner 1", status: "Active" },
        { id: "", content: "Banner 2", status: "Inactive" },
        { id: "", content: "Banner 3", status: "Active" },
    ]);

    const handleUpdate = (id: string) => {
        alert(`Cập nhật banner với ID: ${id}`);
    };

    const handleDelete = (id: string) => {

    };

    useEffect(() => {
        axiosInstance.get("/settings/get-banner-top")
            .then((res: any) => {
                setBanners(res.data)
            })
    }, [])

    return (
        <div className="w-full flex flex-col gap-10">
            <h2 className="text-center font-[600] text-3xl">Quản lý thông báo banner trên cùng</h2>

            <div className="flex flex-row justify-between">

                <div className="relative w-64 border rounded-md bg-gray-50 shadow-sm">
                    <input
                        className="outline-none w-full py-2 pl-10 pr-3 rounded-md bg-transparent text-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="Tìm kiếm..."
                    />
                </div>

                <div className=""></div>
            </div>

            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2 text-left">STT</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Nội dung</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Trạng thái</th>
                            <th className="border border-gray-300 px-4 py-2 text-center">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {banners.map((banner, index) => (
                            <tr key={index}>
                                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                                <td className="border border-gray-300 px-4 py-2">{banner.content}</td>
                                <td className="border border-gray-300 px-4 py-2">{banner.status}</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">
                                    <button
                                        onClick={() => handleUpdate(banner.id)}
                                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
                                    >
                                        Cập nhật
                                    </button>
                                    <button
                                        onClick={() => handleDelete(banner.id)}
                                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                    >
                                        Xóa
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}