import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { updateCurrentUser as updateCurrentUserApi } from "../../services/apiAuth";

export function useUpdateUser() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: updateCurrentUser, isUpdating } = useMutation({
    mutationFn: updateCurrentUserApi,
    onSuccess: (user) => {
      toast.success("User account successfully updated.");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (err) => {
      console.log("Error", err);
      toast.error("There is an error updating the user.");
    },
  });

  return { updateCurrentUser, isUpdating };
}
