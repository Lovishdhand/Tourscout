import { useState } from 'react'
import { Link } from "react-router-dom";

// import TourScoutLogo from '../assets/'
import "../Header.css";
import "../App.css";



function AdminHeader(){

return(
 <div className="headerdiv">
{/* <p>Hellos</p> */}
{/* <div style={{backgroundColor:"",height:"10vh",width:"12vw",display:"flex",alignItems:"center",justifyContent:"center"}}> */}
<div className='logo'>
 <img src="/images/ontourlogo (1).svg" alt="Tour Scout Logo" height={"50vh"}/>

</div>
<nav style={{backgroundColor:"orange",width:"90%",}}>
      <ul style={{display:"flex",listStyle: "none",justifyContent:"space-evenly",textDecoration:"none"}}>
        <li>
          <Link to="/admin/dashboard">Home</Link>
        </li>
        <li>
          <Link to="/admin/adduser">Adduser</Link>
        </li>
       
        <li>
          <Link to="/admin/userlist">Userlist</Link>
        </li>
     
        <li>
          <Link to="/admin/addalbum">Add Album</Link>
        </li>
        <li>
          <Link to="/admin/albumlist">Album</Link>
        </li>
        <li>
          <Link to="/admin/addphoto">Add Photos</Link>
        </li>
        <li>
          <Link to="/admin/photos">Photos</Link>
        </li>
      </ul>
    </nav>
<div style={{backgroundColor:"",height:"10vh",width:"78vw"}}>
    
</div>
 <div style={{backgroundColor:"",height:"10vh",width:"10vw",display:"flex",alignItems:"center",justifyContent:"center"}}>
    <button   style={{
    border: "2px solid white",
    borderRadius: "9999px", 
    padding: "8px 20px",    
    backgroundColor: "#050a19",
    color:"white",
    cursor: "pointer",
    textDecoration:"underline",
    fontFamily:"Montserrat"
  }}>Log In</button>
 </div>
</div>   
);


}



export default AdminHeader;