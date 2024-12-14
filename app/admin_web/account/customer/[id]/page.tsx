'use client'

import axiosInstance from "@/app/configs/axiosConfig";
import { Customer } from "@/app/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
export default function CustomerDetailPage() {

    const param = useParams()
    const { id } = param

    const [customerData, setCustomerData] = useState<Customer>()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axiosInstance.get(`/customer/get-by-id?id=${id}`)
            .then((res) => {
                setCustomerData(res.data)
                console.log(res.data)

            })
            .catch((err) => {
                console.log(err)

            }).finally(() => {
                setIsLoading(false)
            })

    }, [])

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div className="container mx-auto">
            <div className="w-full p-4 rounded-lg">

                <div className="grid grid-cols-2 gap-4 mt-6">

                    <div className="bg-white p-4 rounded-lg shadow-xl col-span-2 flex flex-row justify-start gap-30">
                        <div className="w-32 h-32 rounded-full overflow-hidden">
                            {customerData?.avatar &&
                                <Image
                                    src={customerData.avatar}
                                    alt={customerData.firstName + ' ' + customerData.lastName}
                                    width={128}
                                    height={128}
                                    className="object-cover"
                                />
                            }
                        </div>
                        <div className="flex flex-col">
                            <h3 className="font-semibold mb-4">Thông tin khách hàng</h3>
                            <div className="space-y-2">
                                <h2 className="text-2xl font-bold">Họ tên: {customerData?.firstName + ' ' + customerData?.lastName}</h2>
                                <p><span className="font-medium">Email:</span> {customerData?.email}</p>
                                <p><span className="font-medium">Số điện thoại:</span> {customerData?.phoneNumber}</p>
                                <p><span className="font-medium">Giới tính:</span> {customerData?.gender}</p>
                                <p><span className="font-medium">Năm sinh:</span> {customerData?.yearOfBirth}</p>
                                <p><span className="font-medium">Thành phố:</span> {customerData?.city}</p>
                            </div>
                        </div>
                        <div className=""></div>
                        <div className="flex flex-col items-start gap-4">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Reset mật khẩu</button>
                            <button className="bg-red-500 text-white px-4 py-2 rounded-md">Khoá tài khoản</button>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-xl">
                        <h3 className="font-semibold mb-4">Thông tin chuyên môn</h3>
                        <div className="space-y-2">
                            <p><span className="font-medium">Lĩnh vực:</span> {customerData?.fieldOfExpertise}</p>
                            <p><span className="font-medium">Số năm kinh nghiệm:</span> {customerData?.yearOfExperience}</p>
                            <p><span className="font-medium">Mô tả:</span> {customerData?.description}</p>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-xl">
                        <h3 className="font-semibold mb-4">Thông tin ngân hàng</h3>
                        <div className="space-y-2">
                            <p><span className="font-medium">Số tài khoản:</span> {customerData?.bankAccountNumber}</p>
                            <p><span className="font-medium">Tên ngân hàng:</span> {customerData?.accountBankName}</p>
                            <p><span className="font-medium">Chủ tài khoản:</span> {customerData?.accountBankOwner}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}