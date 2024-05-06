import ContainerContentHeaderActivities from "./ContainerContentHeaderActivities";

import { IoIosSearch } from "react-icons/io";
import ModalFilterActivitie from "./ModalFilterActivitie";
import ModalAddActivitie from "./ModalAddActivitie";
import { FC } from "react";

interface ContentHeaderActivities {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const ContentHeaderActivities: FC<ContentHeaderActivities> = ({
  setSearch,
}) => {
  return (
    <div className="flex flex-col items-center justify-between py-5 sm:flex-row">
      <ContainerContentHeaderActivities>
        <p className="font-bold">Daftar kegiatan</p>
        <ModalAddActivitie />
      </ContainerContentHeaderActivities>
      <ContainerContentHeaderActivities>
        <div className="border flex gap-1 p-1 rounded-md items-center justify-center">
          <div>
            <IoIosSearch />
          </div>
          <input
            type="text"
            className="outline-none"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <ModalFilterActivitie />
      </ContainerContentHeaderActivities>
    </div>
  );
};

export default ContentHeaderActivities;
