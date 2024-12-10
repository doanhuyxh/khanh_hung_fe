'use client';

import { useState } from "react";
import CollapseHeader from "./CollapseHeader";
import CourseLessonItemComponent from "./CourseLessonItemComponent";
import "./index.scss";
import { LessonData } from "@/app/types";

export interface CourseItem {
  id: string;
  name: string;
  description: boolean;
  lessonContent: string;
  imageThumbnail: string;
  video: string;
  duration: string;
}

interface CollapseCourseProps {
  title: string;
  numberOfLessons: number;
  totalTimeDuration: string;
  data: LessonData[];
}

export default function CollapseCourse({
  title,
  numberOfLessons,
  totalTimeDuration,
  data
}: CollapseCourseProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`w-11/12 m-auto collapseContainer`}>
      <CollapseHeader
        title={title}
        numberVideo={numberOfLessons}
        timeDuration={totalTimeDuration}
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
