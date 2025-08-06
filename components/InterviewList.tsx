"use client";

import Image from "next/image";
import { HourGlassIcon, RightArrowIcon } from "./Icon";
import Link from "next/link";

const formatTime = (totalSeconds: number): string => {
  const minutes = Math.floor(totalSeconds / 60);

  const seconds = totalSeconds % 60;

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const InterviewList = ({ creator }: { creator: any }) => {
  const interviewData = creator.interview || [];
  const displayedInterviews = interviewData.slice(0, 4);

  if (interviewData.length === 0) {
    return null;
  }

  return (
    <div className="space-y-8">
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {displayedInterviews.map((item: any, index: number) => (
        <div
          key={item.id}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center"
        >
          <div className="w-full aspect-video bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 overflow-hidden">
            <Image
              src={item.imageUrl || creator.interviewCover}
              alt={`Interview scene ${index + 1}`}
              width={640}
              height={360}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-sm font-bold text-primary-500">
              <HourGlassIcon className="w-4 h-4" />
              <span>{formatTime(item.timestamp)}</span>
            </div>
            <h3 className="text-xl font-bold text-primary-500">
              <span className="text-orange-500">Q{index + 1}: </span>
              {item.question}
            </h3>
            <p className="text-primary-300">
              <strong className="text-primary-300">Ans: </strong>
              {item.answer}
            </p>
            {/* --- MODIFIED LINE BELOW --- */}
            <Link
              href={`${item.videoUrl}&t=${item.timestamp}s`}
              target="_blank"
              className="inline-flex items-center justify-between gap-2 px-8 py-2 text-primary-300 text-sm font-semibold border border-primary-300 rounded-full hover:bg-white/10 transition-colors self-start"
            >
              Full Interview
              <div className="p-2 bg-white rounded-full">
                <RightArrowIcon className="w-4 h-4 text-primary-500" />
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InterviewList;
