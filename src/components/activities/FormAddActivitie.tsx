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

const FormAddActivitie = () => {
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
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => {})} className="space-y-8">
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
                  <Input {...field} type="time" />
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
                  <Input {...field} type="time" />
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
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama Proyek</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <DialogFooter>
          <DialogClose>
            <Button variant={"link"} className="text-new-red">
              Kembali
            </Button>
          </DialogClose>
          <Button type="submit" className="bg-new-red">
            Save changes
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
};

export default FormAddActivitie;
