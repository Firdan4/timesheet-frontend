import React from "react";

const ContainerContentHeaderActivities = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex gap-4 items-center justify-center">{children}</div>
  );
};

export default ContainerContentHeaderActivities;
