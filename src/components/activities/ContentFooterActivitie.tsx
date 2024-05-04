import React from "react";
import ContainerContentFooterActivitie from "./ContainerContentFooterActivitie";

const ContentFooterActivitie = () => {
  return (
    <div className="flex flex-col gap-2 bg-new-background-page rounded-b-lg w-full py-3">
      <ContainerContentFooterActivitie className="text-sm ">
        <p>Total durasi</p>
        <div>jam</div>
      </ContainerContentFooterActivitie>
      <ContainerContentFooterActivitie className="font-semibold">
        <p>Total Pendapatan</p>
        <div>jam</div>
      </ContainerContentFooterActivitie>
    </div>
  );
};

export default ContentFooterActivitie;
