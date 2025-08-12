import '../Corousel.css'; 
import { GrNext } from "react-icons/gr";
import { MdOutlineNavigateBefore } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import { MdArrowBackIosNew } from "react-icons/md";

function Corousel(){
   const { setOpenModal, selectedUser, setSelectedUser,setSelectedAlbum,selectedalbum,filteredPhotos } = useContext(UserContext);
   const[index,setIndex]=useState(0);
   const [CreateImage,setCreateImage]=useState("")
   useEffect(()=>{
let imgurl=filteredPhotos[index]?.url;
let hexcode=imgurl?.slice(-6);
// alert(hexcode);
let image=`https://placehold.co/600x400/${hexcode ? hexcode : "orange"}/white?text=${hexcode ? hexcode : "orange"}`
setCreateImage(image);
   },[index,filteredPhotos]);
    return(
       <div style={{backgroundColor:"green",height:"60vh",marginTop:"-5px",width:"88vw"}}>
        {/* <h1>Corousel</h1> */}
{/* <h2>{filteredPhotos[index]?.url}</h2>
<h1>{filteredPhotos[index]?.id}</h1> */}

 <img src={CreateImage} style={{height:"60vh",width:"100%",objectFit:"cover"}} alt="" />


     
      <div
        style={{
          position: "absolute",
          left: "70px",
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "red",
          padding: "10px",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      >
     
        <MdArrowBackIosNew  size={60} color="white"
        
        onClick={()=>{
          setIndex((previndex)=>previndex -1)
          // alert(index);
          if( index == 0 ){
                 setIndex(filteredPhotos.length-1)
                // alert(index);

          }
        }}
        />
      </div>


      <div
        style={{
          position: "absolute",
          right: "70px",
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "red",
          padding: "10px",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      >
        <GrNext size={60} color="white" onClick={()=>{
          setIndex((previndex)=>previndex +1)
          // alert(index);
          if( index == filteredPhotos.length-1 ){
            setIndex(0);

          }
        }} />
      </div>

       </div>
    );
}


export default Corousel;