import { useState } from 'react'

// import TourScoutLogo from '../assets/'
import "../Header.css";



function Header(){

return(
 <div className="headerdiv">
{/* <p>Hellos</p> */}
{/* <div style={{backgroundColor:"",height:"10vh",width:"12vw",display:"flex",alignItems:"center",justifyContent:"center"}}> */}
<div className='logo'>
 <img src="/images/ontourlogo (1).svg" alt="Tour Scout Logo" height={"50vh"}/>

</div>

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



export default Header;