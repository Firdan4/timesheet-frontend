import React from "react";
import Select from "react-select";

import { IoFilterSharp } from "react-icons/io5";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Label } from "../ui/label";

const ModalFilterActivitie = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"}>
          <IoFilterSharp size={20} className="text-new-red" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[90%] rounded-md sm:max-w-[425px] flex flex-col gap-5">
        <DialogHeader>
          <DialogTitle>Filter</DialogTitle>
          <span className="flex w-full h-[1px] bg-gray-300" />
        </DialogHeader>
        <div className="flex flex-col gap-1">
          <Label className="text-xs font-medium">Proyek</Label>
          <Select />
        </div>
        <DialogFooter>
          <Button variant={"link"} type="submit" className="text-new-red">
            Hapus Filter
          </Button>
          <Button type="submit" className="bg-new-red">
            Terapkan
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ModalFilterActivitie;
