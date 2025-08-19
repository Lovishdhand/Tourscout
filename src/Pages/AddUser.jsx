import React from "react";
import Button from "../AdminComponents/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAddUser } from "../hooks/useAddUser";


function AddUser() {
   const { mutate, isPending, isError, isSuccess } = useAddUser();

 
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
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
              },
            });
          }}
        >
          {() => (
            <Form>
               <Field name="name" type="text" />
    

              <Button text={isPending ? "Adding..." : "Add User"} color="orange" />
              <ErrorMessage name="name" component="div" style={{color:"red"}} />
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
