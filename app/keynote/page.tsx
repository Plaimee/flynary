import ReelCard from "@/components/ReelCard";
import { allReels } from "@/lib/data";

const YouTubePlayer = ({
  videoId,
  className,
}: {
  videoId: string;
  className: string;
}) => {
  return (
    // Container ที่กำหนดอัตราส่วน 16:9 ทำให้วิดีโอ responsive
    <div className={`aspect-video w-full ${className}`}>
      <iframe
        className="w-full h-full rounded-lg shadow-xl"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const KeynotePage = () => {
  const leftVideoId = "QGsevnbItdU"; // วิดีโอธรรมชาติ
  const centerVideoId = "hI-y5anGcUA"; // วิดีโอเทคโนโลยี
  const rightVideoId = "hAyPTJFgFEs";

  return (
    <div className="default-layout">
      <div className="flex w-full max-w-7xl items-center justify-center gap-8 md:gap-10 lg:gap-16">
        {/* === วิดีโอด้านซ้าย (เอียง) === */}
        <div className="hidden lg:block w-1/4 transform -rotate-12 transition-transform duration-300 hover:rotate-0 hover:scale-110">
          <YouTubePlayer videoId={leftVideoId} className="" />
        </div>

        {/* === วิดีโอตรงกลาง === */}
        <div className="w-full md:w-1/2 transform transition-transform duration-300 hover:scale-105 z-10">
          <YouTubePlayer videoId={centerVideoId} className="" />
        </div>

        {/* === วิดีโอด้านขวา (เอียง) === */}
        <div className="hidden lg:block w-1/4 transform rotate-12 transition-transform duration-300 hover:rotate-0 hover:scale-110">
          <YouTubePlayer videoId={rightVideoId} className="" />
        </div>
      </div>

      <div className="text-[32px] font-bold w-full align-baseline text-grey-scale-grey">
        Reels
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6 w-full">
        {allReels.map((reel) => (
          <ReelCard
            key={reel.id}
            title={reel.title}
            thesisName={reel.thesis}
            youtubeVideoId={reel.youtubeVideoId}
          />
        ))}
      </div>
    </div>
  );
};
export default KeynotePage;
