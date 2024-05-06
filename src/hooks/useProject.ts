import { OptionTypes, projectTypeDataQuery } from "@/type";
import { API } from "@/utils/axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import Swal from "sweetalert2";
const useQueryProjeect = () => {
  const useGetAllProject = (
    setOptions: React.Dispatch<React.SetStateAction<OptionTypes[]>>
  ) =>
    useQuery(
      ["project"],
      () =>
        API({
          url: `/project`,
          method: "GET",
        }),
      {
        onSuccess: (res) => {
          const options = res.data.data.map((prev: projectTypeDataQuery) => ({
            label: prev.name,
            value: String(prev.id),
          }));

          setOptions(options);
        },
        onError: (error) => {
          console.error("Error fetching activities:", error);
        },
      }
    );

  return { useGetAllProject };
};

const useMutationProject = () => {
  const queryClient = useQueryClient();

  const createProject = useMutation(
    (data: { name: string }) =>
      API({
        url: "/project",
        method: "POST",
        data,
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("project");
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Tambah proyek baru berhasil",
          showConfirmButton: false,
          timer: 1500,
        });
      },
      onError: (error) => {
        console.error("Error creating activity:", error);
      },
    }
  );

  return { createProject };
};

export { useQueryProjeect, useMutationProject };
