import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addAlbum } from "../api/userApi";  

export const useAddAlbum = () => {
   const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addAlbum,  
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["albums"] });
      console.log(" Album added successfully:", data);
    return data;
   
    },
    onError: (error) => {
      console.error(" Error adding user:", error);
       return error;
    }, 
  });
};