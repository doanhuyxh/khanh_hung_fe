'use client';

import Image from "next/image";
import { LessonData } from "@/app/types";

import { useRouter } from "next/navigation";

interface CourseItemComponentProps {
  item: LessonData;
}

const CourseLessonItemComponent = ({ item }: CourseItemComponentProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/learn/study/${item.id}`);
  };

  return (
    <div className="group flex items-center cursor-pointer rounded-md lg:hover:bg-hover-primary p-3 mb-4" onClick={handleClick}>
      <div className="w-auto border border-none rounded-md overflow-hidden">
        <Image
          src={item.imageThumbnail}
          alt={item.name}
          width={152}
          height={90}
        />
      </div>
      <div className="w-3/4 flex flex-col gap-3 px-2">
        <h3 className="font-bold mb-2 text-black lg:group-hover:text-white group-hover:opacity-100 lg:text-xl">
          {item.name}
        </h3>
        <div className="flex justify-between text-xs text-gray-500 lg:group-hover:text-white">
          <p className="flex gap-2">
            <span className="font-bold text-white bg-color-secondary px-3 py-3 rounded-lg flex gap-2 text-nowrap">
              <span className="m-auto">
                <Image
                  src="/assets/images/ic-tag-important.svg"
                  width={10}
                  height={10}
                  alt=""
                  objectFit="contain"
                />
              </span>
              Nổi bật
            </span>
            <span className="font-bold text-white bg-green-800 px-3 py-2 rounded-lg flex gap-2">
              <span className="m-auto">
                <Image
                  src="/assets/images/ic-tag-free.svg"
                  width={10}
                  height={10}
                  alt=""
                  objectFit="contain"
                />
              </span>
              {item ? "Free" : "Paid"}
            </span>
          </p>
          <p className="flex justify-items-center align-middle">
            <span className="m-auto">
              <Image
                src="/assets/images/ic-clock.svg"
                width={20}
                height={20}
                alt=""
                className="hover:text-white"
                objectFit="contain"
              />
            </span>
            <span className="font-bold m-auto">{item.duration}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseLessonItemComponent;
