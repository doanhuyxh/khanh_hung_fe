export interface LessonData {
    id: string;
    name: string;
    lessonContent: string;
    imageThumbnail: string;
    video: boolean;
    duration: string;
}

export interface CourseData {
    id: string;
    name: string;
    image: string;
    numberOfLessons: number;
    costPrice: number;
    totalTimeDuration: string;
    lesson: LessonData[];
}
