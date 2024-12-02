"use client";

import { useEffect, useState } from "react";
import VideoPlayer from "@/app/components/Video/VideoPlayer";
import "../../styles/study.scss";
import LessonList from "@/app/components/Lesson/LessonList";

export default function StudyPage() {
  const title = "TIỀM NĂNG CỰC KÌ LỚN CỦA MÔ HÌNH DẠY BẰNG BỘ VIDEO";
  const [data, setData] = useState<any[]>([]);

  const [isShowAllLesson, setIsShowAllLesson] = useState(false);

  useEffect(() => {
    const temp_arr = [];
    for (let i = 0; i < 30; i++) {
      const temp = {
        image: "/assets/images/course/co-hoi-cua-chuyen-gia.png",
        type: "quan_trong",
        isFree: true,
        timeDuration: "10:35",
        name: "Giáo trình khóa học free - Viết trang home, upgrade"
      };

      temp_arr.push(temp);
    }
    setData(temp_arr);
  }, []);

  return (
    <div className="study_container flex flex-col lg:flex-row lg:gap-4 lg:px-10">
      <div className="lg:w-2/3 w-ful">
        <VideoPlayer
          title="ActiveSpin Cách để nói trúng tim đen autience - Avatar"
          timeDuration="10:35"
          views={565}
        />
      </div>

      <div className="video_list lg:w-1/3 w-full rounded-md mt-10 lg:mt-0 flex flex-col">
        <LessonList
          data={data}
          isShowAllLesson={isShowAllLesson}
          title={title}
          setIsShowAllLesson={setIsShowAllLesson}
        />
      </div>
    </div>
  );
}
