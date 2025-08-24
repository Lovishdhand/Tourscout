import { useMutation } from "@tanstack/react-query";
import { addAlbum } from "../api/userApi";  

export const useAddAlbum = () => {
  return useMutation({
    mutationFn: addAlbum,  
    onSuccess: (data) => {
      console.log(" Album added successfully:", data);
    return data;
   
    },
    onError: (error) => {
      console.error(" Error adding user:", error);
       return error;
    }, 
  });
};