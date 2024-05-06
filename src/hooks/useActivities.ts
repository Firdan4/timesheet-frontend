import { useMutation, useQuery, useQueryClient } from "react-query";
import { z } from "zod";
import { activitieSchema } from "@/schema/activities";
import { API } from "@/utils/axios";
import Swal from "sweetalert2";

const useMutationActivities = () => {
  const queryClient = useQueryClient();

  const createActivity = useMutation(
    (data: z.infer<typeof activitieSchema>) =>
      API({
        url: "/activities",
        method: "POST",
        data,
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("activities");
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Tambah aktivitas baru berhasil",
          showConfirmButton: false,
          timer: 1500,
        });
      },
      onError: (error) => {
        // Handle error, for example showing an error message
        console.error("Error creating activity:", error);
        // return error
      },
    }
  );

  return { createActivity };
};

const useQueryActivities = () => {
  const useGetActivities = (
    setDataActivities: React.Dispatch<
      React.SetStateAction<z.infer<typeof activitieSchema>[]>
    >,
    search: string
  ) =>
    useQuery(
      ["activities", search],
      () =>
        API({
          url: `/activities?search=${search}`,
          method: "GET",
        }),
      {
        onSuccess: (res) => {
          setDataActivities(res.data.data);
        },
        onError: (error) => {
          console.error("Error fetching activities:", error);
        },
      }
    );

  return { useGetActivities };
};

export { useMutationActivities, useQueryActivities };
