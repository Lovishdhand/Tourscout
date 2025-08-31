import { useQuery } from "@tanstack/react-query";
import { fetchPhotos } from "../api/userApi";

export const usePhotos = (filters) => {
  console.log("dff", filters);
  return useQuery({
    queryKey: ["photos", filters],
    queryFn: () => fetchPhotos(filters),
    staleTime: 1000 * 60,
  });
};
