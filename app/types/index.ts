export interface ResponseData {
  code: number;
  message: string;
  data: unknown;
}

export interface LessonData {
  id: string;
  name: string;
  lessonContent: string;
  imageThumbnail: string;
  video: boolean;
  duration: string;
}

export interface LessonDataItem {
  id: string;
  name: string;
  lessonContent: string;
  imageThumbnail: string;
  video: string;
  duration: string;
  order: number;
  totalView: number;
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

export interface Customer {
  id: string;
  email: string;
  avatar: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: string;
  yearOfBirth: number;
  city: string;
  fieldOfExpertise: string;
  yearOfExperience: string;
  description: string;
  bankAccountNumber: string;
  accountBankName: string;
  accountBankOwner: string;
  createdAt: number;
  totalMoney: number;
  code: string;
  level_affiliate: number;
}

export interface NotificationItem {
  messId: string;
  messUserId: string;
  status: string;
  sendAt: number;
  readAt: number;
  title: string;
  content: string;
}

