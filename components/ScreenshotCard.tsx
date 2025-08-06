import Image from "next/image";
interface ScreenshotCardProps {
  imageUrl: string;
  title: string;
}
const ScreenshotCard = ({ imageUrl, title }: ScreenshotCardProps) => (
  <div className="relative flex-shrink-0 w-fit h-[524px] border border-grey-scale-stroke overflow-hidden rounded-2xl group cursor-pointer">
    <Image
      src={imageUrl}
      alt={title}
      width={324}
      height={524}
      className="object-contain  w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
    />
  </div>
);

export default ScreenshotCard;
