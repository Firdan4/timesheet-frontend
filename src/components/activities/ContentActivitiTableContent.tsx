import { Activitie } from "@/type";
import { FC } from "react";
import { TableCell, TableRow } from "../ui/table";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { formatDate } from "@/lib/dateFormat";
import { calculateDuration } from "@/lib/utils";
import { Button } from "../ui/button";

interface ContentActivitiTableContentProps extends Activitie {
  handleActionActivitie: (id: number | string, type: string) => void;
}

const ContentActivitiTableContent: FC<ContentActivitiTableContentProps> = ({
  id,
  activitieName,
  dateEnd,
  dateStart,
  // duration,
  projectName,
  timeEnd,
  timeStart,
  handleActionActivitie,
}) => {
  return (
    <TableRow>
      <TableCell className="font-medium ">{activitieName}</TableCell>
      <TableCell className="">{projectName}</TableCell>
      <TableCell className="">{formatDate(dateStart)}</TableCell>
      <TableCell className="">{formatDate(dateEnd)}</TableCell>
      <TableCell className=" ">{timeStart}</TableCell>
      <TableCell className=" ">{timeEnd}</TableCell>
      <TableCell className=" ">
        {calculateDuration(timeStart, timeEnd)}
      </TableCell>
      <TableCell className="flex items-center justify-center text-new-red">
        <Button
          variant={"ghost"}
          onClick={() => handleActionActivitie(id, "Edit")}
        >
          <CiEdit size={20} />
        </Button>
        <Button
          variant={"ghost"}
          onClick={() => handleActionActivitie(id, "Delete")}
        >
          <MdDeleteOutline size={20} />
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default ContentActivitiTableContent;
