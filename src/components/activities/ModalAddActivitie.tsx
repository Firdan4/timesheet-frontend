import { Button } from "../ui/button";
import { GoPlusCircle } from "react-icons/go";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import FormAddActivitie from "./FormAddActivitie";
import { DialogOverlay } from "@radix-ui/react-dialog";
import { ModalAddProject } from "./ModalAddProject";
import { useState } from "react";

const ModalAddActivitie = () => {
  const [visibleFormAddProject, setVisibleFormAddProject] =
    useState<boolean>(false);
  const [visibleFormAddActivitie, setVisibleFormAddActivitie] =
    useState<boolean>(false);

  return (
    <>
      <ModalAddProject
        visible={visibleFormAddProject}
        setVisibleFormAddProject={setVisibleFormAddProject}
      />

      <Dialog
        open={visibleFormAddActivitie}
        onOpenChange={setVisibleFormAddActivitie}
      >
        <DialogTrigger asChild>
          <Button
            variant={"outline"}
            className="flex gap-2 items-center justify-center bg-new-blue text-new-blue bg-opacity-15"
          >
            <GoPlusCircle size={16} />
            <p className="text-xs">Tambah Kegiatan</p>
          </Button>
        </DialogTrigger>
        <DialogOverlay className="h-screen overflow-y-auto relative">
          <DialogContent className="max-w-[85%] lg:max-w-[60%] rounded max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Tambah Kegiatan Baru</DialogTitle>
              <span className="flex w-full h-[1px] bg-gray-300" />
            </DialogHeader>

            {/* component form add activities */}
            <FormAddActivitie
              setVisibleFormAddProject={setVisibleFormAddProject}
              setVisibleFormAddActivitie={setVisibleFormAddActivitie}
            />
          </DialogContent>
        </DialogOverlay>
      </Dialog>
    </>
  );
};

export default ModalAddActivitie;
