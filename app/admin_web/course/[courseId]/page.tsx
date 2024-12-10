'use client';

import axiosInstance from '@/app/configs/axiosConfig';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

export default function CourseLesson() {
    const [loading, setLoading] = useState(true)
    const param = useParams()
    const {courseId} = param
    
    const [course, setCourse] = useState(null)
    console.error('Debug log:', courseId);

    useEffect(()=>{
        axiosInstance.get(`/course/GetCourseById?id=${courseId}`)
        .then(res=>{
            console.log("res:: ", res)
        })
    }, [courseId])

    if (loading){
        return null
    }
}
