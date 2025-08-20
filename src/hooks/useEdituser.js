
import { useMutation } from "@tanstack/react-query";
import { editUser } from "../api/userApi";  

export const useEditUser = () => {
  return useMutation({
    mutationFn: editUser,  
    onSuccess: (data) => {
      console.log(" User updated successfully:", data);
    return data;
   
    },
    onError: (error) => {
      console.error(" Error updated user:", error);
       return error;
    }, 
  });
};
