import { useState } from "react";
import LineIcon from "../Icon/line";
import "./collapse.scss";
import Image from "next/image";

interface CourseItem {
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
    <div className="w-full collapseContainer">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 h-18 text-left text-white font-semibold rounded-t-md flex justify-between items-center"
      >
        <div>
          <h2 className="title_course text-color-primary text-wrap">
            {title}
          </h2>
          <div className="flex justify-between">
            <p className="flex gap-2">
              <span>
                <Image
                  src="/assets/images/pro-box-note-1.svg"
                  width={20}
                  height={20}
                  alt=""
                />
              </span>
              <span className="text-black opacity-20">Số lượng:</span>
              <span className="text-black">
                {numberVideo} video
              </span>
            </p>
            <p className="flex gap-2">
              <span>
                <Image
                  src="/assets/images/pro-box-note-2.svg"
                  width={20}
                  height={20}
                  alt=""
                />
              </span>
              <span className="text-black opacity-20">Thời lượng:</span>{" "}
              <span className="text-black">{timeDuration}</span>
            </p>
          </div>
        </div>
        <div>
          <LineIcon isOpen={isOpen} />
        </div>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden bg-gray-100 ${isOpen
          ? "h-auto"
          : "max-h-0"}`}
        style={{ transitionProperty: "max-height" }}
      >
        <div className="p-4">
          {data.map((item, index) =>
            <div
              key={index}
              className="group flex items-center px-2 cursor-pointer rounded-md lg:hover:bg-hover-primary h-28"
            >
              <div className="w-1/4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="lg:w-full w-11/12 h-auto rounded-md object-cover m-auto"
                />
              </div>
              <div className="w-3/4 flex flex-col gap-1 px-2">
                <h3 className="text-sm font-bold opacity-60 mb-2 text-black lg:group-hover:text-white">
                  {item.name}
                </h3>
                <div className="flex justify-between text-xs text-gray-500 lg:group-hover:text-white">
                  <p className="flex gap-2">
                    <span className="font-bold text-white bg-color-secondary px-3 py-2 rounded-lg flex gap-2">
                      <span className="m-auto">
                        <Image
                          src="/assets/images/ic-tag-important.svg"
                          width={10}
                          height={10}
                          alt=""
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
                        />
                      </span>
                      {item.isFree ? "Free" : "Paid"}
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
                      />
                    </span>
                    <span className="font-bold m-auto">
                      {item.timeDuration}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
