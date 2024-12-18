'use client'

import { EditorReactQuill } from "@/app/components/Editor";
import axiosInstance from "@/app/libs/configs/axiosConfig";
import axiosCustomerConfig from "@/app/libs/configs/axiosCustomerConfig";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export default function Affiliate() {
    const [value, setValue] = useState('');

    const [activeTab, setActiveTab] = useState('policy');
    const handleEditorChange = (content: string) => {
        setValue(content);
    }

    const handleSavePolicy = () => {
        const formData = new FormData();
        formData.append('key', 'affiliate_policy');
        formData.append('value', value);
        axiosCustomerConfig.post('/web_config/add-or-update', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(() => {
                toast.success('Lưu thành công', {
                    position: "top-right",
                })
            })
    }

    const [affiliateLevel, setAffiliateLevel] = useState<any[]>([]);

    useEffect(() => {
        axiosInstance.get('/affiliate/GetAllAffiliateLevel')
            .then((res) => {
                setAffiliateLevel(res.data)
            })

        axiosInstance.get('/affiliate/GetAffiliatePolicy')
            .then((res) => {
                setValue(res.data)
            })
    }, [])

    const renderAffiliateInfo = () => (
        <div className="flex flex-col gap-4">
            <h3 className="text-center text-2xl font-bold">Thông tin Level Affiliate</h3>
            <div className="flex flex-row gap-4">
                <div className="flex flex-col gap-2">
                    <p>Cấp độ Affiliate</p>
                    {affiliateLevel.map((item, index) => (
                        <div key={index} className="flex flex-row gap-2">
                            <p>{item.level}</p>
                            <p>Hoa hồng: {item.commissionRate}%</p>
                            <p>Chiết khấu: {item.discountRate}%</p>
                        </div>
                    )) || []}
                </div>
            </div>
        </div>
    )

    const renderPolicy = () => (
        <div className="w-full h-auto pb-10">
            <div className="flex flex-col gap-4 mb-3">
                <h3 className="text-center text-2xl font-bold">Chính sách Affiliate</h3>
                <EditorReactQuill value={value} onChange={handleEditorChange} />
            </div>
            <button className="bg-blue-500 w-25 text-white px-4 py-2 rounded-md float-end" onClick={handleSavePolicy}>Lưu</button>
        </div>
    )

    return (
        <div>
            <div className="flex border-b mb-4">
                <button
                    className={`px-4 py-2 ${activeTab === 'policy' ? 'border-b-2 border-blue-500 text-blue-500' : ''}`}
                    onClick={() => setActiveTab('policy')}
                >
                    Chính sách
                </button>
                <button
                    className={`px-4 py-2 ${activeTab === 'info' ? 'border-b-2 border-blue-500 text-blue-500' : ''}`}
                    onClick={() => setActiveTab('info')}
                >
                    Thông tin Level
                </button>
            </div>

            {activeTab === 'policy' && renderPolicy()}
            {activeTab === 'info' && renderAffiliateInfo()}
        </div>
    )
}