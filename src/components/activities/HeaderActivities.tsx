import React, { FC } from "react";

interface HeaderActivities {
  label: string;
  content: string;
}

const HeaderActivities: FC<HeaderActivities> = ({ content, label }) => {
  return (
    <div>
      <p className="text-sm">{label}</p>
      <p className="font-medium">{content}</p>
    </div>
  );
};

export default HeaderActivities;
