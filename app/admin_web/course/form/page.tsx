'use client'

import Editor from "@/app/components/Editor";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ImageUpload, VideoUpload } from "@/app/components/FileHandle";
import axiosInstance, { postFormData } from "@/app/configs/axiosConfig";

export default function CourseForm() {

    const [loading, setLoading] = useState(false);
    const searchParams = useSearchParams();
    const id = searchParams?.get('id');

    const router = useRouter();


    const [course, setCourse] = useState({
        Id: "",
        Name: '',
        Image: '',
        VideoIntro: '',
        Description: '',
        CourseContent: '',
        CourseType: '',
        CostPrice: 0,
        NumberOfLessons: 0,
        TotalTimeDuration: '',
        Status: 'draft',

    });

    const handleEditorChangeCourseContent = (content: string) => {
        setCourse({ ...course, CourseContent: content });
    };

    const handleEditorChangeDescription = (content: string) => {
        setCourse({ ...course, Description: content });
    };

    const HandleSaveCourse = async () => {

        const response = await postFormData('/course/CreateCourse', course);
        console.log(response)
    }


    useEffect(() => {

        if (id) {
            setCourse(course);
        }
    }, [id]);

    if (loading) {
        return null;
    }

    return (
        <div className="p-5">
            <h1 className="text-center text-2xl font-bold mb-5">Khoá học mới</h1>
            <div className="grid grid-cols-3 gap-4">

                <div className="col-span-2">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Tên khoá học
                            </label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                placeholder="Nhập tên khoá học"
                                value={course.Name}
                                onChange={(e) => setCourse({ ...course, Name: e.target.value })}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Tổng số bài học
                                </label>
                                <input
                                    type="number"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    placeholder="Số lượng bài học"
                                    value={course.NumberOfLessons}
                                    onChange={(e) => setCourse({ ...course, NumberOfLessons: Number(e.target.value) })}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Thời gian học
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    placeholder="Thời gian học"
                                    value={course.TotalTimeDuration}
                                    onChange={(e) => setCourse({ ...course, TotalTimeDuration: e.target.value })}
                                />
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Loại khoá học
                                </label>
                                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    value={course.CourseType}
                                    onChange={(e) => setCourse({ ...course, CourseType: e.target.value })}>
                                    <option value="free">Miễn phí</option>
                                    <option value="paid">Trả phí</option>
                                </select>
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Giá tiền
                                </label>
                                <input
                                    type="number"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    placeholder="Giá tiền"
                                    value={course.CostPrice}
                                    onChange={(e) => setCourse({ ...course, CostPrice: Number(e.target.value) })}
                                />
                            </div>

                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Giới thiệu khoá học
                            </label>
                            <Editor value={course.CourseContent} onChange={handleEditorChangeDescription} />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Nội dung chi tiết
                            </label>
                            <Editor value={course.CourseContent} onChange={handleEditorChangeCourseContent} />
                        </div>
                    </div>
                </div>


                <div className="col-span-1">
                    <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Trạng thái
                            </label>
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                value={course.Status}
                                onChange={(e) => setCourse({ ...course, Status: e.target.value })}>
                                <option value="draft">Nháp</option>
                                <option value="published">Công khai</option>
                                <option value="hidden">Ẩn</option>
                            </select>
                        </div>

                        <ImageUpload initialLink={course.Image} onChange={(value) => setCourse({ ...course, Image: value })} />

                        <VideoUpload initialLink={course.VideoIntro} onChange={(value) => setCourse({ ...course, VideoIntro: value })} />

                        <div className="flex justify-end">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={HandleSaveCourse}>
                                Lưu khoá học
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}