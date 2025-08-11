
import { IoMdClose } from "react-icons/io";
import { useContext  } from "react";
import { UserContext} from "../App";

function Modal(){
    // console.log(UserContext);
//    const close=useContext(UserContext);
   const { setOpenModal, selectedUser, setSelectedUser } = useContext(UserContext);
//    const selectuser
return(
<div style={{backgroundColor:"rgba(0,0,0,0.5)",height:"100vh",width:"100vw",position:"fixed",top:"0%",left:"0%",display:"flex",alignItems:"center",justifyContent:"center",zIndex:99999}}>
  

    <div style={{backgroundColor:"white",height:"50vh",width:"30vw",}} >
          <IoMdClose style={{position:"relative",left:"47%",cursor:"pointer"}} onClick={
        ()=>{
           
            setOpenModal(false);
        }

        
    } />
<h3>Username:{selectedUser.username}</h3>
<h3>Email:{selectedUser.email}</h3>
<br/>
<h3>Address:</h3>
<h3>Street:{selectedUser.address.street}</h3>
<h3>City:{selectedUser.address.city}</h3>
<h3>Pincode:{selectedUser.address.zipcode}</h3>

    </div>

</div>
);
}


export default Modal;