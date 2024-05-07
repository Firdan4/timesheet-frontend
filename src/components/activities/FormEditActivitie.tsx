import { activitieSchema } from "@/schema/activities";
import { Activitie, OptionTypes } from "@/type";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { DialogClose, DialogFooter } from "../ui/dialog";
import { formatDateForValue } from "@/lib/dateFormat";
import { useQueryProjeect } from "@/hooks/useProject";
import { ModalAddProject } from "./ModalAddProject";
import { useMutationActivities } from "@/hooks/useActivities";

interface FormEditActivitieProps {
  activitie: Activitie;
  setVisibleFormEditActivitie: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormEditActivitie: FC<FormEditActivitieProps> = ({
  activitie,
  setVisibleFormEditActivitie,
}) => {
  const { updateActivitie } = useMutationActivities();
  const { useGetAllProject } = useQueryProjeect();
  const [optionProject, setOptionProject] = useState<OptionTypes[]>([]);
  const [visibleFormAddProject, setVisibleFormAddProject] =
    useState<boolean>(false);

  useGetAllProject(setOptionProject);

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

  useEffect(() => {
    form.setValue("activitieName", activitie.activitieName);
    form.setValue(
      "dateEnd",
      activitie.dateEnd ? formatDateForValue(activitie.dateEnd) : ""
    );
    form.setValue(
      "dateStart",
      activitie.dateStart ? formatDateForValue(activitie.dateStart) : ""
    );
    form.setValue("projectName", activitie.projectName);
    form.setValue("timeEnd", activitie.timeEnd);
    form.setValue("timeStart", activitie.timeStart);
  }, [activitie]);

  const handleSelect = (value: string) => {
    if (!value) {
      setVisibleFormAddProject(true);
    }

    form.setValue("projectName", value);
  };

  const onSubmit = (value: z.infer<typeof activitieSchema>) => {
    updateActivitie.mutate({ data: value, id: activitie.id });
    setVisibleFormEditActivitie(false);
  };

  return (
    <Form {...form}>
      <ModalAddProject
        visible={visibleFormAddProject}
        setVisibleFormAddProject={setVisibleFormAddProject}
      />

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex gap-5 w-full items-center justify-between flex-wrap sm:flex-nowrap">
          <FormField
            control={form.control}
            name="dateStart"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tanggal Mulai</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="date"
                    value={form.getValues().dateStart}
                  />
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
                  <Input
                    {...field}
                    type="date"
                    value={form.getValues().dateEnd}
                  />
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
                  <Input
                    {...field}
                    type="time"
                    step="1"
                    value={form.getValues().timeStart}
                  />
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
                  <Input
                    {...field}
                    type="time"
                    step="1"
                    value={form.getValues().timeEnd}
                  />
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
                <Input {...field} value={form.getValues().activitieName} />
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
                  value={form.getValues().projectName}
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
                    <option key={prev.value} value={prev.label} className="m-2">
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
              type="button"
              disabled={updateActivitie.isLoading}
              className="text-new-red"
            >
              Kembali
            </Button>
          </DialogClose>
          <Button
            type="submit"
            disabled={updateActivitie.isLoading}
            className="bg-new-red"
          >
            Save changes
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
};

export default FormEditActivitie;
