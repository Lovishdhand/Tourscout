import { useQuery } from "@tanstack/react-query";
import { fetchAlbums } from "../api/userApi";

export const useAlbums = () => {

  return useQuery({
 
       queryKey: ["albums"],
    queryFn:() =>  fetchAlbums(),
    staleTime: 1000 * 60, 
  });
};
