'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import UserDropdown from './UserDropdown';
import { Customer } from '@/app/libs/types';
import { usePathname } from 'next/navigation';

export default function UserActions({ user }: { user: Customer }) {
    const [isDropdown, setIsDropdown] = useState(false);
    const pathname = usePathname();

    const isLearnPage = pathname.includes('/learn/study');


    return (
        <div className="flex gap-4">
            <div className="btn-upgrade">
                {isLearnPage ? <Link href="/upgrade" className="btn-upgrade-link">
                    <span className="star"></span>
                    <span>
                        <Image src="/assets/images/header/premium-1.svg" alt="star" width={18} height={18} />
                    </span>
                    <span className="text-nowrap uppercase text-white font-bold text-xl">Nâng cấp Pro</span>
                </Link>
                    : <Link href="/learn/study" className="btn-upgrade-link">
                        <span className="star"></span>
                        <span>
                            <Image src="/assets/images/flash.svg" alt="star" width={15} height={15} />
                        </span>
                        <span className="text-nowrap uppercase text-white font-bold text-xl">Học ngay</span>
                    </Link>
                }
                
            </div>
            <a className='lg:hidden bg-pink-500 flex flex-col justify-center items-center p-2 rounded-lg' href="https://play.google.com/store/apps/details?id=com.englishgo.app">
                    <span className="star"></span>
                    <span>
                        <Image src="/assets/images/header/icon-down-app.svg" alt="star" width={15} height={15} />
                    </span>
                    <span className="text-nowrap uppercase text-white font-bold text-xl">Tải App</span>
                </a>
            <div className="btn_profile">
                <div className="btn_profile_content cursor-pointer" onClick={() => setIsDropdown(!isDropdown)}>
                    <Link href="/learn/profile" className="btn_profile_avatar">
                        <Image src="/assets/images/avatar_defaut.jpg" alt="profile" width={150} height={150} />
                    </Link>
                    <div className="flex flex-col gap-1">
                        <p className="text-nowrap text-black font-bold text-xl">{user?.firstName + " " + user?.lastName}</p>
                        <div className="text-nowrap flex items-center gap-1">
                            <Image src="/assets/images/price-icon.svg" alt="star" width={15} height={15} />
                            <span className="text-nowrap text-color-primary font-bold text-xl m-y-auto">{user.totalMoney}đ</span>
                        </div>
                    </div>
                    <div className={`icon_dropdown transition-all duration-300 ${isDropdown ? 'rotate-180' : ''} `}>
                        <Image src="/assets/images/arrow-02.png" alt="dropdown" width={15} height={15} />
                    </div>
                </div>
                <UserDropdown isDropdown={isDropdown} user={user} />
            </div>
        </div>
    );
}
