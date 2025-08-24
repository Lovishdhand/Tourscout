import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api/userApi";

export const useUsers = ({ page, limit, search }) => {
  console.log('search',search);
  return useQuery({
  
       queryKey: ["users", { page, limit, search }],
    queryFn:() =>  fetchUsers(page, limit, search),
    
    staleTime: 1000 * 60, 
  });
};
