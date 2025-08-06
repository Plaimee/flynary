import Image from "next/image";

interface ArticleProps {
  imageUrl: string;
  title: string;
  description: string;
}

const Article = ({ imageUrl, title, description }: ArticleProps) => {
  return (
    <div className="flex-shrink-0 w-full h-[352px] *: snap-center">
      <div className="flex flex-col h-full border border-primary-300 rounded-2xl shadow-sm overflow-hidden hover:bg-white cursor-pointer">
        {/* รูปภาพ */}
        <div className="relative w-full h-48">
          <Image
            src={imageUrl}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            className="px-4 pt-4 md:px-5 md:pt-5"
          />
        </div>

        <div className="p-4 md:p-5 flex flex-col flex-grow space-y-2">
          <h3 className="text-lg font-bold text-gray-800 truncate">{title}</h3>
          <p className="text-sm text-primary-300 truncate">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Article;
