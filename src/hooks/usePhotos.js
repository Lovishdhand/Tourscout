import { useQuery } from "@tanstack/react-query";
import { fetchPhotos } from "../api/userApi";

export const usePhotos = () => {

  return useQuery({
 
       queryKey: ["photos"],
    queryFn:() =>  fetchPhotos(),
    staleTime: 1000 * 60, 
  });
};
