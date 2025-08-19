
import { useMutation } from "@tanstack/react-query";
import { addUser } from "../api/userApi";  

export const useAddUser = () => {
  return useMutation({
    mutationFn: addUser,  
    onSuccess: (data) => {
      console.log(" User added successfully:", data);
    return data;
   
    },
    onError: (error) => {
      console.error(" Error adding user:", error);
       return error;
    }, 
  });
};
