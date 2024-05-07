import React, { FC, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import FormEditActivitie from "./FormEditActivitie";
import { useQueryActivities } from "@/hooks/useActivities";
import { Activitie } from "@/type";

interface ModalEditActivitieProps {
  setVisibleFormEditActivitie: React.Dispatch<React.SetStateAction<boolean>>;
  visibleFormEditActivitie: boolean;
  idActivitie: number | string;
  setIdActivitie: React.Dispatch<React.SetStateAction<number | string>>;
}

const ModalEditActivitie: FC<ModalEditActivitieProps> = ({
  setVisibleFormEditActivitie,
  visibleFormEditActivitie,
  idActivitie,
  setIdActivitie,
}) => {
  const { useGetActivitiesById } = useQueryActivities();
  const [dataActivities, setDataActivities] = useState<Activitie>({
    id: "",
    activitieName: "",
    projectName: "",
    dateStart: "",
    dateEnd: "",
    timeStart: "",
    timeEnd: "",
    duration: "",
  });

  useGetActivitiesById(idActivitie, setDataActivities, setIdActivitie);

  return (
    <Dialog
      open={visibleFormEditActivitie}
      onOpenChange={setVisibleFormEditActivitie}
    >
      <DialogContent className="max-w-[85%] lg:max-w-[60%] rounded max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Kegiatan Baru</DialogTitle>
          <span className="flex w-full h-[1px] bg-gray-300" />
        </DialogHeader>
        <FormEditActivitie
          activitie={dataActivities}
          setVisibleFormEditActivitie={setVisibleFormEditActivitie}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ModalEditActivitie;
