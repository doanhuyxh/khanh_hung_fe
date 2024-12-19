'use client'

import { useState } from "react";
import { PlushIcon } from "../../Icon"

export default function Faqs() {

    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const toggleAnswer = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const questions = [
        {
            question: "Khóa học free thiệt không, bài free có thiệt chất lượng không?",
            answer: "Khoá học miễn phí thật, chất lượng thật. Hùng không nói xạo với bạn. Đăng ký là xem ngay 30 bài học miễn phí giúp bạn BÁN ĐƯỢC KHOÁ HỌC của mình.",
        },
        {
            question: "Có cần nhập thẻ tín dụng hay điền form hay để lại email nhận kiến thức gì đó không?",
            answer: "Không điền form, không nhập thẻ, chỉ cần đăng ký là học luôn.",
        },
        {
            question: "Khóa học là dạy cái gì?",
            answer: "Toàn bộ kiến thức để tạo ra, marketing và bán, và đặc biệt là kinh doanh mảng elearning này sao cho bền vững, mang lại nguồn thu nhập cho bạn và sẵn tiện tạo thêm những lợi ích khác cho bạn như xây dựng thương hiệu cá nhân hoặc gián tiếp kiếm thêm khách hàng cho dịch vụ mà bạn đang kinh doanh",
        },
        {
            question: "DATA mà Hùng cung cấp để làm gì?",
            answer: `Với DATA và đặc biệt là số liệu kinh doanh của chính khanhhung.academy`
        }
    ];

    return (
        <div className="w-full text-wrap lg:w-8/12 mx-auto mt-10 ">
            <h3 className="text-3xl lg:text-5xl scale-110 font-semibold text-center mb-6 mt-20 text-white">Chúng tôi có thể giúp gì cho bạn</h3>

            <div className="space-y-4">
                {questions.map((item, index) => (
                    <div key={index} className="mb-4">
                        <div
                            onClick={() => toggleAnswer(index)}
                            className="flex flow-row justify-between cursor-pointer p-6 text-white text-xl font-medium rounded-t-lg hover:text-[#f41e92]"
                        >
                            <p className="text-xl lg:text-3xl">{item.question}</p>
                            <PlushIcon isOpen={openIndex == index} />
                        </div>
                        {openIndex === index && (
                            <div className="ml-10 p-6 normal-case text-white rounded-b-lg text-xl lg:text-3xl animate-fade-down animate-once animate-ease-in">
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
