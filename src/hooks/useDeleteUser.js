import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "../api/userApi";  

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteUser,
    onSuccess: (data) => {
      console.log("User deleted successfully:", data);
      queryClient.invalidateQueries(["users"]); 
    },
    onError: (error) => {
      console.error("Error deleting user:", error);
    }, 
  });
};
