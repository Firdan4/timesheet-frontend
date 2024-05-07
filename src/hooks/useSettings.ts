import { employeeSchema } from "@/schema/settings";
import { Employee } from "@/type";
import { API } from "@/utils/axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import Swal from "sweetalert2";
import { z } from "zod";

export const useQuerySettings = () => {
  const useGetEmployee = (
    setEmployee: React.Dispatch<React.SetStateAction<Employee | undefined>>
  ) =>
    useQuery(
      ["employee"],
      () =>
        API({
          url: `/employee`,
          method: "GET",
        }),
      {
        onSuccess: (res) => {
          setEmployee(res.data.data);
        },
        onError: (error) => {
          console.error("Error fetching activities:", error);
        },
      }
    );

  return { useGetEmployee };
};

export const useMutatuinSettings = () => {
  const queryClient = useQueryClient();

  const updateEmployee = useMutation(
    ({
      data,
      id,
    }: {
      data: z.infer<typeof employeeSchema>;
      id: number | string;
    }) =>
      API({
        url: `/employee/byId/${id}`,
        method: "PATCH",
        data,
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("employee");
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Update data karyawan berhasil!",
          showConfirmButton: false,
          timer: 1500,
        });
      },
      onError: (error) => {
        console.error("Error creating activity:", error);
      },
    }
  );

  return { updateEmployee };
};
