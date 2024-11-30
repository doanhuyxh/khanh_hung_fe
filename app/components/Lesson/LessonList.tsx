import React, { useState } from "react";
import ActiveSpin from "@/app/components/ActiveSpin";
import { CollapseCourse } from "@/app/components/Collapse";
import Image from "next/image";

interface LessonListProps {
    isShowAllLesson: boolean;
    setIsShowAllLesson: (state: boolean) => void;
    activeTab: string;
    setActiveTab: (tab: string) => void;
    data: any[];
    title: string;
}

const LessonList: React.FC<LessonListProps> = ({
    isShowAllLesson,
    setIsShowAllLesson,
    data,
    title,
}) => {

    const [activeTab, setActiveTab] = useState("course");
    return (
        <>
            {activeTab == "course" &&
                <h2 className="text-lg font-semibold ml-0 mb-4 text-black flex gap-2">
                    <ActiveSpin isActive={isShowAllLesson} onToggle={setIsShowAllLesson} />
                    Trải nghiệm toàn bộ 202 videos- Hơn 35 giờ
                </h2>
            }
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

            <div className="my-4    ">
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
        </>
    );
};

export default LessonList;
