import { data } from "react-router-dom";
import { useUsers } from "../hooks/useUsers";
function Userlist(){
const { data: users, isLoading, isError } = useUsers();
console.log(users );
return(
    <>
     <h1 style={{color:"white"}}
    >Userlist</h1>
<table style={{backgroundColor:"white" ,height:"50vh",width:"88vw"}}>
 <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {users?.user?.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
            </tr>
          ))}
        </tbody>

</table>
    </>
   
    
);
  }

  export default Userlist;