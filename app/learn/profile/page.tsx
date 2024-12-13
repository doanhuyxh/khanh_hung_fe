'use client';
import React, { useEffect } from 'react';
import ImageUploadUser from "@/app/components/FileHandle/Image/imagesUser"

import Sidebar from "@/app/components/Sidebar/Customer"
import { useState } from "react";
import { GetInfo } from '@/app/services/ApiCustomerServices';
import toast from 'react-hot-toast';
import axiosCustomerConfig from '@/app/configs/axiosCustomerConfig';


function ProfilePage() {

    const [isClient, setIsClient] = useState(false);

    const [info, setInfo] = useState({
        Id: '',
        FirstName: '',
        LastName: '',
        PhoneNumber: '',
        Gender: '',
        YearOfBirth: 0,
        City: '',
        FieldOfExpertise: '',
        YearOfExperience: 0,
        Description: "",
        BankAccountNumber: "",
        AccountBankName: "",
        AccountBankOwner: "",
        Email: "",
        Avatar: "",
    })

    const getUserInfo = async () => {   
        try {
            const res_data = await GetInfo();
            const data = res_data?.data;
            if (!data) throw new Error("Data is undefined");
            setInfo({
                Id: data.id || "",
                FirstName: data.firstName || "",
                LastName: data.lastName || "",
                PhoneNumber: data.phoneNumber || "",
                Gender: data.gender || "",
                YearOfBirth: data.yearOfBirth || 0,
                City: data.city || "",
                FieldOfExpertise: data.fieldOfExpertise || "",
                YearOfExperience: data.yearOfExperience || 0,
                Description: data.description || "",
                BankAccountNumber: data.bankAccountNumber || "",
                AccountBankName: data.accountBankName || "",
                AccountBankOwner: data.accountBankOwner || "",
                Email: data.email || "",
                Avatar: data.avatar || "",
            });
        } catch (error) {
            console.log(error)
            toast.error("Không thể tải thông tin người dùng");
        }
    };
    

    const setAvatar = (avatar: string) => {
        setInfo({ ...info, Avatar: avatar })
    }

    const handleUpdateInfo = async () => {
        axiosCustomerConfig.post("/customer/update-info", info)
        .then(() => {
            toast.success("Cập nhật thông tin thành công")
        })
        .catch(() => {
            toast.error("Cập nhật thông tin thất bại")
        })
    }

    useEffect(() => {
        getUserInfo()
        setIsClient(true);
    }, [])

    if (!isClient) return null;

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
                    <div className="w-full flex flex-wrap gap-10 shadow-lg shadow-gray-500/50 p-12 m-12 rounded-lg">
                        <ImageUploadUser initialLink={info.Avatar} onChange={setAvatar} />
                        <div className="flex flex-col gap-4 flex-1 px-10">
                            <div className="flex gap-4 mb-5">
                                <div className="w-1/2">
                                    <label className="text-xl font-semibold text-gray-700 ">Họ</label>
                                    <input
                                        value={info.FirstName}
                                        onChange={(e) => setInfo({ ...info, FirstName: e.target.value })}
                                        placeholder="Họ"
                                        className="w-full px-5 py-5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xl transition-all"
                                    />
                                </div>
                                <div className="w-1/2">
                                    <label className="text-xl font-semibold text-gray-700">Tên</label>
                                    <input
                                        value={info.LastName}
                                        onChange={(e) => setInfo({ ...info, LastName: e.target.value })}
                                            placeholder="Tên"
                                        className="w-full px-5 py-5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xl transition-all"
                                    />
                                </div>
                            </div>

                            <div className="flex gap-10 mb-5">
                                <div className="w-1/3 flex items-center gap-4">
                                    <label className="text-xl text-nowrap ">Giới tính</label>
                                    <select className="p-5 min-w-[20rem] w-full text-xl border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                    value={info.Gender}
                                    onChange={(e) => setInfo({ ...info, Gender: e.target.value })}>
                                        <option value={``}></option>
                                        <option value={`Other`}>Khác</option>
                                        <option value={`Male`}>Nam</option>
                                        <option value={`Female`}>Nữ</option>
                                    </select>
                                </div>
                                <div className="w-1/3 flex items-center gap-4">
                                    <label className="text-xl text-nowrap">Năm sinh</label>
                                    <input
                                        value={info.YearOfBirth}
                                        onChange={(e) => setInfo({ ...info, YearOfBirth: parseInt(e.target.value) })}
                                        placeholder="Năm sinh"
                                        className="w-full px-5 py-5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xl transition-all"
                                    />
                                </div>
                                <div className="w-1/3 flex items-center gap-4">
                                    <label className="text-xl text-nowrap">Đang sống tại</label>
                                    <select className="p-5 min-w-[20rem] text-xl border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                        value={info.City}
                                        onChange={(e) => setInfo({ ...info, City: e.target.value })}
                                        >
                                            <option value={``}></option>
                                            <option value={`Hà nội`}>Hà nội</option>
                                            <option value={`HCM`}>HCM</option>
                                            <option value={`Đà nẵng`}>Đà nẵng</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 w-full gap-5 mb-10">

                                <div className="flex flex-col gap-2 h-auto">
                                    <label className="text-xl font-semibold text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        value={info.Email}
                                        disabled
                                        className="w-full p-5 text-xl border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none "
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-xl font-semibold text-gray-700">Số điện thoại</label>
                                    <input
                                        type="text"
                                        value={info.PhoneNumber}
                                        onChange={(e) => setInfo({ ...info, PhoneNumber: e.target.value })}
                                        placeholder="Số điện thoại"
                                        className="w-full p-5 text-xl border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none "
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xl font-semibold text-gray-700">Lĩnh vực chuyên môn</label>
                                    <input
                                        type="tel"
                                        value={info.FieldOfExpertise}
                                        onChange={(e) => setInfo({ ...info, FieldOfExpertise: e.target.value })}
                                        placeholder="Nhập lĩnh vực chuyên môn của bạn"
                                        className="w-full p-5 text-xl border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none "
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xl font-semibold text-gray-700">Số năm kinh nghiệm</label>
                                    <input
                                        type="text"
                                        value={info.YearOfExperience}
                                        onChange={(e) => setInfo({ ...info, YearOfExperience: parseInt(e.target.value) })}
                                        placeholder="Nhập số năm kinh nghiệm của bạn"
                                        className="w-full p-5 text-xl border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none "
                                    />
                                </div>

                                <div className="flex flex-col gap-4 col-span-2">
                                    <label className="text-xl font-semibold text-gray-700">Mô tả hoặc giới thiệu về lĩnh vực của bạn</label>
                                    <textarea
                                        placeholder="Nhập mô tả của bạn"
                                        rows={10}
                                        value={info.Description}
                                        onChange={(e) => setInfo({ ...info, Description: e.target.value })}
                                        className="w-full p-5 text-xl border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none  resize-none"
                                    ></textarea>
                                </div>
                            </div>

                            <p className="text-3xl font-semibold text-gray-700">Thông tin ngân hàng</p>

                            <div className="flex gap-10 mb-5">
                                <div className="w-1/3 flex items-center gap-4">
                                    <label className="text-xl text-nowrap ">Tên ngân hàng</label>
                                    <input
                                        placeholder="Tên ngân hàng"
                                        value={info.AccountBankName}
                                        onChange={(e) => setInfo({ ...info, AccountBankName: e.target.value })}
                                        className="w-full px-5 py-5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xl transition-all"
                                    />
                                </div>
                                <div className="w-1/3 flex items-center gap-4">
                                    <label className="text-xl text-nowrap">Số tài khoản ngân hàng</label>
                                    <input
                                        placeholder="Số tài khoản ngân hàng"
                                        value={info.BankAccountNumber}
                                        onChange={(e) => setInfo({ ...info, BankAccountNumber: e.target.value })}
                                        className="w-full px-5 py-5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xl transition-all"
                                    />
                                </div>
                                <div className="w-1/3 flex items-center gap-4">
                                    <label className="text-xl text-nowrap">Tên chủ tài khoản ngân hàng</label>
                                    <input
                                        placeholder="Tên chủ tài khoản ngân hàng"
                                        value={info.AccountBankOwner}
                                        onChange={(e) => setInfo({ ...info, AccountBankOwner: e.target.value })}
                                        className="w-full px-5 py-5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xl transition-all"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-end items-center ">
                                <button className="bg-color-primary text-white px-5 py-5 rounded-lg text-3xl"
                                onClick={handleUpdateInfo}>Lưu lại</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage