
import { IoMdClose } from "react-icons/io";
import { useContext  } from "react";
import { UserContext} from "../App";

function Modal(){
    // console.log(UserContext);
   const close=useContext(UserContext);
return(
<div style={{backgroundColor:"rgba(0,0,0,0.5)",height:"100vh",width:"100vw",position:"fixed",top:"0%",left:"0%",display:"flex",alignItems:"center",justifyContent:"center",zIndex:99999}}>
  

    <div style={{backgroundColor:"white",height:"20vh",width:"20vw",}} >
          <IoMdClose style={{position:"relative",left:"47%",cursor:"pointer"}} onClick={
        ()=>{
           
            close(false);
        }

        
    } />
<h3>Hello</h3>

    </div>

</div>
);
}


export default Modal;