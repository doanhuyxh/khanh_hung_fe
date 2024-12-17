'use client';

import { useEffect, useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import axiosCustomerConfig from '@/app/libs/configs/axiosCustomerConfig';
import { Customer } from '@/app/libs/types';
import '../../styles/home.css'
import { toast } from 'react-hot-toast';


export default function PaymentPage() {

    const [qrCode, setQrCode] = useState<string>('');
    const [user, setUser] = useState<Customer>({} as Customer);
    const confettiCanvasRef = useRef<HTMLCanvasElement | null>(null);
    const GetUserInfo = async () => {
        const res = await axiosCustomerConfig.get('/customer/get-info');
        setUser(res.data);
    }

    const [countDown, setCountDown] = useState<number>(180);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown(prev => prev - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (countDown === 0) {
            window.location.href = '/upgrade';
        }
        else{
            if (countDown % 10 === 0) {
                axiosCustomerConfig.get('/customer/get-member-type')
                .then((res) => {
                    if (res.data == "vip"){
                        toast.success("Bạn đã được nâng cấp thành viên VIP", {
                            duration: 10000,
                            position: "top-right",
                            style: {
                                background: "#4CAF50",
                                color: "#fff",
                            },
                        });
                        window.location.href = '/learn/dashboard';
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
            }
        }
    }, [countDown]);

    useEffect(() => {
        GetUserInfo();
    }, []);

    useEffect(() => {
        const colorfulSnowFall = () => {
            confetti({
                particleCount: 50,
                startVelocity: 25,
                spread: 100,
                origin: {
                    x: Math.random(),
                    y: 0,
                },
                colors: [
                    '#ffffff', '#ff0000', '#00ff00', '#0000ff', '#ff69b4',
                    '#ffd700', '#ff8c00', '#00ced1', '#9932cc', '#00ff7f',
                    '#1e90ff', '#8a2be2', '#ff6347', '#32cd32', '#ff1493'
                ], 
                gravity: 0.3,
                scalar: 0.8,
                ticks: 600,
            });
        };

        const interval = setInterval(colorfulSnowFall, 50);
        return () => clearInterval(interval);
    }, [])

    return (
        <div className="w-screen h-screen overflow-y-auto">
            <canvas ref={confettiCanvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none" />

            <div className="flex flex-col items-center justify-center min-h-[30vh] gap-6 info-container px-4">
                <h2 className='text-2xl md:text-5xl font-bold text-white mb-4 text-center tracking-wide'>
                    Chúc mừng {user?.lastName}!
                </h2>
                <p className='text-xl md:text-3xl text-white font-semibold mb-4 text-center leading-tight tracking-wide'>
                    Giao dịch của bạn đã được khoá lại với mức giá ưu đãi chỉ từ <span className="text-yellow-300 font-bold">199.000đ</span>/tháng
                </p>
                <p className='text-lg md:text-2xl text-white font-semibold text-center tracking-wide'>
                    Chỉ còn <span className="text-yellow-300 font-bold animate-pulse">1</span> bước nữa để bạn sở hữu khóa học Premium
                </p>
            </div>

            <div className='w-11/12 md:w-8/12 mx-auto bg-white p-6 md:p-8 rounded-2xl shadow-2xl mb-12'>
                <div className='mb-6'>
                    <h2 className='text-2xl md:text-4xl font-bold text-gray-800 mb-3 tracking-wide'>Hệ thống chuyển khoản tự báo có</h2>
                    <p className='text-base md:text-xl text-gray-600 tracking-wide'>Mở app ngân hàng bất kỳ để quét QR hoặc chuyển khoản theo nội dung bên dưới</p>
                </div>
                <div className='flex flex-col items-center lg:flex-row lg:justify-between gap-6 w-full'>
                    <div className='flex-1 space-y-3 w-full'>
                        <div className='flex flex-col md:flex-row justify-between gap-3 items-center p-3'>
                            <p className='text-lg md:text-2xl text-gray-600 font-bold tracking-wide'>Ngân hàng</p>
                            <p className='text-lg md:text-2xl font-bold p-2 bg-blue-600 text-white rounded-lg tracking-wide'>CAKE</p>
                        </div>
                        <div className='flex flex-col md:flex-row justify-between gap-3 items-center p-3'>
                            <p className='text-lg md:text-2xl text-gray-600 font-bold tracking-wide'>Số tài khoản</p>
                            <p className='text-lg md:text-2xl font-bold p-2 tracking-wide'>648</p>
                        </div>
                        <div className='flex flex-col md:flex-row justify-between gap-3 items-center p-3'>
                            <p className='text-lg md:text-2xl text-gray-600 font-bold tracking-wide'>Tên tài khoản</p>
                            <p className='text-lg md:text-2xl font-bold p-2 tracking-wide'>NGUYEN KHANH HUNG</p>
                        </div>
                        <div className='flex flex-col md:flex-row justify-between gap-3 items-center p-3'>
                            <p className='text-lg md:text-2xl text-gray-600 font-bold tracking-wide'>Số tiền</p>
                            <p className='text-lg md:text-2xl font-bold p-2 tracking-wide'>199.000 VND</p>
                        </div>
                        <div className='flex flex-col md:flex-row justify-between gap-3 items-center p-3'>
                            <p className='text-lg md:text-2xl text-gray-600 font-bold tracking-wide'>Nội dung chuyển khoản</p>
                            <p className='text-lg md:text-2xl font-bold p-2 tracking-wide'>{user?.code}</p>
                        </div>
                        <div className='flex flex-col md:flex-row justify-between gap-3 items-center p-3'>
                            <p className='text-base md:text-xl text-red-600 font-medium leading-tight tracking-wide'>
                                Đây là tính năng chuyển khoản tự động báo có của website HOÀN TOÀN TỰ ĐỘNG.
                                Bạn hãy chuyển ĐÚNG SỐ TIỀN và ĐÚNG NỘI DUNG CHUYỂN KHOẢN.
                                Sau khi chuyển tiền xong hệ thống sẽ tự động chuyển hướng.
                            </p>
                        </div>

                        <div className='flex flex-col gap-3 p-3'>
                            <p className='text-lg md:text-2xl text-gray-600 font-bold tracking-wide'>Đừng quên rằng, bạn có quyền yêu cầu</p>
                            <p className='text-xl md:text-3xl font-bold text-orange-600 p-2 rounded-lg tracking-wide'>7 Ngày hoàn tiền, KHÔNG CẦN LÝ DO</p>
                        </div>
                    </div>
                    <div className='flex-1 flex justify-center items-center p-4 bg-gray-50 rounded-xl'>
                        <img src="/assets/images/download.png" alt="QR Payment" className='w-full max-w-md object-contain rounded-lg shadow-lg' />
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <p className='text-lg md:text-2xl text-gray-600 font-bold tracking-wide'>
                        Tự động huỷ giao dịch sau <span className='text-red-900 font-bold animate-pulse'>{countDown}</span> giây
                    </p>
                </div>
            </div>
        </div>
    );
}
