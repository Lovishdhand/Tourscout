

import { useContext } from "react";
import { UserContext } from "../App";

function Album({album}){
    const { setOpenModal, selectedUser, setSelectedUser,setSelectedAlbum,selectedalbum } = useContext(UserContext);
return(
<div style={{backgroundColor:"red", height:"20vh",width:"20vw",marginTop:"20px",fontSize:"10px"}}
onClick={()=>{
    // alert(album.id)
    setSelectedAlbum(album);
}}
>
<h1>{album.title}</h1>
<div style={{backgroundColor:""}}>
<h4>{album.id}</h4>
</div>

</div>

);

}


export default Album;
