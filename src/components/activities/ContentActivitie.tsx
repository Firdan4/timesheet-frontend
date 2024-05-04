import React, { FC } from "react";
import { Activitie } from "@/type";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import ContentActivitieTableHeader from "./ContentActivitieTableHeader";
import ContentActivitiTableContent from "./ContentActivitiTableContent";

interface ContentActivitieProps {
  activities: Activitie[];
}

const ContentActivitie: FC<ContentActivitieProps> = ({ activities }) => {
  return (
    <div className="relative rounded-lg min-h-[30vh] max-h-[31vh] overflow-auto">
      <Table className="overflow-scroll relative">
        <TableHeader>
          <ContentActivitieTableHeader />
        </TableHeader>
        <TableBody>
          {activities.length ? (
            activities.map((item) => (
              <ContentActivitiTableContent
                key={item.activitiName}
                activitiName={item.activitiName}
                dateEnd={item.dateEnd}
                dateStart={item.dateStart}
                duration={item.duration}
                projectName={item.projectName}
                timeEnd={item.timeEnd}
                timeStart={item.timeStart}
              />
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={8}
                className="text-center text-gray-500 text-sm"
              >
                Belum ada kegiatan
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ContentActivitie;
