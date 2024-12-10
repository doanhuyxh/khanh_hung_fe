"use client";

import dynamic from "next/dynamic"
import { useEffect, useState } from "react";
const VideoPlayer = dynamic(() => import("@/app/components/Video/VideoPlayer"), { ssr: false });
import { LessonList } from "@/app/components/Lesson";
import { LessonData, CourseData } from "@/app/types";

import axiosCustomerConfig from "@/app/configs/axiosCustomerConfig";
import Loading from "@/app/components/Loading";
import { useParams } from "next/navigation";


export default function StudyPage() {

  const [loading, setLoading] = useState(true);

  const [lesson, setLesson] = useState<any>([]);
const [data, setData] = useState<CourseData[]>([]);

  const [isShowAllLesson, setIsShowAllLesson] = useState(false);

  const { slug } = useParams();

  const getLesson = async () => {
    const response = await axiosCustomerConfig.get(`/course/lesson?id=${slug}`);
    const data = response.data;
    
    setLesson(data);

    setLoading(false);
  }

  const getAllCourse = async () => {
    const response = await axiosCustomerConfig.get("/course/GetAllCourse");
    const data = response.data;
    const temp_arr: CourseData[] = [];
    data.forEach((item: CourseData) => {
      const course: CourseData = {
        id: item.id,
        name: item.name,
        image: item.image,
        costPrice: item.costPrice,
        totalTimeDuration: item.totalTimeDuration,
        numberOfLessons: item.numberOfLessons,
        lesson: []
      };
      item.lesson.forEach((lesson: LessonData) => {
        course.lesson.push({
          id: lesson.id,
          name: lesson.name,
          lessonContent: lesson.lessonContent,
          imageThumbnail: lesson.imageThumbnail,
          video: lesson.video,
          duration: lesson.duration
        });
      });
      temp_arr.push(course);
    });
    setData(temp_arr);
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 1024) {
        window.scrollTo(0, 0);
      }
      getLesson();
      
      getAllCourse();
    }
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <div className="study_container flex flex-col lg:flex-row lg:gap-4 lg:px-10">
      <div className="lg:w-2/3 w-ful">
        <VideoPlayer
          title={lesson.name}
          timeDuration={lesson.duration}
          views={lesson.totalView}
        />
      </div>

      <div className="video_list lg:w-1/3 w-full rounded-md mt-10 lg:mt-0 flex flex-col">
        <LessonList
          data={data}
          isShowAllLesson={isShowAllLesson}
          setIsShowAllLesson={setIsShowAllLesson}
        />
      </div>
    </div>
  );
}
