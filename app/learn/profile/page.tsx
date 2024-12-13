'use client';

import ImageUploadUser from "@/app/components/FileHandle/Image/imagesUser"

import Sidebar from "@/app/components/Sidebar/Customer"
import { useState } from "react";


function ProfilePage() {

    const [avatar, setAvatar] = useState('')

    return (
        <div className="flex">
            <div className="hidden lg:block">
                <Sidebar />
            </div>
            <div className="container mt-20">
                <div className="w-full flex justify-center items-center">
                    <h1 className="text-5xl font-bold transform scale-150  text-color-secondary">Thông tin cá nhân</h1>
                </div>

                <div className="w-full flex justify-center items-center">
                    <div className="w-full flex flex-wrap gap-10 shadow-lg p-12 m-12 rounded-lg">
                        <ImageUploadUser initialLink={avatar} onChange={setAvatar} />
                        <div className="flex flex-col gap-4 flex-1">
                            <div className="flex gap-4 mb-5">
                                <div className="w-1/2">
                                    <input
                                        placeholder="Họ"
                                        className="w-full px-5 py-5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-3xl transition-all"
                                    />
                                </div>
                                <div className="w-1/2">
                                    <input
                                        placeholder="Tên"
                                        className="w-full px-5 py-5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-3xl transition-all"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-rows-3 grid-cols-2 w-full gap-5">
            
                                <div className="flex flex-col gap-2">
                                    <label className="text-xl font-semibold text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Nhập email của bạn"
                                        className="w-full p-5 tex border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-base"
                                    />
                                </div>

                                {/* Hàng 1 - Cột 2 */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-xl font-semibold text-gray-700">Họ và Tên</label>
                                    <input
                                        type="text"
                                        placeholder="Nhập họ và tên của bạn"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-base"
                                    />
                                </div>

                                {/* Hàng 2 - Cột 1 */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-xl font-semibold text-gray-700">Số điện thoại</label>
                                    <input
                                        type="tel"
                                        placeholder="Nhập số điện thoại của bạn"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-base"
                                    />
                                </div>

                                {/* Hàng 2 - Cột 2 */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-xl font-semibold text-gray-700">Địa chỉ</label>
                                    <input
                                        type="text"
                                        placeholder="Nhập địa chỉ của bạn"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-base"
                                    />
                                </div>

                                {/* Hàng 3 - Mô tả */}
                                <div className="flex flex-col gap-4 col-span-2">
                                    <label className="text-xl font-semibold text-gray-700">Mô tả hoặc giới thiệu về lĩnh vực của bạn</label>
                                    <textarea
                                        placeholder="Nhập mô tả của bạn"
                                        rows={10}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-base resize-none"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage