'use client';

import { useState } from "react";
import CollapseHeader from "./CollapseHeader";
import CourseLessonItemComponent from "./CourseLessonItemComponent";
import "./index.scss";

export interface CourseItem {
  image: string;
  type: string;
  isFree: boolean;
  timeDuration: string;
  name: string;
}

interface CollapseCourseProps {
  title: string;
  numberVideo: number;
  timeDuration: string;
  data: CourseItem[];
}

export default function CollapseCourse({
  title,
  numberVideo,
  timeDuration,
  data
}: CollapseCourseProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`w-11/12 m-auto collapseContainer`}>
      <CollapseHeader
        title={title}
        numberVideo={numberVideo}
        timeDuration={timeDuration}
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      />
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden mt-5 mb-10 bg-gray-100 ${isOpen ? "h-auto" : "max-h-0"}`}
        style={{ transitionProperty: "max-height" }}
      >
        <div className="p-4">
          {data.map((item, index) => (
            <CourseLessonItemComponent key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
