import HeaderActivities from "@/components/activities/HeaderActivities";
import ContentHeaderActivities from "@/components/activities/ContentHeaderActivities";
import ContentFooterActivitie from "@/components/activities/ContentFooterActivitie";
import ContentActivitie from "@/components/activities/ContentActivitie";
import { useQueryActivities } from "@/hooks/useActivities";
import { useState } from "react";
import { z } from "zod";
import { activitieSchema } from "@/schema/activities";
import { useDebounce } from "@/utils/useDebounce";

export const Activities = () => {
  const { useGetActivities } = useQueryActivities();

  const [dataActivities, setDataActivities] = useState<
    z.infer<typeof activitieSchema>[]
  >([]);

  const [search, setSearch] = useState<string>("");
  const debounceSearch = useDebounce(search, 500);

  // query get activities
  useGetActivities(setDataActivities, debounceSearch);

  return (
    <>
      <div className="flex gap-20 w-full bg-white rounded-t-xl p-5">
        <HeaderActivities label="Nama Karyawan" content="Heru Firdan" />
        <HeaderActivities label="Rate" content="Rp. 12,000/jam" />
      </div>
      <div className="flex flex-col gap-2 w-full bg-white rounded-b-xl p-5 h-full">
        <ContentHeaderActivities setSearch={setSearch} />

        <ContentActivitie activities={dataActivities} />

        <ContentFooterActivitie activities={dataActivities} />
      </div>
    </>
  );
};
