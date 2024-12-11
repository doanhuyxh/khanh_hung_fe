'use client';

import Sidebar from "@/app/components/Sidebar/Customer"


function ProfilePage() {
    return (
        <div className="flex flex-row flex-wrap">
            <div className="hidden lg:block">
                <Sidebar />
            </div>
            <div className="container mt-20">
                <div className="w-full flex justify-center items-center">
                    <h1 className="text-5xl font-bold transform scale-150  text-color-secondary">Thông tin cá nhân</h1>
                </div>

                <div className="w-full flex justify-center items-center">
                    <h1 className="text-5xl font-bold transform scale-150  text-color-secondary">Thông tin cá nhân</h1>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage