import { useState } from "react";
import User from "../AdminComponents/User";
import { usePhotos } from "../hooks/usePhotos";
import SearchInput from "../AdminComponents/SearchInput";
function Search() {
  

  const [userId, setuserId] = useState(null);
  const [albumId, setalbumId] = useState(null);
  const {
    data: photos,
    isLoading,
    isError,
  } = usePhotos({
    page: 1,
    limit: 2,
    search: "",
    userId: userId,
    albumId: albumId,
  });

  console.log(photos?.photos);

  
  
  return (
    <>
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
        ))}
       
      </div>
       <div style={{backgroundColor:"blue",}}>
         <SearchInput/>
        </div>
        </div>
    </>
  );
}

export default Search;
