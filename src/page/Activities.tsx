import HeaderActivities from "@/components/activities/HeaderActivities";
import ContentHeaderActivities from "@/components/activities/ContentHeaderActivities";
import ContentFooterActivitie from "@/components/activities/ContentFooterActivitie";
import ContentActivitie from "@/components/activities/ContentActivitie";
import {
  useMutationActivities,
  useQueryActivities,
} from "@/hooks/useActivities";
import { useState } from "react";
import { useDebounce } from "@/utils/useDebounce";
import ModalEditActivitie from "@/components/activities/ModalEditActivitie";
import { Activitie, Employee } from "@/type";
import Swal from "sweetalert2";
import { useQuerySettings } from "@/hooks/useSettings";
import { formatIdr } from "@/lib/utils";

export const Activities = () => {
  const { useGetActivities } = useQueryActivities();
  const { useGetEmployee } = useQuerySettings();
  const { deleteActivitie } = useMutationActivities();

  const [dataActivities, setDataActivities] = useState<Activitie[]>([]);
  const [visibleFormEditActivitie, setVisibleFormEditActivitie] =
    useState<boolean>(false);
  const [idActivitie, setIdActivitie] = useState<number | string>("");

  const [employee, setEmployee] = useState<Employee | undefined>();
  const [search, setSearch] = useState<string>("");
  const debounceSearch = useDebounce(search, 500);

  // query get activities
  useGetActivities(setDataActivities, debounceSearch);

  // query get employee
  useGetEmployee(setEmployee);

  const handleActionActivitie = (id: number | string, type: string) => {
    if (type === "Delete") {
      Swal.fire({
        icon: "question",
        title: "Do you want to save the changes?",
        showCancelButton: true,
        confirmButtonText: "Delete",
      }).then((result) => {
        if (result.isConfirmed) {
          deleteActivitie.mutate(id);
        }
      });
      return;
    }

    if (!id) {
      Swal.fire({
        icon: "error",
        title: "Gagal!",
        text: "Id data is required!",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    setIdActivitie(id);
    setVisibleFormEditActivitie(true);
  };

  return (
    <>
      {/* this modal topup for edit activities */}
      <ModalEditActivitie
        visibleFormEditActivitie={visibleFormEditActivitie}
        setVisibleFormEditActivitie={setVisibleFormEditActivitie}
        idActivitie={idActivitie}
        setIdActivitie={setIdActivitie}
      />

      <div className="flex gap-20 w-full bg-white rounded-t-xl p-5">
        <HeaderActivities
          label="Nama Karyawan"
          content={employee ? employee.name : ""}
        />
        <HeaderActivities
          label="Rate"
          content={`${employee ? formatIdr(employee?.rate || "0") : ""} / jam`}
        />
      </div>
      <div className="flex flex-col gap-2 w-full bg-white rounded-b-xl p-5 h-full">
        <ContentHeaderActivities setSearch={setSearch} />

        <ContentActivitie
          activities={dataActivities}
          handleActionActivitie={handleActionActivitie}
        />

        <ContentFooterActivitie
          activities={dataActivities}
          rate={employee ? parseFloat(employee?.rate) : 0}
        />
      </div>
    </>
  );
};
