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
import { useMutatuinSettings, useQuerySettings } from "@/hooks/useSettings";
import { employeeSchema } from "@/schema/settings";
import { Employee } from "@/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Settings = () => {
  const [employee, setEmployee] = useState<Employee | undefined>();

  const { useGetEmployee } = useQuerySettings();
  const { updateEmployee } = useMutatuinSettings();

  // hook query employee
  useGetEmployee(setEmployee);

  const form = useForm<z.infer<typeof employeeSchema>>({
    resolver: zodResolver(employeeSchema),
    defaultValues: {
      name: "",
      rate: "0",
    },
  });

  useEffect(() => {
    form.setValue("name", employee?.name || "");
    form.setValue("rate", employee?.rate || "0");
  }, [employee?.name, employee?.rate]);

  const onSubmit = (value: z.infer<typeof employeeSchema>) => {
    updateEmployee.mutate({ data: value, id: employee?.id || "" });
  };

  return (
    <div className="border w-full flex items-center justify-center h-[75vh]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex flex-col bg-white shadow rounded-md p-8 gap-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Karyawan</FormLabel>
                  <FormControl>
                    <InputSettings {...field} value={form.getValues().name} />
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
                      value={form.getValues().rate}
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
