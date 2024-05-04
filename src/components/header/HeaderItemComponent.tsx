import React, { FC } from "react";

interface HeaderItemComponentProps {
  label: string;
}

const HeaderItemComponent: FC<HeaderItemComponentProps> = ({ label }) => {
  return (
    <h3 className="font-heading text-sm font-semibold text-new-red md:text-sm">
      {label}
    </h3>
  );
};

export default HeaderItemComponent;
