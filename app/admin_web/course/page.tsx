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

    const handleAddCourse = () => {
        router.push('/admin_web/course/form');
    }

    useEffect(() => {
        GetData();
    }, []);

    if (isLoading) return <Loading />

    return (
        <>
            <div className="flex justify-between items-center mb-5">
                <div className="flex gap-2">
                    <h1 className="text-2xl font-bold">Khoá học</h1>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleAddCourse}>+</button>
                </div>

                <div className="flex gap-2">
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md">Công khai</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Ẩn</button>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-md">Tạm dừng </button>
                    <button className="bg-yellow-500 text-white px-4 py-2 rounded-md">Nháp/Chờ duyệt</button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-md">Xoá</button>
                </div>
            </div>


            <div className="flex flex-col gap-4">
                {/* xu lý thao tác hàng loat */}
            </div>

            <hr className="border-gray-200" />

            <div className="max-w-full overflow-x-auto">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-gray-2 text-left dark:bg-meta-4">
                            <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                Tên khoá học
                            </th>
                            <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                                Ảnh thumnail
                            </th>
                            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                                Loại khoá học
                            </th>
                            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                                Giá
                            </th>
                            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                                Số bài học
                            </th>
                            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                                Tổng thời lượng
                            </th>
                            <th className="py-4 px-4 font-medium text-black dark:text-white">
                                Trạng thái
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses && courses.length > 0 && courses.map((course: any, index: number) => (
                            <tr key={index}>
                                <td>{course.name}</td>
                                <td>
                                    <Image src={course.image} alt="thumbnail" width={100} height={100} />
                                </td>
                                <td>{
                                    course.courseType == 'free' ? 'Miễn phí' : 'Trả phí'
                                }</td>
                                <td>{course.costPrice}</td>
                                <td>{course.numberOfLessons}</td>
                                <td>{course.totalTimeDuration}</td>
                                <td>{
                                    course.status == 'draft' ? 'Nháp' : course.status == 'pending' ? 'Chờ duyệt' : course.status == 'published' ? 'Công khai' : course.status == 'hidden' ? 'Ẩn' : course.status == 'delete' ? 'Tạm dừng' : 'Xoá'
                                }</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <Pagination page={page} totalPage={totalPage} onPageChange={setPage} totalResult={totalResult} pageSize={pageSize} length={courses.length} />
            </div>

        </>
    )

}
