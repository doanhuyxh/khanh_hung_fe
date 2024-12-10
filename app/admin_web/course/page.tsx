'use client'
import { useEffect, useState } from 'react';
import Loading from '@/app/components/Loading';
import Pagination from '@/app/components/Pagination';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import axiosInstance from '@/app/configs/axiosConfig';

export default function Course() {

    const router = useRouter();

    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(30);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [status, setStatus] = useState('');

    const [totalResult, setTotalResult] = useState(0);
    const [courses, setCourses] = useState([]);
    const [totalPage, setTotalPage] = useState(0);

    const GetData = async () => {
        let res: any = await axiosInstance.get(`/course/GetAllCourse?page=${page}&pageSize=${pageSize}&status=${status}&search_keyword=${searchKeyword}`)
        if (res.code == 200) {
            let data = res.data;

            setCourses(data.data);
            setTotalResult(data.totalResult);
            setTotalPage(data.totalPage);
        }
        setIsLoading(false);
    }

    const handleAddOrUpdateCourse = (id: string) => {
        router.push(`/admin_web/course/form?id=${id}`);
    }

    const handleDetailCourse = (id: string) => {
        router.push(`/admin_web/course/${id}`)
    }

    useEffect(() => {
        GetData();
    }, []);

    if (isLoading) return <Loading />

    return (
        <>
            <div className="w-full flex justify-between items-center mb-10">
                <div className="flex gap-2">
                    <h1 className="text-2xl font-bold">Khoá học</h1>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => handleAddOrUpdateCourse('')}>+</button>
                </div>

                <div className="flex gap-2">
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md">Công khai</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Ẩn</button>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-md">Tạm dừng </button>
                    <button className="bg-yellow-500 text-white px-4 py-2 rounded-md">Nháp/Chờ duyệt</button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-md">Thùng rác</button>
                </div>
            </div>


            <div className="flex flex-col gap-4">
                {/* xu lý thao tác hàng loat */}
            </div>

            <hr className="border-gray-200" />
            <div className="overflow-x-auto p-5 shadow-lg rounded-lg">
                <table className="w-full table-auto table">
                    <thead>
                        <tr className="bg-gray-200 text-left dark:bg-meta-4">
                            <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">Tên khoá học</th>
                            <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">Ảnh thumbnail</th>
                            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">Loại khoá học</th>
                            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">Giá</th>
                            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">Số bài học</th>
                            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">Tổng thời lượng</th>
                            <th className="py-4 px-4 font-medium text-black dark:text-white">Trạng thái</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses && courses.length > 0 && courses.map((course: any, index: number) => (
                            <tr
                                key={index}
                                className="group relative hover:bg-gray-100 dark:hover:bg-gray-700 border-b border-gray-300 dark:border-gray-600">

                                <td className="py-4 px-4">{course.name}</td>
                                <td className="text-center py-4 px-4">
                                    <Image src={course.image} alt="thumbnail" width={100} height={100} />
                                </td>
                                <td className="py-4 px-4">{course.courseType === 'free' ? 'Miễn phí' : 'Trả phí'}</td>
                                <td className="py-4 px-4">{course.costPrice}</td>
                                <td className="py-4 px-4">{course.numberOfLessons}</td>
                                <td className="py-4 px-4">{course.totalTimeDuration}</td>
                                <td className="py-4 px-4">
                                    {course.status === 'draft' && <span className="text-yellow-500">Nháp</span>}
                                    {course.status === 'pending' && <span className="text-blue-500">Chờ duyệt</span>}
                                    {course.status === 'published' && <span className="text-green-500">Công khai</span>}
                                    {course.status === 'hidden' && <span className="text-gray-500">Ẩn</span>}
                                    {course.status === 'delete' && <span className="text-red-500">Xoá</span>}
                                </td>
                                <td className="relative">
                                    <div className="dropdown inline-block relative">

                                        <button className=" px-4 py-2 rounded-md">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                            </svg>
                                        </button>
                                        
                                        <div className="dropdown-content hidden absolute right-0 mt-2 w-12 bg-white rounded-md shadow-lg z-50 group-hover:block">
                                            <button 
                                                className="block w-full text-center px-4 py-2 hover:bg-gray-100" 
                                                onClick={() => handleAddOrUpdateCourse(course.id)}
                                            >
                                                <i className="fa-solid fa-pen-to-square" style={{ color: "#000000" }}></i>
                                            </button>
                                            <button 
                                                className="block w-full text-center px-4 py-2 hover:bg-gray-100"
                                                onClick={() => handleDetailCourse(course.id)}
                                            >
                                                <i className="fa-solid fa-person-chalkboard" style={{ color: "#e67519" }}></i>
                                            </button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <hr />
                <Pagination length={courses.length} page={page} pageSize={pageSize} totalPage={totalPage} totalResult={totalResult} onPageChange={setPage} />
            </div>
        </>
    )

}
