'use client';

import Image from "next/image";

interface VideoPlayerProps {
  title: string;
  timeDuration: string;
  views: number;
  videoUrl: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  title,
  timeDuration,
  views,
  videoUrl,
}) => {
  return (
    <div className="flex-1">
      <div className="h-auto w-full flex justify-center text-white video_section">
        <video src={videoUrl||"/assets/video/video_demo.mp4"} className="w-full h-auto  object-contain" controls />
      </div>
      <div className="mt-10">
        <h1 className="lesson_name my-2">{title}</h1>
        <p className="flex gap-1">
          <span>
            <Image
              src="/assets/images/ic-clock.svg"
              width={20}
              height={20}
              alt=""
            />
          </span>
          <span className="text-black">{timeDuration}</span>
          <span className="line" />
          <span>
            <Image
              src="/assets/images/ic-play.svg"
              width={20}
              height={20}
              alt=""
            />
          </span>
          <span className="text-black">{views} Lượt xem</span>
          <span className="line" />
          <span>
            <Image
              src="/assets/images/ic-bg.svg"
              width={20}
              height={20}
              alt=""
            />
          </span>
          <span className="text-black">Bài giảng</span>
          <span className="font-bold text-white bg-green-800 px-3 py-1 rounded-lg flex gap-2">
            <span className="m-auto">
              <Image
                src="/assets/images/ic-tag-free.svg"
                width={10}
                height={10}
                alt=""
              />
            </span>
            <span className="md:divide-none hidden md:inline-block">Free</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default VideoPlayer;
