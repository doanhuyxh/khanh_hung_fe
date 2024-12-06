'use client';

import Image from "next/image";
import { PlushIcon } from "../../Icon";


interface CollapseHeaderProps {
  title: string;
  numberVideo: number;
  timeDuration: string;
  isOpen: boolean;
  onClick: () => void;
}

const CollapseHeader = ({
  title,
  numberVideo,
  timeDuration,
  isOpen,
  onClick
}: CollapseHeaderProps) => {
  return (
    <button
      onClick={onClick}
      className={`w-full px-3 py-3 h-18 text-left font-semibold rounded-t-md flex justify-between items-center  ${isOpen ? "sticky top-0 z-20 bg-white" : ""}`}
    >
      <div className={`${isOpen ? "bg-white w-full px-3 py-3 h-18" : ""}`}>
        <h2 className="title_course text-color-primary text-wrap max-w-screen-xl xl:pr-2">
          {title}
        </h2>
        <div className="flex justify-between">
          <p className="flex gap-2 text-nowrap">
            <span>
              <Image
                src="/assets/images/pro-box-note-1.svg"
                width={20}
                height={20}
                alt=""
              />
            </span>
            <span className="text-black opacity-20">Số lượng:</span>
            <span className="text-black">{numberVideo} video</span>
          </p>
          <p className="flex gap-2 text-nowrap">
            <span>
              <Image
                src="/assets/images/pro-box-note-2.svg"
                width={20}
                height={20}
                alt=""
              />
            </span>
            <span className="text-black opacity-20">Thời lượng:</span>
            <span className="text-black">{timeDuration}</span>
          </p>
        </div>
      </div>
      <PlushIcon isOpen={isOpen} />
    </button>
  );
};

export default CollapseHeader;
