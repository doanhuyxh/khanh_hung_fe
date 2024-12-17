'use client';

export default function UpgradePage() {

    return <div className='w-full min-h-screen flex flex-col items-center justify-start'>
        <section className='w-full h-auto' style={{ backgroundImage: `url('/assets/images/up-bg-top.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='w-full h-auto'>
                <div className="flex flex-col items-center justify-center p-4 md:p-12 text-center">
                    <h1 className='text-white text-5xl md:text-7xl font-bold mb-6 md:mb-8'>Nâng cấp tài khoản VIP</h1>
                    <p className='text-white text-2xl md:text-3xl mb-8 md:mb-10'>Trải nghiệm những tính năng độc quyền với tài khoản VIP</p>
                    <div className='bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-12 max-w-4xl w-full md:w-3/4'>
                        <p className='text-white text-2xl md:text-3xl mb-6 md:mb-8 font-semibold'>
                            Với tài khoản VIP, bạn sẽ được:
                        </p>
                        <ul className='text-white text-left list-disc list-inside space-y-4 md:space-y-6 text-xl md:text-2xl'>
                            <li>Truy cập không giới hạn tất cả các khóa học</li>
                            <li>Tải xuống tài liệu học tập</li>
                            <li>Nhận hỗ trợ ưu tiên từ đội ngũ giảng viên</li>
                            <li>Tham gia các buổi học trực tuyến độc quyền</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section className='w-full h-auto'> 
            <div className="flex flex-col items-center justify-center p-8 md:p-12">
                <button 
                    onClick={() => window.location.href = '/upgrade/payment'}
                    className="relative inline-flex items-center justify-center px-8 py-4 text-2xl md:text-3xl font-bold text-white rounded-full overflow-hidden group bg-gradient-to-br from-purple-600 to-pink-500 hover:from-pink-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-full group-hover:h-full opacity-10"></span>
                    <span className="relative">
                        Nâng cấp ngay
                        <i className="fas fa-arrow-right ml-3 animate-bounce"></i>
                    </span>
                </button>
                <p className="mt-4 text-white text-xl md:text-2xl opacity-90">
                    Chỉ từ 199.000đ/tháng
                </p>
            </div>
        </section>
    </div>;
}