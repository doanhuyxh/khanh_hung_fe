import Link from 'next/link';
import React from 'react';

export default function GuestActions() {
    return (
        <div className="flex gap-2">
            <Link href={"/learn/login"} className="btn_login">
                <span className="text-nowrap">Đăng nhập</span>
            </Link>
            <div className="btn_register">
                <span className="text-nowrap">Đăng ký và học thử ngay</span>
            </div>
            <div className="btn_register_mobile flex-col">
                <p className="text-nowrap text-center text-white">Học ngay</p>
                <p className="text-nowrap uppercase text-center text-white">Hoàn toàn miễn phí</p>
            </div>
        </div>
    );
}
