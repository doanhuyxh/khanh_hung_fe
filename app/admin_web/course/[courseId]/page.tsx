'use client';

import axiosInstance, { postFormData } from '@/app/configs/axiosConfig';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Loading from '@/app/components/Loading';
import ModalScroll from '@/app/components/Modal/ModalScroll';
import { FormLesson } from '@/app/components/Form';
import { LessonItemAdmin } from '@/app/components/Lesson';
import ModalViewHtml from '@/app/components/Modal/ModalViewHtml';

export default function CourseLesson() {
    const [loading, setLoading] = useState(true)
    const param = useParams()
    const { courseId } = param

    const router = useRouter()

    const [isOpen, setIsOpen] = useState(false)
    const [isOpenDescription, setIsOpenDescription] = useState(false)
    const [lessonContent, setLessonContent] = useState('')

    const [course, setCourse] = useState(null)
    const [courseLesson, setCourseLesson] = useState([])

    const [lesson, setLesson] = useState({
        Id: "",
        Name: "",
        Description: "",
        LessonContent: "",
        ImageThumbnail: '',
        Video: '',
        Duration: '',
        CourseId: courseId
    })

    const HandleCreateOrUpdateLesson = (id: string) => {
        if (id == "") {
            setLesson({
                Id: "",
                Name: "",
                Description: "",
                LessonContent: "",
                ImageThumbnail: '',
                Video: '',
                Duration: '',
                CourseId: courseId
            })
        } else {
            const lesson = courseLesson.find((item:any) => item.id == id)
            setLesson({
                Id: lesson.id,
                Name: lesson.name,
                Description: lesson.description,
                LessonContent: lesson.lessonContent,
                ImageThumbnail: lesson.imageThumbnail,
                Video: lesson.video,
                Duration: lesson.duration,
                CourseId: courseId
            })
        }
        setIsOpen(true)
    }

    const HandleDeleteLesson = async (id: string) => {
        await axiosInstance.get(`/lesson/delete?id=${id}`);
        await GetDataLesson()
    }

    const saveLesson = async () => {
        await postFormData('/lesson/CreateOrUpdate', lesson);
        GetDataLesson()
        setIsOpen(false)

    }

    const GetDataCourse = async () => {
        const res = await axiosInstance.get(`/course/GetCourseById?id=${courseId}`)
        setCourse(res.data)
    }

    const GetDataLesson = async () => {
        const res = await axiosInstance.get(`/lesson/GetByCourseId?courseId=${courseId}&page=1&pageSize=30`)
        setCourseLesson(res.data)
    }


    useEffect(() => {
        GetDataCourse()
        GetDataLesson()
        setLoading(false)
    }, [])

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <div className='w-full'>
                <div className='w-full bg-white shadow-lg p-4 rounded-lg flex justify-between items-center mb-5'>
                    <button className='float-left hover:bg-blue-400 px-4 py-3 rounded-md' onClick={() => router.push('/admin_web/course')}>
                        <i className="fa-solid fa-arrow-left" style={{ color: "#1c6bf2" }}></i>
                    </button>

                    <h1 className='text-2xl font-bold'>Khoá học: {course?.name || ""}</h1>

                    <button className='bg-blue-500 text-white px-4 py-2 rounded-md' onClick={() => HandleCreateOrUpdateLesson('')}>Bài học mới</button>
                </div>

                <div className='w-full p-4 rounded-lg flex flex-col gap-4'>
                    <h2 className='text-center text-lg font-bold'>Danh sách bài học</h2>
                    {courseLesson.length == 0 && <p className='text-center text-lg font-bold'>Không có bài học nào</p>}

                    {courseLesson.length > 0 && courseLesson.map((item: any, index: number) => (
                        <LessonItemAdmin
                            key={index}
                            item={item}
                            toggleLessonContent={() => {
                                setLessonContent(item.lessonContent)
                                setIsOpenDescription(true)
                            }}
                            HandleCreateOrUpdateLesson={HandleCreateOrUpdateLesson}
                            HandleDeleteLesson={HandleDeleteLesson}
                        />
                    ))}

                </div>
            </div>

            <ModalScroll isOpen={isOpen} onClose={() => setIsOpen(false)} title={`${lesson.Id == "" ? "Tạo bài học mới" : "Chỉnh sửa bài học"} cho khoá học: ${course?.name || ""}`}>
                <FormLesson lesson={lesson} setLesson={setLesson} saveLesson={saveLesson} />
            </ModalScroll>

            <ModalViewHtml isOpen={isOpenDescription} onClose={() => setIsOpenDescription(false)} title={'Nội dung bài học'}>
                <div dangerouslySetInnerHTML={{ __html: lessonContent || "" }} />
            </ModalViewHtml>
        </>
    )
}
