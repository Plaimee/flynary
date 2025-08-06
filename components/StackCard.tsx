import React from "react";

interface StackCardProps {
  icon: React.ReactElement<{ className?: string }>;
  title: string;
  stacks: string[];
}

const StackCard = ({ icon, title, stacks }: StackCardProps) => (
  <div className="bg-white rounded-2xl p-6 space-y-2 shadow-[0_4px_30px_rgba(0,0,0,0.09)]">
    <div className="flex justify-end">
      {React.cloneElement(icon, {
        className: "w-10 h-10",
      })}
    </div>
    <h3 className="font-bold text-primary-800">{title}</h3>
    <ul className="space-y-2 text-primary-300 list-disc list-inside">
      {stacks.map((stack, index) => (
        <li key={index}>{stack}</li>
      ))}
    </ul>
  </div>
);

export default StackCard;