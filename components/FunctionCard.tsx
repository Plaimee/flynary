interface FunctionCardProps {
  number: string;
  title_en: string;
  title_th: string;
}
const FunctionCard = ({ number, title_en, title_th }: FunctionCardProps) => (
  <div className="flex items-center gap-x-6 rounded-2xl p-6 border border-grey-scale-stroke">
    <span className="text-6xl md:text-9xl bg-gradient-to-r from-white to-primary-500 bg-clip-text text-transparent">
      0{number}
    </span>
    <div>
      <h4 className="font-bold text-2xl text-primary-700">{title_en}</h4>
      <p className="text-base text-grey-scale-grey">{title_th}</p>
    </div>
  </div>
);

export default FunctionCard;
