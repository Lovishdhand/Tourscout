import React from "react";
import Button from "../AdminComponents/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useNavigate } from "react-router-dom";
import AsyncSelect from "react-select/async";
import { useAlbums } from "../hooks/useAlbums";

import { fetchAlbums} from "../api/userApi";
import { useAddPhoto } from "../hooks/useAddPhoto";
function AddPhoto() {

  const { mutate, isPending, isError, isSuccess } = useAddPhoto();
  const navigate = useNavigate();
  const { data: albums } = useAlbums(

);

  const validationSchema = Yup.object({
    
    caption: Yup.string().required("Caption is required"),
    // user_id: Yup.number().required("User is required"),
    album_id: Yup.mixed()
    // .required("User is required") // ensures some value is selected
    .test(
      "is-number",
      "Invalid user selected",
      (value) => value && typeof value.value === "number"
    ),
     photo: Yup.mixed()
    .required("A photo is required")
    .test("fileType", "Only JPG/PNG allowed", (value) => {
      return value && ["image/jpeg", "image/png"].includes(value.type);
    })
    .test("fileSize", "File must be less than 2MB", (value) => {
      return value && value.size <= 2 * 1024 * 1024;
    }),
    
  });
 
  // console.log(users.users);
  const defaultOptions = () => {
    return albums?.albums?.map((u) => ({ value: u.id, label: u.title })) || [];
    // console.log(defaultOptions);
  };

  const loadOptions = async (inputValue) => {
    const { albums } = await fetchAlbums();
    // console.log(users);
    const options = albums?.map((u) => ({ value: u.id, label: u.title })) || [];
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

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Formik
          initialValues={{ caption: "", album_id: null,photo:null }}
          
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
const formData = new FormData();
formData.append("caption", values.caption);
formData.append("album_id", values.album_id.value);
formData.append("photo", values.photo); 
            mutate(formData, {
              onSuccess: () => {
                resetForm();
                navigate("/admin/photos");
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
                name="caption"
                type="text"
                style={{ width: "29vw" }}
                placeholder="Caption"
              />
              <ErrorMessage
                name="caption"
                component="div"
                style={{ color: "red" }}
              />
              <input
          
                name="photo"
                type="file"
                onChange={(event)=>{
 setFieldValue("photo", event.currentTarget.files[0])
                }}
                style={{ width: "29vw" }}
                placeholder="Photo"
              />
              <ErrorMessage
                name="photo"
                component="div"
                style={{ color: "red" }}
              />

              <AsyncSelect
                name="album_id"
               
                loadOptions={loadOptions}
                defaultOptions={defaultOptions()}
                placeholder="Search Albums..."
                onChange={(selectedOption) => 
                  setFieldValue("album_id", selectedOption)
                  
                
                
                }
                value={values.album_id}
                styles={{ container: (base) => ({ ...base, width: "30vw" }) }}
              />

              <Button type="submit"
                text={isPending ? "Adding..." : "Add Photo"}
                color="orange"
              />

              <ErrorMessage
                name="album_id"
                component="div"
                style={{ color: "red" }}
              />
              {isError && <div style={{ color: "red" }}>Error adding user</div>}
              {isSuccess && <div style={{ color: "green" }}>User added!</div>}
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default AddPhoto;
