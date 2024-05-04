import React from "react";

const ContainerContentFooterActivitie = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`flex items-center text-new-blue justify-between w-full px-3 ${className}`}
    >
      {children}
    </div>
  );
};

export default ContainerContentFooterActivitie;
