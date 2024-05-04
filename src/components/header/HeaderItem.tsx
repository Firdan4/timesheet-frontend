import HeaderItemComponent from "./HeaderItemComponent";

const HeaderItem = () => {
  return (
    <div className="shadow w-full py-3 pl-3 sm:pl-10 bg-white rounded">
      <div className="max-w-[100px] text-center -space-y-1 sm:-space-y-2">
        <HeaderItemComponent label="Timesheet" />
        <HeaderItemComponent label="Management" />
      </div>
    </div>
  );
};

export default HeaderItem;
