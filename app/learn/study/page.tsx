"use client";

import { useEffect, useState } from "react";
import { CollapseCourse } from "@/app/components/Collapse";
import ActiveSpin from "@/app/components/ActiveSpin";
import Image from "next/image";
import "../../styles/study.scss";

export default function StudyPage() {
  const title = "TIỀM NĂNG CỰC KÌ LỚN CỦA MÔ HÌNH DẠY BẰNG BỘ VIDEO";
  const [data, setData] = useState<any[]>([]);

  const [activeTab, setActiveTab] = useState("course"); // Default tab is "course"

  const [isShowAllLesson, setIsShowAllLesson] = useState(false);

  useEffect(() => {
    let temp_arr = [];
    for (let i = 0; i < 30; i++) {
      let temp = {
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
    <div className="study_container flex flex-col lg:flex-row lg:gap-4 lg:px-10 px-4 py-8">
      <div className="flex-1 rounded-md px-10 py-5 shadow-md ">
        <div className="h-full w-full flex items-center justify-center text-white video_section ">
          <video src="/assets/video/video_demo.mp4" />
        </div>
        <div className="mt-10">
          <h1 className="lesson_name my-2">
            ActiveSpin Cách để nói trúng tim đen autience - Avatar
          </h1>
          <p className="flex gap-1">
            <span>
              <Image
                src="/assets/images/ic-clock.svg"
                width={20}
                height={20}
                alt=""
              />
            </span>
            <span className="text-black">10:35</span>
            <span className="line" />
            <span>
              <Image
                src="/assets/images/ic-play.svg"
                width={20}
                height={20}
                alt=""
              />
            </span>
            <span className="text-black">565 Lượt xem</span>
            <span className="line" />
            <span>
              <Image
                src="/assets/images/ic-bg.svg"
                width={20}
                height={20}
                alt=""
              />
            </span>
            <span className="text-black">Bài giảng</span>
            <span className="font-bold text-white bg-green-800 px-3 py-1 rounded-lg flex gap-2">
              <span className="m-auto">
                <Image
                  src="/assets/images/ic-tag-free.svg"
                  width={10}
                  height={10}
                  alt=""
                />
              </span>
              Free
            </span>
          </p>
        </div>
      </div>

      <div className="video_list lg:w-1/3 w-full bg-gray-100 rounded-md shadow-md mt-4 lg:mt-0 flex flex-col">
        <h2 className="text-lg font-semibold m-auto ml-0 mt-2 mb-4 text-black flex gap-2">
          <ActiveSpin isActive={isShowAllLesson} onToggle={setIsShowAllLesson}/> Trải nghiệm toàn bộ 202 videos- Hơn 35 giờ
        </h2>

        {activeTab == "course" &&
          <div className="px-0 flex-1 pb-4 overflow-y-auto container_list">
            {[...Array(5)].map((_, index) => {
              return (
                <CollapseCourse
                  key={index}
                  title={title}
                  data={data}
                  numberVideo={9}
                  timeDuration="01:51:09"
                />
              );
            })}
          </div>}

        {activeTab == "description" &&
          <div className="p-4 flex-1 overflow-y-auto">
            <div className="text-black">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
              illum mollitia deleniti enim tenetur, aliquid aspernatur error
              fugiat sunt consequatur perferendis molestiae dolore nulla? Ad at
              perferendis illo nobis magni. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Sequi, illum mollitia deleniti enim
              tenetur, aliquid aspernatur error fugiat sunt consequatur
              perferendis molestiae dolore nulla? Ad at perferendis illo nobis
              magni. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Sequi, illum mollitia deleniti enim tenetur, aliquid aspernatur
              error fugiat sunt consequatur perferendis molestiae dolore nulla?
              Ad at perferendis illo nobis magni. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Sequi, illum mollitia deleniti enim
              tenetur, aliquid aspernatur error fugiat sunt consequatur
              perferendis molestiae dolore nulla? Ad at perferendis illo nobis
              magni. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Sequi, illum mollitia deleniti enim tenetur, aliquid aspernatur
              error fugiat sunt consequatur perferendis molestiae dolore nulla?
              Ad at perferendis illo nobis magni. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Sequi, illum mollitia deleniti enim
              tenetur, aliquid aspernatur error fugiat sunt consequatur
              perferendis molestiae dolore nulla? Ad at perferendis illo nobis
              magni. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Sequi, illum mollitia deleniti enim tenetur, aliquid aspernatur
              error fugiat sunt consequatur perferendis molestiae dolore nulla?
              Ad at perferendis illo nobis magni. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Sequi, illum mollitia deleniti enim
              tenetur, aliquid aspernatur error fugiat sunt consequatur
              perferendis molestiae dolore nulla? Ad at perferendis illo nobis
              magni. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Sequi, illum mollitia deleniti enim tenetur, aliquid aspernatur
              error fugiat sunt consequatur perferendis molestiae dolore nulla?
              Ad at perferendis illo nobis magni. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Sequi, illum mollitia deleniti enim
              tenetur, aliquid aspernatur error fugiat sunt consequatur
              perferendis molestiae dolore nulla? Ad at perferendis illo nobis
              magni. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Sequi, illum mollitia deleniti enim tenetur, aliquid aspernatur
              error fugiat sunt consequatur perferendis molestiae dolore nulla?
              Ad at perferendis illo nobis magni. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Sequi, illum mollitia deleniti enim
              tenetur, aliquid aspernatur error fugiat sunt consequatur
              perferendis molestiae dolore nulla? Ad at perferendis illo nobis
              magni. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Sequi, illum mollitia deleniti enim tenetur, aliquid aspernatur
              error fugiat sunt consequatur perferendis molestiae dolore nulla?
              Ad at perferendis illo nobis magni. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Sequi, illum mollitia deleniti enim
              tenetur, aliquid aspernatur error fugiat sunt consequatur
              perferendis molestiae dolore nulla? Ad at perferendis illo nobis
              magni.
            </div>
          </div>}

        <div className="my-4 border_top_nav_course">
          <div className="flex justify-around border-t pt-4">
            <button
              className={`px-5 py-3 rounded-lg flex gap-2`}
              onClick={() => setActiveTab("course")}
            >
              <span>
                <Image
                  src="/assets/images/study-nav-ic-3.svg"
                  width={20}
                  height={20}
                  alt=""
                />
              </span>
              <span
                className={
                  activeTab === "course"
                    ? "text-color-primary"
                    : "text-black-200"
                }
              >
                Danh mục
              </span>
            </button>
            <button
              className={`px-5 py-3 rounded-lg`}
              onClick={() => setActiveTab("description")}
            >
              <span
                className={
                  activeTab === "description"
                    ? "text-color-primary"
                    : "text-black-200"
                }
              >
                Mô tả
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
