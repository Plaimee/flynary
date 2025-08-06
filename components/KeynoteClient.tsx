"use client";
import { KeyIcon, ShuffleIcon } from "@/components/Icon";
import ReelCard from "@/components/ReelCard";
import { allReels } from "@/lib/data";
import { useState } from "react";
import Image from "next/image";

const YouTubePlayer = ({
  videoId,
  timestamp = 0,
  className,
  autoplay = true,
}: {
  videoId: string;
  timestamp?: number;
  className: string;
  autoplay?: boolean;
}) => {
  let src = `https://www.youtube.com/embed/${videoId}?mute=1&loop=1&playlist=${videoId}&start=${timestamp}`;
  if (autoplay) {
    src += "&autoplay=1";
  }

  return (
    <div className={`aspect-video w-full ${className}`}>
      <iframe
        key={`${videoId}-${timestamp}-${autoplay}`} // เพิ่ม autoplay ใน key เพื่อให้ re-render ถูกต้อง
        className="w-full h-full rounded-lg shadow-xl"
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const InteractiveVideoCard = ({
  videoId,
  timestamp,
  cover,
}: {
  videoId: string;
  timestamp?: number;
  cover: string;
}) => {
  const [isClicked, setIsClicked] = useState(false);

  if (isClicked) {
    return (
      <YouTubePlayer
        videoId={videoId}
        timestamp={timestamp}
        autoplay={true}
        className=""
      />
    );
  }

  return (
    <div
      onClick={() => setIsClicked(true)}
      className="relative aspect-video w-full cursor-pointer group"
    >
      <Image
        src={cover}
        width={390}
        height={190}
        alt="Video Thumbnail"
        className="w-full h-full object-cover rounded-lg shadow-xl"
      />
    </div>
  );
};

const KeynoteClient = () => {
  const centerVideoId = "l9wpjPvD-h8";
  const [leftReel, setLeftReel] = useState(allReels[0]);
  const [rightReel, setRightReel] = useState(allReels[1]);

  const handleGlobalShuffle = () => {
    const availableReels = allReels.filter(
      (reel) => reel.id !== leftReel.id && reel.id !== rightReel.id
    );

    if (availableReels.length < 2) {
      console.warn("มีโปรเจกต์เหลือไม่พอที่จะสุ่มพร้อมกัน 2 อัน");
      const tempReel = leftReel;
      setLeftReel(rightReel);
      setRightReel(tempReel);
      return;
    }

    const shuffled = availableReels.sort(() => 0.5 - Math.random());

    const newLeftReel = shuffled[0];
    const newRightReel = shuffled[1];

    setLeftReel(newLeftReel);
    setRightReel(newRightReel);
  };

  return (
    <div className="default-layout">
      <div className="flex w-full max-w-7xl items-center justify-center gap-8 md:gap-10 lg:gap-16">
        <div className="hidden md:flex flex-col items-center gap-4 w-1/4">
          <div className="w-full transform -rotate-12 transition-transform duration-300 hover:rotate-0 hover:scale-110">
            <InteractiveVideoCard
              videoId={leftReel.youtubeVideoId}
              cover={leftReel.cover}
              timestamp={leftReel.timestamp}
            />
          </div>
          <h3 className="font-semibold text-grey-scale-grey text-center h-12">
            {leftReel.title}
          </h3>
        </div>

        <div className="w-full md:w-1/2 transform transition-transform duration-300 hover:scale-105 z-10">
          <YouTubePlayer videoId={centerVideoId} className="" />
        </div>

        <div className="hidden md:flex flex-col items-center gap-4 w-1/4">
          <div className="w-full transform rotate-12 transition-transform duration-300 hover:rotate-0 hover:scale-110">
            <InteractiveVideoCard
              videoId={rightReel.youtubeVideoId}
              timestamp={rightReel.timestamp}
              cover={rightReel.cover}
            />
          </div>
          <h3 className="font-semibold text-gray-700 text-center h-12">
            {rightReel.title}
          </h3>
        </div>
      </div>

      <div className="hidden sm:flex justify-center w-full my-8">
        <button
          onClick={handleGlobalShuffle}
          className="flex items-center gap-3 px-6 py-3 border border-primary-300 text-primary-300 rounded-full shadow-lg hover:bg-primary-600 transition-all duration-300 hover:bg-primary-300 hover:text-white hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
        >
          <ShuffleIcon className="w-6 h-6 hover:bg-white" />
          <span className="text-lg font-bold">สุ่มโปรเจกต์ทั้งหมด</span>
        </button>
      </div>

      <div className="flex w-full gap-x-4">
        <div className="p-4 bg-primary-100/10 rounded-full">
          <KeyIcon className="w-8 h-8 text-primary-500" />
        </div>
        <h2 className="flex flex-col lg:flex-row gap-x-2 text-[32px] font-bold text-primary-500 md:px-0 text-center md:text-start">
          Keynotes
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6 w-full">
        {allReels.map((reel) => (
          <ReelCard
            key={reel.id}
            title={reel.title}
            thesisName={reel.thesis}
            youtubeVideoId={reel.youtubeVideoId}
            timestamp={reel.timestamp}
            cover={reel.cover}
          />
        ))}
      </div>
    </div>
  );
};
export default KeynoteClient;
