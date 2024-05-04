import HeaderActivities from "@/components/activities/HeaderActivities";
import ContentHeaderActivities from "@/components/activities/ContentHeaderActivities";
import ContentFooterActivitie from "@/components/activities/ContentFooterActivitie";
import ContentActivitie from "@/components/activities/ContentActivitie";
import { Activitie } from "@/type";

const invoices: Activitie[] = [
  // {
  //   activitiName: "INV001",
  //   projectName: "INV001",
  //   dateStart: "Paid",
  //   dateEnd: "$250.00",
  //   timeStart: "Credit Card",
  //   timeEnd: "Credit Card",
  //   duration: "Credit Card",
  // },
  // {
  //   activitiName: "INV001",
  //   projectName: "INV001",
  //   dateStart: "Paid",
  //   dateEnd: "$250.00",
  //   timeStart: "Credit Card",
  //   timeEnd: "Credit Card",
  //   duration: "Credit Card",
  // },
  // {
  //   activitiName: "INV001",
  //   projectName: "INV001",
  //   dateStart: "Paid",
  //   dateEnd: "$250.00",
  //   timeStart: "Credit Card",
  //   timeEnd: "Credit Card",
  //   duration: "Credit Card",
  // },
  // {
  //   activitiName: "INV001",
  //   projectName: "INV001",
  //   dateStart: "Paid",
  //   dateEnd: "$250.00",
  //   timeStart: "Credit Card",
  //   timeEnd: "Credit Card",
  //   duration: "Credit Card",
  // },
  // {
  //   activitiName: "INV001",
  //   projectName: "INV001",
  //   dateStart: "Paid",
  //   dateEnd: "$250.00",
  //   timeStart: "Credit Card",
  //   timeEnd: "Credit Card",
  //   duration: "Credit Card",
  // },
  // {
  //   activitiName: "INV001",
  //   projectName: "INV001",
  //   dateStart: "Paid",
  //   dateEnd: "$250.00",
  //   timeStart: "Credit Card",
  //   timeEnd: "Credit Card",
  //   duration: "Credit Card",
  // },
  // {
  //   activitiName: "INV001",
  //   projectName: "INV001",
  //   dateStart: "Paid",
  //   dateEnd: "$250.00",
  //   timeStart: "Credit Card",
  //   timeEnd: "Credit Card",
  //   duration: "Credit Card",
  // },
  // {
  //   activitiName: "INV001",
  //   projectName: "INV001",
  //   dateStart: "Paid",
  //   dateEnd: "$250.00",
  //   timeStart: "Credit Card",
  //   timeEnd: "Credit Card",
  //   duration: "Credit Card",
  // },
];

export const Activities = () => {
  return (
    <>
      <div className="flex gap-20 w-full bg-white rounded-t-xl p-5">
        <HeaderActivities label="Nama Karyawan" content="Heru Firdan" />
        <HeaderActivities label="Rate" content="Rp. 12,000/jam" />
      </div>
      <div className="flex flex-col gap-2 w-full bg-white rounded-b-xl p-5 h-full">
        <ContentHeaderActivities />

        <ContentActivitie activities={invoices} />

        <ContentFooterActivitie />
      </div>
    </>
  );
};
