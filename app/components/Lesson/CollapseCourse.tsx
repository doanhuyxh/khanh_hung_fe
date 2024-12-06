import React from "react";
import { LessonData } from "./LessonList"; // Import type LessonData

interface CollapseCourseProps {
    title: string;
    data: LessonData[];
    numberVideo: number;
    timeDuration: string;
}

export const CollapseCourse: React.FC<CollapseCourseProps> = ({
    title,
    data,
    numberVideo,
    timeDuration,
}) => {
    return (
        <div className="collapse-course">
            <h3>{title}</h3>
            <div className="course-details">
                {data.slice(0, numberVideo).map((lesson) => (
                    <div key={lesson.id} className="lesson">
                        <p>{lesson.title}</p>
                        <p>{timeDuration}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
