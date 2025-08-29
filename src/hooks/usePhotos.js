import { useQuery } from "@tanstack/react-query";
import { fetchPhotos } from "../api/userApi";

export const usePhotos = (searchFilter) => {
  console.log("dff", searchFilter);
  return useQuery({
    queryKey: ["photos", searchFilter],
    queryFn: () => fetchPhotos(searchFilter),
    staleTime: 1000 * 60,
  });
};
