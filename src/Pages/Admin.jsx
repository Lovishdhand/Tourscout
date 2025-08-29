import { useState, createContext, useContext, useEffect } from "react";

import Info from "../AdminComponents/Info";

import { useUsers } from "../hooks/useUsers";
import { useAlbums } from "../hooks/useAlbums";
import { usePhotos } from "../hooks/usePhotos";



function Admin(){
       const { data: users } = useUsers({
         page: 1,
         limit: 200,
         search: "",
       });
       const{data:albums}=useAlbums();
       const{data:photos}=usePhotos();
    //    console.log('users',users?.users?.length);
       const totalUsers = users?.users?.length || 0;
       const totalalbums = albums?.albums?.length || 0;
      const totalPhotos = photos?.pagination?.total || 0;
 return (
 <>
 
  <h1 style={{backgroundColor:"red"}}>Admin Dashboard</h1>;
  <div style={{display:"flex",justifyContent:"space-evenly"}}>
<Info users={totalUsers} text={"Users"}/>
  <Info users={totalalbums} text={"Albums"}/>
  <Info users={totalPhotos} text={"Photos"}/>
  </div>
  

 </>
 );



}

export default Admin;