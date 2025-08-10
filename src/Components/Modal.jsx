
import { IoMdClose } from "react-icons/io";
import { useContext  } from "react";
import { UserContext} from "../App";

function Modal(){
    // console.log(UserContext);
   const close=useContext(UserContext);
return(
<div style={{backgroundColor:"paleturquoise",height:"30vh",width:"20vw",position:"absolute",top:"60%",left:"45%"}}>
    <IoMdClose style={{position:"relative",left:"47%",cursor:"pointer"}} onClick={
        ()=>{
           
            close(false);
        }
    } />
<h3>Hello</h3>
</div>
);
}


export default Modal;