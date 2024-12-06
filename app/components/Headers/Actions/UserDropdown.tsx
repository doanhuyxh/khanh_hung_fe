'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function UserDropdown({ isDropdown }: { isDropdown: boolean }) {
    return (
        <div
            className={`dropdown_menu transition-all duration-300 absolute top-20 right-[-20px] ${isDropdown ? 'opacity-150' : 'opacity-0'}`}
        >
            <ul className="dropdown_menu_item bg-white shadow-lg rounded-lg py-2">
                <li>
                    <Link href="/learn/profile" className="flex items-center gap-2 px-5 py-3">
                        <div className="flex justify-center align-middle items-center transform translate-y-[-8px]">
                            <Image src="/assets/images/header/user-icon.svg" alt="profile" width={20} height={20} />
                        </div>
                        <div className="text-nowra text-xl flex flex-col gap-2">
                            <span className="text-gray-500 font-semibold">Mã khách hàng:</span>
                            <p className="text-black font-thin flex items-center gap-2">
                                SHA:12312
                                <span>
                                    <Image src="/assets/images/header/tag-icon.svg" alt="copy" width={15} height={15} />
                                </span>
                            </p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/learn/profile" className="flex gap-2 px-5 py-3">
                        <div className="flex overflow-hidden">
                            <Image src="/assets/images/header/cup-icon.svg" alt="profile" width={15} height={15} />
                        </div>
                        <p className="text-gray-500 font-semibold">
                            Affiliate Level:
                            <span className="mx-2 text-orange-500 font-semibold">1</span>
                        </p>
                    </Link>
                </li>
                <li>
                    <Link href="/learn/profile" className="flex items-center gap-2 px-5 py-3">
                        <div className="flex justify-center transform">
                            <Image src="/assets/images/header/key-icon.svg" alt="profile" width={15} height={15} />
                        </div>
                        <div className="text-nowra text-xl flex flex-col gap-2">
                            <p className="text-gray-500 font-semibold">Đổi mật khẩu</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <div className="m-auto w-10/12 h-[1px] bg-gray-500"></div>
                </li>
                <li>
                    <Link href="/learn/profile" className="flex items-center gap-2 px-5 py-3">
                        <div className="flex justify-center text-gray-500">
                            <Image src="/assets/images/header/window.svg" alt="profile" width={15} height={15} />
                        </div>
                        <div className="text-nowra text-xl flex flex-col gap-2">
                            <p className="text-gray-500 font-semibold">Đăng xuất</p>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
