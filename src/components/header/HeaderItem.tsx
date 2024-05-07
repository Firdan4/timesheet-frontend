import HeaderItemComponent from "./HeaderItemComponent";

const HeaderItem = () => {
  return (
    <div className="flex justify-between shadow w-full py-3 pl-3 sm:pl-10 bg-white rounded">
      <div className="max-w-[100px] text-center -space-y-1 sm:-space-y-2">
        <HeaderItemComponent label="Timesheet" />
        <HeaderItemComponent label="Management" />
      </div>
      <div className="pr-5">
        <HeaderItemComponent label="By heru firdan al-Ghovari" />
      </div>
    </div>
  );
};

export default HeaderItem;
