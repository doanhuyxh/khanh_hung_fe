'use client'
import { useEffect, useState } from 'react';
import Loading from '@/app/components/Loading';
import Pagination from '@/app/components/Pagination';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Dropdown from '@/app/components/DropDown';

import axiosInstance from '@/app/configs/axiosConfig';

export default function Course() {

    const router = useRouter();

    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(30);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [status, setStatus] = useState('published');

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

    const handleDeleteCourse = (id: string) => {
        axiosInstance.get(`/course/delete?id=${id}`)
            .then((res: any) => {
                if (res.code == 200) {
                    GetData();
                }
            })
    }

    useEffect(() => {
        setIsLoading(true);
        GetData();
    }, [status]);

    if (isLoading) return <Loading />

    return (
        <>
            <div className="w-full flex justify-between items-center">
                <div className="flex gap-2">
                    <h1 className="text-2xl font-bold">Khoá học</h1>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => handleAddOrUpdateCourse('')}>+</button>
                </div>
                <div className="flex gap-2">
                    <button className={`${status == 'published' ? 'bg-green-500' : 'bg-gray-500'} text-white px-4 py-2 rounded-md`} onClick={() => setStatus('published')} >Công khai</button>
                    <button className={`${status == 'hidden' ? 'bg-blue-500' : 'bg-gray-500'} text-white px-4 py-2 rounded-md`} onClick={() => setStatus('hidden')}>Ẩn</button>
                    <button className={`${status == 'stop' ? 'bg-orange-500' : 'bg-gray-500'} text-white px-4 py-2 rounded-md`} onClick={() => setStatus('stop')}>Tạm dừng </button>
                    <button className={`${status == 'draft' ? 'bg-yellow-500' : 'bg-gray-500'} text-white px-4 py-2 rounded-md`} onClick={() => setStatus('draft')}>Nháp/Chờ duyệt</button>
                    <button className={`${status == 'delete' ? 'bg-red-500' : 'bg-gray-500'} text-white px-4 py-2 rounded-md`} onClick={() => setStatus('delete')}>Thùng rác</button>
                </div>
            </div>

            <hr className="border-gray-200 mt-2 mb-10" />

            <div className="flex flex-col gap-4">
                {/* xu lý thao tác hàng loat */}
            </div>

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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {}

                        {courses && courses.length > 0 && courses.map((course: any, index: number) => (
                            <tr
                                key={index}
                                className="hover:bg-gray-100 dark:hover:bg-gray-700 border-b border-gray-300 dark:border-gray-600">

                                <td className="py-4 px-4">{course.name}</td>
                                <td className="text-center py-4 px-4">
                                    <Image src={course.image} alt="thumbnail" width={100} height={100} />
                                </td>
                                <td className="py-4 px-4">{course.courseType === 'free' ? 'Miễn phí' : 'Trả phí'}</td>
                                <td className="py-4 px-4">{course.costPrice}</td>
                                <td className="py-4 px-4">{course.numberOfLessons}</td>
                                <td className="py-4 px-4">{course.totalTimeDuration}</td>

                                <td className="">

                                    <Dropdown icon={<i className="fa-solid fa-ellipsis" style={{ color: "#000000" }}></i>} items={[
                                        {
                                            icon: <i className="fa-solid fa-pen-to-square" style={{ color: "#000000" }}></i>,
                                            onClick: () => handleAddOrUpdateCourse(course.id)
                                        },
                                        {
                                            icon: <i className="fa-solid fa-person-chalkboard" style={{ color: "#e67519" }}></i>,
                                            onClick: () => handleDetailCourse(course.id)
                                        },
                                        {
                                            icon: <i className="fa-solid fa-trash" style={{ color: "red" }}></i>,
                                            onClick: () => handleDeleteCourse(course.id)
                                        }
                                    ]} />
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
