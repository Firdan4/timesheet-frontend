import { Activitie } from "@/type";
import { FC } from "react";
import { TableCell, TableRow } from "../ui/table";
import { formatDate } from "@/lib/dateFormat";
import { calculateDuration } from "@/lib/utils";

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
      <TableCell className="">{formatDate(dateStart)}</TableCell>
      <TableCell className="">{formatDate(dateEnd)}</TableCell>
      <TableCell className=" ">{timeStart}</TableCell>
      <TableCell className=" ">{timeEnd}</TableCell>
      <TableCell className=" ">
        {calculateDuration(timeStart, timeEnd)}
      </TableCell>
      <TableCell className=" ">{duration}</TableCell>
    </TableRow>
  );
};

export default ContentActivitiTableContent;
