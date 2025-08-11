import { FaUser } from "react-icons/fa";
import { TbAlertHexagon } from "react-icons/tb";

import { useContext } from "react";
import { UserContext } from "../App";

function UserCard({user}) {
  // const open = useContext(UserContext);
  // const selectedUser=useContext(UserContext);
     const { setOpenModal, selectedUser, setSelectedUser } = useContext(UserContext);
  return (
    <div
      style={{
        backgroundColor: "green",
        height: "14vh",
        width: "7vw",
        marginTop: "10px",
      }}
      onClick={() => {
      setOpenModal(true);
        // alert(user.name)
      setSelectedUser(user);
      }}
    >
      <FaUser style={{ color: "white", marginTop: "10px" }} />
      <p>{user.name}</p>
    </div>
  );
}

export default UserCard;
