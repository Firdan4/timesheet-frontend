import { FC, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useMutationProject } from "@/hooks/useProject";

interface ModalAddProject {
  setVisibleFormAddProject: React.Dispatch<React.SetStateAction<boolean>>;
  visible: boolean;
}

export const ModalAddProject: FC<ModalAddProject> = ({
  visible,
  setVisibleFormAddProject,
}) => {
  const { createProject } = useMutationProject();
  const [projectName, setProjectName] = useState<string>("");

  const onSubmit = () => {
    if (!projectName) {
      alert("Project name is required!");
    }
    createProject.mutate({ name: projectName });
    setVisibleFormAddProject(false);
  };

  return (
    <Dialog open={visible} onOpenChange={setVisibleFormAddProject}>
      <DialogContent>
        <DialogHeader className="flex flex-col gap-5">
          <DialogHeader>
            <DialogTitle>Tambah Kegiatan Baru</DialogTitle>
            <span className="flex w-full h-[1px] bg-gray-300" />
          </DialogHeader>

          <Label htmlFor="" className="text-sm text-gray-500">
            Nama Proyek
          </Label>
          <Input type="text" onChange={(e) => setProjectName(e.target.value)} />
        </DialogHeader>

        <DialogFooter>
          <DialogClose>
            <Button
              onClick={() => setVisibleFormAddProject(false)}
              variant={"link"}
              className="text-new-red"
            >
              Kembali
            </Button>
          </DialogClose>
          <Button onClick={() => onSubmit()} className="bg-new-red">
            Simpan
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
