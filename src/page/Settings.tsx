import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { InputSettings } from "@/components/ui/input";
import { settingSchema } from "@/schema/settings";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Settings = () => {
  const form = useForm<z.infer<typeof settingSchema>>({
    resolver: zodResolver(settingSchema),
    defaultValues: {
      name: "",
      rate: 0,
    },
  });

  return (
    <div className="border w-full flex items-center justify-center h-[75vh]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(() => {})} className="space-y-8">
          <div className="flex flex-col bg-white shadow rounded-md p-8 gap-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Karyawan</FormLabel>
                  <FormControl>
                    <InputSettings {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="rate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rate</FormLabel>
                  <FormControl>
                    <InputSettings
                      prefix="/jam"
                      sufix="Rp."
                      min="0"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="w-full flex items-center justify-between">
              <Button variant={"link"} className="text-new-blue w-full">
                Batalkan
              </Button>
              <Button type="submit" className="bg-new-blue w-full">
                Simpan
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Settings;
