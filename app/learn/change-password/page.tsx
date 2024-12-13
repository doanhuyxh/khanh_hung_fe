'use client'

import { Sidebar } from "@/app/components/Sidebar"
import axiosInstance from "@/app/configs/axiosConfig"
import toast from "react-hot-toast"
import { useState } from "react"
import axiosCustomerConfig from "@/app/configs/axiosCustomerConfig"

export default function ChangePassword() {

    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")

    const handleChangePassword = () => {
        axiosCustomerConfig.post("/Customer/change-password", {
            oldPassword,
            newPassword
        })
            .then((res) => {
                const code = res.code;
                if (code === 200) {
                    toast.success("Cập nhật mật khẩu thành công", {
                        duration: 3000,
                        position: "top-right",
                        style: {
                            background: "green",
                            color: "white",
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                        }
                    })
                } else {
                    toast.error("Cập nhật mật khẩu thất bại", {
                        duration: 3000,
                        position: "top-right",
                        style: {
                            background: "red",
                            color: "white",
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                        }
                    })
                }
            })
            .catch((err) => {
                toast.error("Cập nhật mật khẩu thất bại", {
                    duration: 3000,
                    position: "top-right",
                    style: {
                        background: "red",
                        color: "white",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                    }
                })
            })
    }

    return (
        <div className="flex">
            <Sidebar />
            <div className="container">
                <div className="w-full flex justify-center items-center mt-20">
                    <h1 className="text-5xl font-bold transform scale-150  text-color-secondary">Bổ sung mật khẩu</h1>
                </div>

                <div className="w-10/12 m-auto p-30 shadow-2xl rounded-xl mt-10">
                    <div className="w-full flex gap-50 p-8">
                        <div className="text-center mb-8">
                            <h2 className="text-nowrap font-bold text-3xl text-gray-800">Bổ sung mật khẩu</h2>
                        </div>

                        <div className="mx-auto w-full h-full space-y-6 ">
                            <div className="w-full">
                                <input
                                    type="password"
                                    className="w-full p-5 border border-gray-300 rounded-lg text-3xl transition-all outline-none"
                                    placeholder="Mật khẩu cũ"
                                    value={oldPassword}
                                    onChange={(e) => setOldPassword(e.target.value)}
                                />
                            </div>

                            <div className="w-full">
                                <input
                                    type="password"
                                    className="w-full p-5 border border-gray-300 rounded-lg text-3xl transition-all outline-none"
                                    placeholder="Mật khẩu mới"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-end items-center px-8">
                        <button className="bg-color-primary text-white py-4 px-4 rounded-lg text-3xl transition-colors" onClick={handleChangePassword}>
                            Cập nhật mật khẩu
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}