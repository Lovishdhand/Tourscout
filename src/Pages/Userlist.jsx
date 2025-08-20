import { data } from "react-router-dom";
import { useUsers } from "../hooks/useUsers";
import { useEditUser } from "../hooks/useEdituser";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../AdminComponents/Button";
function Userlist() {
  const { data: users, isLoading, isError } = useUsers();
  const { mutate, isPending: isEditPending, isError: isEditError } = useEditUser();

  const [openModal, setopenModal] = useState(false);
  const[editUser,seteditUser]=useState({id:0,name:""});
  console.log(users);
    const validationSchema = Yup.object({
      name: Yup.string().required("Name is required"),
    });
  return (
    <>
      <h1 style={{ color: "white" }}>Userlist</h1>

      <table
        border="2"
        style={{
          backgroundColor: "white",
          height: "50vh",
          width: "88vw",
          borderCollapse: "collapse",
          cursor: "pointer",
         
        }}

  
  >
        <thead>
          <tr >
            <th>Id</th>
            <th>Name</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody   >
          {isLoading
            ? "Loading......."
            : users?.user?.map((user) => (
                <tr 
                  key={user.id}
                  style={{ border: "2px solid black", backgroundColor: "" }}
                >
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>
                    <FaEdit
                      style={{ color: "blue" }}
                      onClick={() => {
                        setopenModal(!openModal);
                        seteditUser({id:user.id,name:user.name})
                      //  alert(editUser.id)4
                      // console.log(editUser);
                      }}
                    />
                  </td>
                  <td>
                    <MdDelete style={{ color: "red" }} />
                  </td>
                </tr>
              ))}
        </tbody>
      </table>

      {openModal && (
        <div
          style={{ backgroundColor: "rgba(0,0,0,0.8)", height: "30vh", width: "30vw", position:"absolute",right:"40%",bottom:"40%",zIndex:9999}}
          
        >
      <h2 style={{ backgroundColor: "", color: "white" }}>Edit User</h2>
      <div>
        <Formik
        enableReinitialize 
          initialValues={{ name:editUser.name }}
          validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
  setopenModal(false);
  console.log(values);

  mutate(
    { id: editUser.id, ...values },  
    {
      onSuccess: () => {
        resetForm();
      },
    }
  );
}}

        >
          {() => (
            <Form>
               <Field name="name" type="text"  />
    

              <Button text={ "Edit User"} color="orange" />
              <ErrorMessage name="name" component="div" style={{color:"red"}} />
               {/* {isError && <div style={{ color: "red" }}>Error adding user</div>}
          {isSuccess && <div style={{ color: "green" }}>User added!</div>} */}
            </Form>
          )}
        </Formik>
      </div>

        </div>
      )}
    </>
  );
}

export default Userlist;
