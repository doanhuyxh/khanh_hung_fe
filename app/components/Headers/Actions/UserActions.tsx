'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import UserDropdown from './UserDropdown';

export default function UserActions() {
    const [isDropdown, setIsDropdown] = useState(false);

    return (
        <div className="flex gap-4">
            <div className="btn-upgrade">
                <Link href="/learn/study" className="btn-upgrade-link">
                    <span className="star"></span>
                    <span>
                        <Image src="/assets/images/flash.svg" alt="star" width={15} height={15} />
                    </span>
                    <span className="text-nowrap uppercase text-white font-bold text-xl">Học ngay</span>
                </Link>
            </div>
            <div className="btn_profile">
                <div className="btn_profile_content cursor-pointer" onClick={() => setIsDropdown(!isDropdown)}>
                    <Link href="/learn/profile" className="btn_profile_avatar">
                        <Image src="/assets/images/avatar_defaut.jpg" alt="profile" width={150} height={150} />
                    </Link>
                    <div className="flex flex-col gap-1">
                        <p className="text-nowrap text-black font-bold text-xl">Nguyễn Văn A</p>
                        <div className="text-nowrap flex items-center gap-1">
                            <Image src="/assets/images/price-icon.svg" alt="star" width={15} height={15} />
                            <span className="text-nowrap text-color-primary font-bold text-xl m-y-auto">150đ</span>
                        </div>
                    </div>
                    <div className={`icon_dropdown transition-all duration-300 ${isDropdown ? 'rotate-180' : ''} `}>
                        <Image src="/assets/images/arrow-02.png" alt="dropdown" width={15} height={15} />
                    </div>
                </div>
                <UserDropdown isDropdown={isDropdown} />
            </div>
        </div>
    );
}
