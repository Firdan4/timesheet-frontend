import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { activitieSchema } from "@/schema/activities";
import { DialogClose, DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";
import { useMutationActivities } from "@/hooks/useActivities";
import { useQueryProjeect } from "@/hooks/useProject";
import { FC, useState } from "react";
import { OptionTypes } from "@/type";

interface FormAddActivitieProps {
  setVisibleFormAddProject: React.Dispatch<React.SetStateAction<boolean>>;
  setVisibleFormAddActivitie: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormAddActivitie: FC<FormAddActivitieProps> = ({
  setVisibleFormAddProject,
  setVisibleFormAddActivitie,
}) => {
  const { useGetAllProject } = useQueryProjeect();
  const [optionProject, setOptionProject] = useState<OptionTypes[]>([]);
  const [selectedValue, setSelectedValue] = useState<string>("");

  useGetAllProject(setOptionProject);

  const { createActivity } = useMutationActivities();

  const form = useForm<z.infer<typeof activitieSchema>>({
    resolver: zodResolver(activitieSchema),
    defaultValues: {
      activitieName: "",
      dateEnd: "",
      dateStart: "",
      projectName: "",
      timeEnd: "",
      timeStart: "",
    },
  });

  const handleSelect = (value: string) => {
    if (!value) {
      setVisibleFormAddProject(true);
    }

    setSelectedValue(value);
    form.setValue("projectName", value);
  };

  const onSubmit = (value: z.infer<typeof activitieSchema>) => {
    createActivity.mutate(value);
    setVisibleFormAddActivitie(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex gap-5 w-full items-center justify-between flex-wrap sm:flex-nowrap">
          <FormField
            control={form.control}
            name="dateStart"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tanggal Mulai</FormLabel>
                <FormControl>
                  <Input {...field} type="date" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dateEnd"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tanggal Selesai</FormLabel>
                <FormControl>
                  <Input {...field} type="date" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="timeStart"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Waktu Mulai</FormLabel>
                <FormControl>
                  <Input {...field} type="time" step="1" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="timeEnd"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Waktu Selesai</FormLabel>
                <FormControl>
                  <Input {...field} type="time" step="1" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="activitieName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Judul Kegiatan</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="projectName"
          render={() => (
            <FormItem>
              <FormLabel>Nama Proyek</FormLabel>
              <FormControl>
                <select
                  value={selectedValue}
                  onChange={(e) => handleSelect(e.target.value)}
                  className="w-full border rounded-md p-2"
                >
                  <option value="" disabled selected hidden></option>
                  <option value="" className="text-new-red">
                    <Button>
                      <span className="text-lg">+</span> Tambah Proyek
                    </Button>
                  </option>
                  {optionProject?.map((prev) => (
                    <option value={prev.label} className="m-2">
                      {prev.label}
                    </option>
                  ))}
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <DialogFooter>
          <DialogClose>
            <Button
              variant={"link"}
              disabled={createActivity.isLoading}
              className="text-new-red"
            >
              Kembali
            </Button>
          </DialogClose>
          <Button
            type="submit"
            disabled={createActivity.isLoading}
            className="bg-new-red"
          >
            Save changes
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
};

export default FormAddActivitie;
