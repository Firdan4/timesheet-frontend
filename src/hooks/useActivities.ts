import { useMutation, useQuery, useQueryClient } from "react-query";
import { z } from "zod";
import { activitieSchema } from "@/schema/activities";
import { API } from "@/utils/axios";
import Swal from "sweetalert2";
import { Activitie } from "@/type";

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

  const deleteActivitie = useMutation(
    (id: number | string) =>
      API({
        url: `/activities/delete/${id}`,
        method: "DELETE",
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("activities");
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Delete aktivitas baru berhasil",
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

  const updateActivitie = useMutation(
    ({
      data,
      id,
    }: {
      data: z.infer<typeof activitieSchema>;
      id: string | number;
    }) =>
      API({
        url: `/activities/byId/${id}`,
        method: "PATCH",
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

  return { createActivity, deleteActivitie, updateActivitie };
};

const useQueryActivities = () => {
  const useGetActivities = (
    setDataActivities: React.Dispatch<React.SetStateAction<Activitie[]>>,
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

  const useGetActivitiesById = (
    id: number | string,
    setDataActivities: React.Dispatch<React.SetStateAction<Activitie>>,
    setIdActivitie: React.Dispatch<React.SetStateAction<number | string>>
  ) =>
    useQuery(
      ["activities-id", id],
      () =>
        API({
          url: `/activities/byId/${id}`,
          method: "GET",
        }),
      {
        refetchOnWindowFocus: false,
        enabled: id !== "",
        onSuccess: (res) => {
          setDataActivities(res.data.data);
          setIdActivitie("");
        },
        onError: (error) => {
          console.error("Error fetching activities:", error);
        },
      }
    );

  return { useGetActivities, useGetActivitiesById };
};

export { useMutationActivities, useQueryActivities };
