import { Activitie } from "@/type";
import React, { FC } from "react";
import { TableCell, TableRow } from "../ui/table";

const ContentActivitiTableContent: FC<Activitie> = ({
  activitiName,
  dateEnd,
  dateStart,
  duration,
  projectName,
  timeEnd,
  timeStart,
}) => {
  return (
    <TableRow key={activitiName}>
      <TableCell className="font-medium ">{activitiName}</TableCell>
      <TableCell className="">{projectName}</TableCell>
      <TableCell className="">{dateStart}</TableCell>
      <TableCell className="">{dateEnd}</TableCell>
      <TableCell className="text-right ">{timeStart}</TableCell>
      <TableCell className="text-right ">{timeEnd}</TableCell>
      <TableCell className="text-right ">{duration}</TableCell>
      <TableCell className="text-right ">{duration}</TableCell>
    </TableRow>
  );
};

export default ContentActivitiTableContent;
