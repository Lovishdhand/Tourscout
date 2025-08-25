import React from "react";
import Button from "../AdminComponents/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Albumlist from "./Albumlist";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AsyncSelect from "react-select/async";
import { useUsers } from "../hooks/useUsers";

import { fetchUsers } from "../api/userApi";
import { useAddAlbum } from "../hooks/useAddAlbum";

function AddAlbum() {
  const { mutate, isPending, isError, isSuccess } = useAddAlbum();
  const navigate = useNavigate();
  const { data: users } = useUsers({
    page: 1,
    limit: 10,
    search: "",
  });
  const [openModal, setopenModal] = useState(false);
  const validationSchema = Yup.object({
    
    title: Yup.string().required("Album name is required"),
    // user_id: Yup.number().required("User is required"),
    user_id: Yup.mixed()
    // .required("User is required") // ensures some value is selected
    .test(
      "is-number",
      "Invalid user selected",
      (value) => value && typeof value.value === "number"
    ),
    
  });
 
  // console.log(users.users);
  const defaultOptions = () => {
    return users?.users?.map((u) => ({ value: u.id, label: u.name })) || [];
    // console.log(defaultOptions);
  };

  const loadOptions = async (inputValue) => {
    const { users } = await fetchUsers(1, 10, inputValue);
    // console.log(users);
    const options = users?.map((u) => ({ value: u.id, label: u.name })) || [];
    console.log(options);

    return [{ value: inputValue }, ...options];
  };

  return (
    <>
      <h2 style={{ backgroundColor: "", color: "white" }}>Add Album</h2>
      <div
        style={{
          backgroundColor: "red",
          height: "60vh",
          display: "flex",
flexDirection:"column",
          justifyContent:"space-evenly",
          alignItems: "center",
        }}
      >
        <Formik
          initialValues={{ title: "", user_id: null }}
          
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            const payload = {
      ...values,
      user_id: values.user_id.value, 
    };
            mutate(payload, {
              onSuccess: () => {
                resetForm();
                // navigate("/admin/albumlist");
              },
            });
          }}
        >
          {({setFieldValue, values}) => (
            <Form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                width: "30vw",
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              }}
            >
              <Field
                name="title"
                type="text"
                style={{ width: "29vw" }}
                placeholder="Name"
              />
              <ErrorMessage
                name="title"
                component="div"
                style={{ color: "red" }}
              />

              <AsyncSelect
                name="user_id"
               
                loadOptions={loadOptions}
                defaultOptions={defaultOptions()}
                placeholder="Search Users..."
                onChange={(selectedOption) => setFieldValue("user_id", selectedOption)
                
                
                }
                value={values.user_id}
                styles={{ container: (base) => ({ ...base, width: "30vw" }) }}
              />

              <Button
                text={isPending ? "Adding..." : "Add Album"}
                color="orange"
              />

              <ErrorMessage
                name="user_id"
                component="div"
                style={{ color: "red" }}
              />
              {isError && <div style={{ color: "red" }}>Error adding user</div>}
              {isSuccess && <div style={{ color: "green" }}>User added!</div>}
            </Form>
          )}
        </Formik>
        <Albumlist/>
  
      </div>
    </>
  );
}

export default AddAlbum;
