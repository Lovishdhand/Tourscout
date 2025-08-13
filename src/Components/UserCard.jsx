import { FaUser } from "react-icons/fa";
import { TbAlertHexagon } from "react-icons/tb";

import { useContext, useState } from "react";
import { UserContext } from "../App";

function UserCard({user}) {
  // const open = useContext(UserContext);
  // const selectedUser=useContext(UserContext);
     const { setOpenModal, selectedUser, setSelectedUser} = useContext(UserContext);
     const isHighlighted = selectedUser?.id === user.id;
  return (
    <div
      style={{
        backgroundColor: "green",
        height: "130px",
        width: "120px",
        marginTop: "10px",
         boxShadow:isHighlighted ? "0 0 0 10px rgba(255, 238, 238, 0.5)" :""
      }}
      onClick={() => {
      // setOpenModal(true);
        // alert(user.name)
      // setSelectedUser(user);
  //     if (selectedUser && selectedUser.id === user.id) {
  //   setSelectedUser(null); 
  // } else {
    setSelectedUser(user);
  // }
      
    
      }}
    >
      <FaUser style={{ color: "white", marginTop: "10px" }} />
      <p>{user.name}</p>
      <div style={{backgroundColor:"",height:""}}>
         <button style={{}} onClick={() => {
      setOpenModal(true);
        // alert(user.name)
      // setSelectedUser(user);
      }} >Show Details</button>
      </div>
     
    </div>
  );
}

export default UserCard;
