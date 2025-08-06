interface DetailItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}
const DetailItem = ({ icon, label, value }: DetailItemProps) => (
  <div className="flex items-center gap-x-3">
    <div className="flex-shrink-0 bg-primary-100 p-2 rounded-full">{icon}</div>
    <div className="flex flex-col md:flex-row gap-x-2">
      <span className="font-bold text-start md:text-center text-primary-800">
        {label}:
      </span>
      <div className="text-primary-800">{value}</div>
    </div>
  </div>
);
export default DetailItem;
