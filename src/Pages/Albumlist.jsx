import { data } from "react-router-dom";
import {useAlbums} from "../hooks/useAlbums";
import { useEditUser } from "../hooks/useEdituser";
import { useDeleteUser } from "../hooks/useDeleteUser";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../AdminComponents/Button";
import Swal from "sweetalert2";
import DialogBox from "../AdminComponents/DialogBox";

function Albumlist() {
  const[dialogMessage , setDialogMessage]=useState("");
  const [action,setAction]=useState({
    action:"",
    fields:[],
select:false
  });
  const { data: albums, isLoading, isError } = useAlbums(
    
  );

  const { mutate, isPending: isEditPending, isError: isEditError } = useEditUser();
const { mutateAsync } = useDeleteUser();

const handleDelete = async (id) => {
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "You won’t be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "Cancel",
  });

  if (result.isConfirmed) {
    try {
      await mutateAsync({ id });  
      Swal.fire("Deleted!", "User has been deleted.", "success");
    } catch (error) {
      Swal.fire("Error!", "Something went wrong.", "error");
    }
  }
};

  const [openModal, setopenModal] = useState(false);
console.log(data.albums);
    const validationSchema = Yup.object({
      name: Yup.string().required("Name is required"),
    });
  return (
    <>
      {/* <h1 style={{ color: "white" }}>Albumlist</h1> */}

      <table
        border="2"
        style={{
          backgroundColor: "white",
          height: "10vh",
          width: "58vw",
          borderCollapse: "collapse",
          cursor: "pointer",
         
        }}

  
  >
        <thead>
          <tr >
            <th>Id</th>
            <th>Title</th>
            <th>User</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody   >
          {isLoading
            ? "Loading......."
            : albums?.albums?.map((album) => (
                <tr 
                  key={album.id}
                  style={{ border: "2px solid black", backgroundColor: "" ,height:"2vh"}}
                >
                  <td>{album.id}</td>
                  <td>{album.title}</td>
                  <td>{album.user.name}</td>
                  <td>
                    <FaEdit
                      style={{ color: "blue" }}
                      onClick={() => {
                        setopenModal(!openModal);
             setDialogMessage("Are you sure you want to edit?");
             setAction({action:"Edit",fields:1,select:true});
                      }}
                    />
                  </td>
                  <td>
                    <MdDelete style={{ color: "red" }}
                    onClick={()=>{
                      setopenModal(!openModal);
                         setDialogMessage("Are you sure you want to delete?");
                         setAction({action:"Delete",fields:0,select:false});
handleDelete(album.id)
                    }}
                    
                    />
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
{/* 
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
               {isError && <div style={{ color: "red" }}>Error adding user</div>}
          {isSuccess && <div style={{ color: "green" }}>User added!</div>}
            </Form>
          )}
        </Formik>
      </div>

        </div>
      )} */}
          {openModal && (
  <DialogBox
    message={dialogMessage}dialogaction={action.action} fields={action.fields}select={action.select}
   
  />
)}

    </>
  );
}

export default Albumlist;
