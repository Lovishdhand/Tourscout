import React from "react";
import Button from "../AdminComponents/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAddUser } from "../hooks/useAddUser";
import { useNavigate } from "react-router-dom";


function AddUser() {
   const { mutate, isPending, isError, isSuccess } = useAddUser();
  const navigate = useNavigate();
 
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    
  designation: Yup.string()
    .required("Designation is required"),

  description: Yup.string()
    .min(10, "Description must be at least 10 characters")
    .required("Description is required"),

  age: Yup.number()
    .nullable() 
    .typeError("Age must be a number")
    .min(0, "Age cannot be negative")
    .max(120, "Age must be less than or equal to 120"),
  });
  return (
    <>
      <h2 style={{ backgroundColor: "", color: "white" }}>Add User</h2>
      <div>
        <Formik
          initialValues={{ name: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            mutate(values, {
              onSuccess: () => {
                resetForm();
                 navigate('/admin/userlist');
              },
            });
          }}
        >
          {() => (
            <Form>
               <Field name="name" type="text" placeholder="Name" />
               <ErrorMessage name="name" component="div" style={{color:"red"}} />
               <Field name="designation" type="text" placeholder="Designation"/>
               <ErrorMessage name="designation" component="div" style={{color:"red"}} />
               <Field name="description" type="text" placeholder="description"/>
               <ErrorMessage name="description" component="div" style={{color:"red"}} />
               <Field name="age" type="number" placeholder="age" />
               <ErrorMessage name="age" component="div" style={{color:"red"}} />
    

              <Button text={isPending ? "Adding..." : "Add User"} color="orange" />
             
               {isError && <div style={{ color: "red" }}>Error adding user</div>}
          {isSuccess && <div style={{ color: "green" }}>User added!</div>}
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default AddUser;
