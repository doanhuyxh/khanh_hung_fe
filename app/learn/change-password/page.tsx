'use client'

import { Sidebar } from "@/app/components/Sidebar"

export default function ChangePassword() {
    return (
        <div className="flex">
              <Sidebar />
            <div className="container">
                <div className="w-full flex justify-center items-center mt-20">
                    <h1 className="text-5xl font-bold transform scale-150  text-color-secondary">Bổ sung mật khẩu</h1>
                </div>

                <div className="w-10/12 m-auto p-30 shadow-2xl rounded-xl mt-10">
                    <div className="w-full flex gap-20 p-8">
                        <div className="text-center mb-8">
                            <h2 className="text-nowrap font-bold text-3xl text-gray-800">Bổ sung mật khẩu</h2>
                        </div>

                        <div className="mx-auto w-full h-full space-y-6 ">
                            <div className="w-full">
                                <input
                                    type="password"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-3xl transition-all"
                                    placeholder="Mật khẩu cũ"
                                />
                            </div>

                            <div className="w-full">
                                <input
                                    type="password"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-3xl transition-all"
                                    placeholder="Mật khẩu mới"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-end items-center px-8">
                        <button className="bg-color-primary text-white py-4 px-4 rounded-lg text-3xl transition-colors">
                            Cập nhật mật khẩu
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}