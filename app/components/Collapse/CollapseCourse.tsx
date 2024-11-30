import { useState } from "react";
import LineIcon from "../Icon/line";
import "./collapse.scss";

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
  data,
}: CollapseCourseProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full collapseContainer">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 h-18 text-left text-white font-semibold rounded-t-md flex justify-between items-center"
      >
        <div>
          <h2 className="title_course text-color-primary">{title}</h2>
          <p className="text-sm text-color-primary ">
            {numberVideo} videos • {timeDuration}
          </p>
        </div>
        <div>
          <LineIcon isOpen={isOpen} />
        </div>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden bg-gray-100 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
        style={{ transitionProperty: "max-height" }}
      >
        <div className="p-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="group flex items-center cursor-pointer p-2 mb-2 bg-white rounded-md shadow-sm hover:bg-hover-primary"
            >
              <div className="w-1/3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-auto rounded-md object-cover"
                />
              </div>

              <div className="w-2/3 flex flex-col gap-10 px-4">
                <h3 className="text-sm font-medium mb-2 text-black group-hover:text-white">
                  {item.name}
                </h3>
                <div className="flex justify-between text-xs text-gray-500 group-hover:text-white">
                  <p>{item.isFree ? "Free" : "Paid"}</p>
                  <p>{item.timeDuration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
