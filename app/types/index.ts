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

export interface CourseItem {
  id: string;
  name: string;
  description: boolean;
  lessonContent: string;
  imageThumbnail: string;
  video: string;
  duration: string;
}

export interface CollapseCourseProps {
  title: string;
  numberOfLessons: number;
  totalTimeDuration: string;
  data: LessonData[];
}

export interface User {
  name?: string;
  email?: string;
  avatar?: string;
}