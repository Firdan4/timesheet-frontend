import React, { FC } from "react";
import ContainerContentFooterActivitie from "./ContainerContentFooterActivitie";
import { activitieSchema } from "@/schema/activities";
import { z } from "zod";
import { calculateTotal } from "@/lib/utils";

interface ContentFooterActivitieProps {
  activities: z.infer<typeof activitieSchema>[];
  rate: number;
}

const ContentFooterActivitie: FC<ContentFooterActivitieProps> = ({
  activities,
  rate,
}) => {
  return (
    <div className="flex flex-col gap-2 bg-new-background-page rounded-b-lg w-full py-3">
      <ContainerContentFooterActivitie className="text-sm ">
        <p>Total durasi</p>
        <div>{calculateTotal(activities, rate).totalDuration}</div>
      </ContainerContentFooterActivitie>
      <ContainerContentFooterActivitie className="font-semibold">
        <p>Total Pendapatan</p>
        <div>{calculateTotal(activities, rate).totalIncome}</div>
      </ContainerContentFooterActivitie>
    </div>
  );
};

export default ContentFooterActivitie;
