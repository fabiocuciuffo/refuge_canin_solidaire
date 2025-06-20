import React from "react";
import type { VolunteerCardProps } from "../types/types";

const VolunteerCard: React.FC<VolunteerCardProps> = ({
  profile,
  className = "",
}) => {
  return (
    <div className={`bg-blue text-white-custom rounded-2xl p-6 ${className}`}>
      <h3 className="title5 md:text-2xl font-bold mb-4 leading-tight">
        {profile.title}
      </h3>
      <div className="space-y-2">
        {profile.tasks.map((task, index) => (
          <div key={index} className="flex items-start">
            <span className="text-blue-200 mr-2 mt-1 flex-shrink-0">•</span>
            <p className="text-white-custom text-regular leading-relaxed">
              {task}
            </p>
          </div>
        ))}
      </div>
      e
    </div>
  );
};

export default VolunteerCard;
