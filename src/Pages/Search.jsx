import { useState } from "react";
import User from "../AdminComponents/User";
import {usePhotos} from "../hooks/usePhotos";
function Search(){
    const[userId,setuserId]=useState(null);
    const[albumId,setalbumId]=useState(null);
      const { data: photos, isLoading, isError } = usePhotos(
       {
         page:1,limit:10,search:"",userId:userId,albumId:albumId
       }
      );
      console.log(photos?.photos);
return(
<>
<div style={{backgroundColor:"red",display:"flex",justifyContent:"space-evenly", flexWrap: "wrap", 
          gap: "20px",}}>
{photos?.photos?.map((photo) => (
           
               

   <div
            key={photo.id}
            style={{
              flex: "1 1 calc(33.333% - 20px)", 
              boxSizing: "border-box",
            }}
          >
            <User data={{ photo }} />
          </div>
                    
                   
                  
              ))}

</div>


</>
);
}


export default Search;