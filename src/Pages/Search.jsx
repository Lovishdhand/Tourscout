import { useEffect, useState } from "react";
import User from "../AdminComponents/User";
import { usePhotos } from "../hooks/usePhotos";
import SearchInput from "../AdminComponents/SearchInput";
import { createContext, useContext } from "react";
export const SearchContext = createContext();
import Pagination from "../AdminComponents/Pagination";
function Search() {
 

const [filters, setFilters] = useState({
    page: 1,
    limit: 1,
    search: "",
    album_id: null,
    user_id: null,
  });
  const {
    data: photos,
    isLoading,
    isError,
  } = usePhotos(filters);


  
  return (
    <>
      <SearchContext.Provider value={{ filters, setFilters, }}>
    <div style={{backgroundColor:"green",display:"flex"}}>
      <div
        style={{
          backgroundColor: "red",
          width:"70vw",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {photos?.photos?.map((photo) => (
          <div
            key={photo.id}
            style={{
              flex: "1 1 calc(13.333%)",
              boxSizing: "border-box",
            }}
          >
            <User data={{ photo }} />
          </div>
        )) }
       
      </div>
       <div style={{backgroundColor:"blue",}}>
         <SearchInput/>

       {!isLoading && photos?.pagination?.totalPages ? (
  <Pagination totalPages={photos.pagination.totalPages} />
) : (
  <div>Loading pagination...</div>
)}

        </div>
        </div>
         </SearchContext.Provider>   
    </>
    
  );
}

export default Search;
