"use client";

import { useEffect, useState } from "react";
import "../../styles/study.scss";
import { CollapseCourse } from "@/app/components/Collapse";

export default function StudyPage() {
  const title = "Khoa hoc e-learning";
  const [data, setData] = useState<any[]>([]);

  const [activeTab, setActiveTab] = useState("course"); // Default tab is "course"

  useEffect(() => {
    let temp_arr = [];
    for (let i = 0; i < 20; i++) {
      let temp = {
        image: "/assets/images/course/co-hoi-cua-chuyen-gia.png",
        type: "quan_trong",
        isFree: true,
        timeDuration: "10:35",
        name: "Cơ hội thật sự của chuyên gia trong thời đại sáo rỗng!",
      };

      temp_arr.push(temp);
    }
    setData(temp_arr);
  }, []);

  return (
    <div className="study_container flex flex-col lg:flex-row lg:gap-4 lg:px-10 px-4 py-8">
      <div className="video_section flex-1 bg-gray-900  rounded-md shadow-md">
        <div className="h-full w-full flex items-center justify-center text-white">
          <p>Video Player</p>
        </div>
        <div>
          <p className="text-xxl">
            Cách để nói trúng tim đen autience - Avatar
          </p>
          <p>8:30 | 703 luot xem| bai giang: Pro</p>
        </div>
      </div>

      <div className="video_list lg:w-1/3 w-full bg-gray-100 rounded-md shadow-md mt-4 lg:mt-0 flex flex-col">
        {activeTab == "course" && (
          <div className="p-4 flex-1 overflow-y-auto">
            <h2 className="text-lg font-semibold mb-4 text-black">
              Trải nghiệm toàn bộ 202 videos- Hơn 35 giờ
            </h2>
            <div className="space-y-4">
              {data.map((item: any, index: number) => {
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
            </div>
          </div>
        )}

        {activeTab == "description" && (
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
          </div>
        )}

        <div className="my-4">
          <div className="flex justify-around border-t pt-4">
            <button
              className={`px-5 py-3 rounded-lg ${
                activeTab === "course" ? "bg-slate-700" : "bg-slate-200"
              }`}
              onClick={() => setActiveTab("course")}
            >
              <span
                className={
                  activeTab === "course" ? "text-black" : "text-gray-500"
                }
              >
                Danh mục
              </span>
            </button>
            <button
              className={`px-5 py-3 rounded-lg ${
                activeTab === "description" ? "bg-slate-700" : "bg-slate-200"
              }`}
              onClick={() => setActiveTab("description")}
            >
              <span
                className={
                  activeTab === "description" ? "text-black" : "text-gray-500"
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
