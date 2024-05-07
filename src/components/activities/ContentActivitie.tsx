import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import ContentActivitieTableHeader from "./ContentActivitieTableHeader";
import ContentActivitiTableContent from "./ContentActivitiTableContent";
import { FC } from "react";
import { Activitie } from "@/type";

interface ContentActivitieProps {
  activities: Activitie[];
  handleActionActivitie: (id: number | string, type: string) => void;
}

const ContentActivitie: FC<ContentActivitieProps> = ({
  activities,
  handleActionActivitie,
}) => {
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
                key={item.id}
                id={item.id}
                activitieName={item.activitieName}
                dateEnd={item.dateEnd}
                dateStart={item.dateStart}
                duration={""}
                projectName={item.projectName}
                timeEnd={item.timeEnd}
                timeStart={item.timeStart}
                handleActionActivitie={handleActionActivitie}
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
