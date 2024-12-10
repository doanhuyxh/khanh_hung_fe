import React, { useState } from 'react';
import Image from 'next/image';

interface LessonItemProps {
    item: any; // Có thể thay đổi thành kiểu dữ liệu phù hợp với bạn
    toggleDescription: (id: string) => void;
    toggleLessonContent: (id: string) => void;
    HandleCreateOrUpdateLesson: (id: string) => void;
    HandleDeleteLesson: (id: string) => void;
}

const LessonItemAdmin: React.FC<LessonItemProps> = ({
    item,
    toggleDescription,
    toggleLessonContent,
    HandleCreateOrUpdateLesson,
    HandleDeleteLesson,
}) => {
    return (
        <div className='w-full flex justify-between items-center gap-4 mb-4 shadow-lg p-4 rounded-lg'>
            <div className='flex gap-5'>
                <div className='max-w-[300px] h-[200px]'>
                    <Image
                        src={item.imageThumbnail || ""}
                        alt={item.name || ""}
                        width={200}
                        height={200}
                        objectFit="contain"
                        layout="responsive"
                    />
                </div>
                <div>
                    {item.video && (
                        <video src={item.video || ""} controls />
                    )}
                </div>
                <div>
                    <p className='text-xl font-bold'>Bài học: {item.name || ""}</p>
                    <span className='text-sm'>Thời lượng: {item.duration || ""}</span>

                    <div className='flex gap-2'>
                        <span className="font-semibold text-lg">Giới thiệu</span>
                        <button 
                            className="text-blue-500 underline"
                            onClick={() => toggleDescription(item.id)}>
                            Xem
                        </button>
                        
                    </div>

                    <div className='flex gap-2'>
                        <span className="font-semibold text-lg">Nội dung:</span>
                        <button 
                            className="text-blue-500 underline"
                            onClick={() => toggleLessonContent(item.id)}>
                            Xem
                        </button>
                        
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <button className='bg-blue-500 text-white px-4 py-2 rounded-md' onClick={() => HandleCreateOrUpdateLesson(item.id)}>Chỉnh sửa</button>
                <button className='bg-red-500 text-white px-4 py-2 rounded-md' onClick={() => HandleDeleteLesson(item.id)}>Xóa</button>
            </div>
        </div>
    );
};

export default LessonItemAdmin;
