import { useQuery } from "@tanstack/react-query";
import { fetchPhotos } from "../api/userApi";

export const usePhotos = ({page, limit, search, user_id,album_id}) => {

  return useQuery({
 
       queryKey: ["photos",{ page, limit, search, user_id, album_id }],
    queryFn:() =>  fetchPhotos({ page, limit, search, user_id, album_id }),
    staleTime: 1000 * 60, 
  });
};
