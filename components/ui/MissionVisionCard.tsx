import React from 'react';
import { LucideIcon } from 'lucide-react';
import IconBox from './IconBox';

interface MissionVisionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const MissionVisionCard: React.FC<MissionVisionCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="p-4 sm:p-6 bg-black rounded-xl sm:rounded-2xl border border-[#D4AF37]/20">
      <div className="mb-3 sm:mb-4">
        <IconBox icon={icon} variant="gold" size="md" />
      </div>
      <h4 className="font-bold mb-2 text-sm sm:text-base text-white">{title}</h4>
      <p className="text-xs sm:text-sm text-white/70">{description}</p>
    </div>
  );
};

export default MissionVisionCard;

