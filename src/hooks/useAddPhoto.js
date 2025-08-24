import { useMutation } from "@tanstack/react-query";
import { addPhoto } from "../api/userApi";  

export const useAddPhoto = () => {
  return useMutation({
    mutationFn: addPhoto,  
    onSuccess: (data) => {
      console.log(" Photo added successfully:", data);
    return data;
   
    },
    onError: (error) => {
      console.error(" Error adding photo:", error);
       return error;
    }, 
  });
};